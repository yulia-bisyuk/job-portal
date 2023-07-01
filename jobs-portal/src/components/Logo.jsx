import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <div className='flex'>
      <p className='mr-1 font-poppins font-medium text-[24px] leading-[27px] text-primaryGreen'>
        JobsPortal
      </p>

      <img src={logo} alt='logo' width='24px' height='24px' />
    </div>
  );
};

export default Logo;
