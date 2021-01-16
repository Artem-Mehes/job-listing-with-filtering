import Header from '@components/Header';
import JobsList from '@components/JobsList';
import { Main } from './styles';

const Home = () => (
  <>
    <Header />
    <Main>
      <JobsList />
    </Main>
  </>
);

export default Home;
