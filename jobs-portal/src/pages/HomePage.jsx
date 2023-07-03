import Hero from '../components/Hero';
import JobList from '../components/JobList';
import Partners from '../components/Partners';
import PopularCategories from '../components/PopularCategories';
import Statistics from '../components/Statistics';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Partners />
      <PopularCategories />
      <JobList />
      <Statistics />
    </>
  );
};

export default HomePage;
