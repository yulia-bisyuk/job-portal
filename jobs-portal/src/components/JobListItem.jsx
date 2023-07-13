import PropTypes from 'prop-types';
import { getAbbreviation, parseDate } from '../helpers';
import { effects, styles } from '../styles';
import sprite from '../assets/sprite.svg';
import { Link } from 'react-router-dom';

const JobListItem = ({ job, setModalOpened }) => {
  return (
    <li
      className={`flex flex-col justify-between py-[13px] px-[16px] mb-[10px] md:mb-[0px] last:mb-[0px] rounded-lg shadow bg-lightGreen`}
    >
      <div className='flex items-center mb-[12px]'>
        <span
          className={`min-w-[60px] min-h-[60px] ${styles.flexCenter} text-white bg-primaryGreen font-normal text-[28px] rounded-full mr-[20px]`}
        >
          {getAbbreviation(job.name)}
        </span>

        <div>
          <div className='flex justify-start items-center mb-[12px]'>
            <div className='flex mr-[20px]'>
              {[...Array(Math.ceil(Math.random() * 5))].map((e, i) => (
                <svg key={i} className='w-[14px] h-[14px] '>
                  <use href={sprite + '#icon-star'} />
                </svg>
              ))}
            </div>

            <p className=' posted text-[14px] font-normal text-textLightGrey leading-6'>
              Posted{' '}
              <span className='text-darkGreen font-bold'>
                {parseDate(job.publication_date)}
              </span>
            </p>
          </div>

          <div className='all-content-except-image'>
            <Link to='/details' className={`${effects.textHover}`}>
              <h4 className={`mb-[5px] ${styles.heading4} leading-6 `}>
                {job.name}
              </h4>
            </Link>

            <p className='mt-[0px] mb-[7px] text-[16px] font-normal text-textLightGrey leading-6'>
              Department name:{' '}
              {job.categories.length !== 0 ? job.categories[0].name : 'Unknown'}
            </p>

            <div className='info flex  flex-col sm:flex-row items-right'>
              <div className='location flex items-center mr-[12px]'>
                <svg className='w-[14px] h-[14px] mr-[8px]'>
                  <use href={sprite + '#icon-location'} />
                </svg>
                <p className='text-[14px] font-normal text-textLightGrey leading-6'>
                  {job.locations.length !== 0
                    ? job.locations[0].name
                    : 'Location hidden'}
                </p>
              </div>
              <div className='work-time flex items-center'>
                <svg className='w-[14px] h-[14px] mr-[8px]'>
                  <use href={sprite + '#icon-time'} />
                </svg>
                <p className='text-[14px] font-normal text-textLightGrey leading-6'>
                  Full time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='ml-auto'>
        <Link to='/details'>
          <button
            className={`bg-lightGreen font-medium mr-[8px] ${styles.button} `}
            type='button'
          >
            Details
          </button>
        </Link>
        <button
          className={` font-medium ${styles.button}`}
          type='button'
          onClick={() => {
            setModalOpened(true);
          }}
        >
          Apply
        </button>
      </div>
    </li>
  );
};

JobListItem.propTypes = {
  job: PropTypes.object,
  setModalOpened: PropTypes.func,
};

export default JobListItem;
