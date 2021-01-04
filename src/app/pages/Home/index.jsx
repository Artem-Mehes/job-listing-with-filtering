import Header from '@components/Header';
import JobsList from '@components/JobsList';
import { Main } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <JobsList />
      </Main>
    </>
  );
};

export default Home;
