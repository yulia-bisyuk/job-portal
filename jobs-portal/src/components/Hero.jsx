import { layout, styles } from '../styles';
import 'animate.css';
import heroImg from '../assets/hero-img.svg';
import DropdownButton from './DropdownButton';

const Hero = () => {
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
            className='w-full sm:w-[328px] md:w-[412px] lg:w-[480px] animate__animated animate__backInRight'
          />
        </div>
        <DropdownButton />
      </div>
    </section>
  );
};

export default Hero;
