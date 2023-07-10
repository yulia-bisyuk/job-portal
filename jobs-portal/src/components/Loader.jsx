import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  return (
    <div className='flex justify-center p-[20px]'>
      <ClipLoader color='#338573' size={36} aria-label='Loading Spinner' />
    </div>
  );
};

export default Loader;
