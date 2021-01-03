import {
  StyledJob,
  Logo,
  Company,
  New,
  Featured,
  Header,
  Position,
  Footer,
  Tablets,
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
}) => {
  return (
    <StyledJob>
      <Logo src={logo} alt="logo" />
      <div>
        <Header>
          <Company>{company}</Company>
          {isNew && <New>new!</New>}
          {featured && <Featured>featured</Featured>}
        </Header>
        <Position>{position}</Position>
        <ul>
          {[postedAt, contract, location].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Tablets>
        {[role, level, ...languages, ...tools].map(item => (
          <li key={item}>{item}</li>
        ))}
      </Tablets>
    </StyledJob>
  );
};

export default Job;
