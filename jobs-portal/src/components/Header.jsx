import { styles } from '../styles';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='py-4 sm:py-6 shadow'>
      <div className='container flex justify-between items-center'>
        <Logo />
        <div>
          <a href='/signup' className={`mr-1.5 font-medium ${styles.button}`}>
            Signup
          </a>
          <a href='/login' className={` font-medium ${styles.button} `}>
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
