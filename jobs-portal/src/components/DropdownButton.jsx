import { useState, useEffect, useRef } from 'react';
import 'animate.css';
import { categories } from '../constants';

const DropdownButton = () => {
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
    <div className='animate__animated animate__backInLeft'>
      <button
        ref={btnRef}
        onClick={() => setIsOpened((prev) => !prev)}
        className='text-white bg-primaryGreen hover:bg-darkGreen focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center transition duration-300'
        type='button'
      >
        Search Job by Category{' '}
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
        <div className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[214px] h-[160px] overflow-scroll'>
          <ul
            ref={ref}
            className='py-2 text-sm text-gray-700 '
            aria-labelledby='dropdownDefaultButton'
          >
            {categories.map((category, index) => (
              <li key={index} className='block px-4 py-2 hover:bg-lightGreen '>
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
