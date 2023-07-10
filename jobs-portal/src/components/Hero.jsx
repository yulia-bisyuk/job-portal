import { layout, styles } from '../styles';

import 'animate.css';
import { forwardRef, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../constants';
import { scrollToView } from '../helpers';
import heroImg from '../assets/hero-img.svg';
import DropdownButton from './DropdownButton';
import { JobDetailsContext } from '../App';

const Hero = forwardRef(function Hero(props, ref) {
  const { setCategory } = useContext(JobDetailsContext);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <section className={` bg-lightGreen ${layout.section}`}>
      <div className='container'>
        <div className='sm:flex justify-between mb-[30px] sm:mb-[20px]'>
          <div>
            <div className='group '>
              <h1
                className={` text-black group-hover:text-primaryGreen transition duration-500 ${styles.heading1}`}
              >
                Find A{' '}
                <span
                  className={` text-primaryGreen  group-hover:text-black transition duration-500 ${styles.heading1}`}
                >
                  Job
                </span>{' '}
                That
                <br />{' '}
                <span
                  className={` text-primaryGreen group-hover:text-black transition duration-500 ${styles.heading1}`}
                >
                  Matches
                </span>{' '}
                Your <br />
                Passion{' '}
              </h1>
            </div>
            <p className={` text-textGrey ${styles.paragraph}`}>
              Hand-picked opportunities to work from home, remotely, freelance,
              full-time, part-time, contract and internships.
            </p>
          </div>
          <img
            src={heroImg}
            alt='main-illustration'
            className='w-full sm:w-[328px] md:w-[412px] lg:w-[600px] animate__animated animate__backInRight'
          />
        </div>
        <DropdownButton
          text='Search Job by Category'
          options={categories}
          style={{ animate: 'backInLeft', height: 'h-[160px]' }}
          onClick={(e) => {
            setCategory(e.target.innerText);
            setSearchParams({ page: 1 });
            scrollToView(ref);
          }}
        />
      </div>
    </section>
  );
});

// Hero.propTypes = {
//   ref: PropTypes.array,
// };

export default Hero;
