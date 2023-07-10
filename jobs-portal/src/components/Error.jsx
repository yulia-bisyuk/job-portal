import PropTypes from 'prop-types';
import errorImg from '../assets/error.svg';

const Error = ({ text }) => {
  return (
    <div
      style={{ backgroundImage: `url(${errorImg})` }}
      className='w-full h-[300px] my-[20px] bg-contain bg-no-repeat bg-center'
    >
      <p className='text-center text-darkGreen uppercase'>{text}</p>
    </div>
  );
};

Error.propTypes = {
  text: PropTypes.string,
};

export default Error;
