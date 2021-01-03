import React from 'react';
import data from '@constants/data';
import { Main, List } from './styles';
import Job from './Job';

const JobsList = () => {
  return (
    <Main>
      <List>
        {data.map(({ id, ...jobInfo }) => (
          <Job key={id} jobInfo={jobInfo} />
        ))}
      </List>
    </Main>
  );
};

export default JobsList;
