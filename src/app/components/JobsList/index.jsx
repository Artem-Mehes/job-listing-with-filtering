import { useState, useEffect, useCallback } from 'react';
import data from '@constants/data';
import {
  Wrapper,
  FiltersList,
  Header,
  ClearFilters,
  RemoveFilter,
  FilterItem,
  FilterText,
} from './styles';
import Job from './Job';

const JobsList = () => {
  const [jobsList, setJobsList] = useState(data);
  const [filters, setFilters] = useState(new Set());

  useEffect(() => {
    if (filters.size > 0) {
      const filteredList = data.filter(
        ({ isNew, featured, languages, tools, role, level }) => {
          const jobInfo = [...languages, ...tools, role, level];

          if (isNew) jobInfo.push('New');
          if (featured) jobInfo.push('Featured');

          return [...filters].every(filter => jobInfo.includes(filter));
        }
      );

      setJobsList(filteredList);
    } else {
      setJobsList(data);
    }
  }, [filters]);

  const addFilter = useCallback(
    filter => {
      const filtersCopy = new Set(filters).add(filter);
      setFilters(filtersCopy);
    },
    [filters]
  );

  const removeFilter = filter => {
    const filtersCopy = new Set(filters);
    filtersCopy.delete(filter);
    setFilters(filtersCopy);
  };

  const clearAllFilters = () => {
    const filtersCopy = new Set(filters);
    filtersCopy.clear();
    setFilters(filtersCopy);
  };

  return (
    <Wrapper>
      {filters.size > 0 && (
        <Header>
          <FiltersList>
            {[...filters].map(filter => (
              <FilterItem key={filter}>
                <FilterText>{filter}</FilterText>
                <RemoveFilter
                  onClick={() => removeFilter(filter)}
                  type="button"
                />
              </FilterItem>
            ))}
          </FiltersList>
          <ClearFilters onClick={clearAllFilters} type="button">
            Clear
          </ClearFilters>
        </Header>
      )}
      <ul>
        {jobsList.map(({ id, ...jobInfo }) => (
          <Job key={id} jobInfo={jobInfo} addFilter={addFilter} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default JobsList;
