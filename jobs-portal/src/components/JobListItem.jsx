import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { getAbbreviation, parseDate } from '../helpers';
import { styles } from '../styles';
import sprite from '../assets/sprite.svg';

const JobListItem = ({ job }) => {
  return (
    <li className={`py-[20px] px-[40px] rounded-lg shadow flex `}>
      <span
        className={`w-[75px] h-[75px] ${styles.flexCenter} font-normal text-[28px] text-white bg-primaryGreen rounded-full `}
      >
        {getAbbreviation(job.name)}
      </span>
      <div className='stars-date-save'>
        <div className='flex'>
          {[...Array(Math.ceil(Math.random() * 5))].map((e, i) => (
            <svg key={i} className='w-[14px] h-[14px] '>
              <use href={sprite + '#icon-star'} />
            </svg>
          ))}
        </div>
        <p>
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
    </li>
  );
};

JobListItem.propTypes = {
  job: PropTypes.object,
};

export default JobListItem;
