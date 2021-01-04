import { useState, useEffect, useCallback } from 'react';
import data from '@constants/data';
import {
  Wrapper,
  FiltersHeading,
  FiltersList,
  Filter,
  Header,
  ClearFilters,
  RemoveFilter,
} from './styles';
import Job from './Job';

const JobsList = () => {
  const [jobsList, setJobsList] = useState(data);
  const [filters, setFilters] = useState(new Set());

  useEffect(() => {
    if (filters.size > 0) {
      const filteredList = data.filter(
        ({ isNew, featured, languages, tools, role, level }) => {
          const jobInfo = [
            ...languages,
            ...tools,
            role,
            isNew && 'New',
            featured && 'Featured',
            level,
          ];

          return [...filters].every(filter => jobInfo.includes(filter));
        }
      );

      setJobsList(filteredList);
    } else {
      setJobsList(data);
    }
  }, [filters]);

  const addFilter = useCallback(filter => {
    const filtersCopy = new Set(filters).add(filter);
    setFilters(filtersCopy);
  });

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
      <Header>
        <FiltersHeading>Filters: </FiltersHeading>
        {filters.size > 0 && (
          <>
            <FiltersList>
              {[...filters].map(filter => (
                <Filter key={filter}>
                  {filter}
                  <RemoveFilter
                    onClick={() => removeFilter(filter)}
                    type="button"
                  />
                </Filter>
              ))}
            </FiltersList>
            <ClearFilters onClick={clearAllFilters} type="button">
              Clear
            </ClearFilters>
          </>
        )}
      </Header>
      <ul>
        {jobsList.map(({ id, ...jobInfo }) => (
          <Job key={id} jobInfo={jobInfo} addFilter={addFilter} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default JobsList;
