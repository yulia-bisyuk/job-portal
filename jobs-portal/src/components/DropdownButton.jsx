import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'animate.css';

const DropdownButton = ({ text, options, style, onClick }) => {
  const [isOpened, setIsOpened] = useState(false);

  const ref = useRef(null);
  const btnRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      btnRef.current &&
      !btnRef.current.contains(e.target)
    ) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <div className={`animate__animated animate__${style.animate}`}>
      <button
        ref={btnRef}
        onClick={() => setIsOpened((prev) => !prev)}
        className='text-white bg-primaryGreen hover:bg-darkGreen focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center transition duration-300 relative'
        type='button'
      >
        {text}
        <svg
          className='w-4 h-4 ml-2'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>

      {isOpened && (
        <div
          className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[214px] h-${style.height} overflow-scroll`}
        >
          <ul
            ref={ref}
            className='py-2 text-sm text-gray-700 '
            aria-labelledby='dropdownDefaultButton'
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={onClick}
                className='block px-4 py-2 hover:bg-lightGreen '
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

DropdownButton.propTypes = {
  text: PropTypes.string,
  options: PropTypes.array,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default DropdownButton;
