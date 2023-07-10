import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <Link to='/' className='flex'>
      <p className='mr-1 font-poppins font-medium text-[24px] leading-[27px] text-primaryGreen'>
        JobsPortal
      </p>

      <img src={logo} alt='logo' width='24px' height='24px' />
    </Link>
  );
};

export default Logo;
