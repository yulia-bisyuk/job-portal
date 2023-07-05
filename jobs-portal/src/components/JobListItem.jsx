import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { getAbbreviation, parseDate } from '../helpers';
import { effects, styles } from '../styles';
import sprite from '../assets/sprite.svg';

const JobListItem = ({ job }) => {
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
            {/* font-weight: 300; font-size: 14px; line-height: 1.21;
            letter-spacing: 0.206667px; color: rgb(135, 141, 157); */}
            <p className=' posted text-[14px] font-normal text-textLightGrey leading-6'>
              {'Posted ' +
                formatDistanceToNow(
                  new Date(
                    parseDate(job.publication_date)[0],
                    parseDate(job.publication_date)[1],
                    parseDate(job.publication_date)[2]
                  )
                ) +
                ' ago'}
            </p>
          </div>

          <div className='all-content-except-image'>
            <a href='/details' className={`${effects.textHover}`}>
              <h4 className={`mb-[5px] ${styles.heading4} leading-6 `}>
                {job.name}
              </h4>
            </a>

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
        <a href='/details'>
          <button
            className={`bg-lightGreen font-medium mr-[8px] ${styles.button} `}
            type='button'
          >
            Details
          </button>
        </a>
        <button className={` font-medium ${styles.button}`} type='button'>
          Apply
        </button>
      </div>
    </li>
  );
};

JobListItem.propTypes = {
  job: PropTypes.object,
};

export default JobListItem;
