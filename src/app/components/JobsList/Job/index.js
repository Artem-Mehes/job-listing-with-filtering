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
  Tablet,
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
}) => {
  return (
    <StyledJob>
      <Logo src={logo} alt="logo" />
      <div>
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
      </div>
      <Tablets>
        {[role, level, ...languages, ...tools].map(item => (
          <Tablet key={item} onClick={() => addFilter(item)} value={item}>
            {item}
          </Tablet>
        ))}
      </Tablets>
    </StyledJob>
  );
};

export default Job;
