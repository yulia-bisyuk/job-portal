import { useNavigate } from 'react-router-dom';
import sprite from '../assets/sprite.svg';
import { styles } from '../styles';

const JobActions = () => {
  const navigate = useNavigate();

  const onGoBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='flex justify-around items-center w-full max-w-[480px] pb-[10px] mb-[20px] mx-auto border-b-2 border-lightGreen'>
      <button
        onClick={onGoBackClick}
        type='button'
        className={`${styles.actionButton}`}
      >
        <svg width='24' height='24' className='mr-[4px]'>
          <use href={sprite + '#icon-arrow-back'} />
        </svg>
        Go Back
      </button>
      <button type='button' className={`${styles.actionButton}`}>
        <svg width='24' height='24' className='mr-[6px]'>
          <use href={sprite + '#icon-bookmark'} />
        </svg>
        Save
      </button>
      <button type='button' className={`${styles.actionButton}`}>
        <svg width='24' height='24' className='mr-[6px]'>
          <use href={sprite + '#icon-share'} />
        </svg>
        Share
      </button>
    </div>
  );
};

export default JobActions;
