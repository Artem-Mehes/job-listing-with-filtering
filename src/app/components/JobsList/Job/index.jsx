import { memo } from 'react';
import {
  StyledJob,
  Logo,
  Company,
  New,
  Featured,
  Header,
  Position,
  FooterList,
  FooterListItem,
  Tablets,
  JobTablet,
  JobInfo,
  Line,
} from './styles';

const Job = ({
  jobInfo: {
    logo,
    company,
    isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    role,
    level,
    languages,
    tools,
  },
  addFilter,
}) => (
  <StyledJob isBorder={postedAt.startsWith('1d')}>
    <Logo src={logo} alt="logo" />
    <JobInfo>
      <Header>
        <Company>{company}</Company>
        {isNew && <New onClick={() => addFilter('New')}>new!</New>}
        {featured && (
          <Featured onClick={() => addFilter('Featured')}>featured</Featured>
        )}
      </Header>
      <Position>{position}</Position>
      <FooterList>
        {[postedAt, contract, location].map(item => (
          <FooterListItem key={item}>{item}</FooterListItem>
        ))}
      </FooterList>
    </JobInfo>
    <Line />
    <Tablets>
      {[role, level, ...languages, ...tools].map(item => (
        <JobTablet key={item} onClick={() => addFilter(item)} value={item}>
          {item}
        </JobTablet>
      ))}
    </Tablets>
  </StyledJob>
);

export default memo(Job);
