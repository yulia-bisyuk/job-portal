import PropTypes from 'prop-types';

const Modal = ({ children, setModalOpened, title }) => {
  return (
    <>
      <div
        data-modal-backdrop='static'
        className='fixed top-0 left-0 right-0 z-50 bg-lightGreen w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-full'
      >
        <div className='relative w-full max-w-2xl h-full mx-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-darkGreen '>{title}</h3>
              <button
                type='button'
                onClick={() => {
                  setModalOpened(false);
                }}
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>

            <div className='p-6 space-y-6'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  setModalOpened: PropTypes.func,
};

export default Modal;
