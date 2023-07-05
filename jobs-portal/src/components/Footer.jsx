import { layout, styles } from '../styles';
import { socials } from '../constants';

const Footer = () => {
  return (
    <section className={` bg-primaryGreen ${layout.section}`}>
      <div className='container'>
        <h3 className={`text-white uppercase ${styles.heading3}`}>Follow Us</h3>
        <ul className='flex justify-center '>
          {socials.map((social) => (
            <li key={social.id} className='mr-[8px] last:mr-0 group'>
              <a
                href={social.link}
                className='flex rounded-full p-[12px] bg-lightGreen group-hover:bg-darkGreen transition duration-300'
              >
                {
                  <social.icon
                    className='group-hover:fill-white transition duration-300'
                    style={{
                      width: '20px',
                      height: '20px',
                      color: '#0C4F3F',
                    }}
                  />
                }
              </a>
            </li>
          ))}
        </ul>
        <p className='font-poppins font-normal text-center text-[12px] text-white leading-10 w-full mt-5 border-t-[0.5px] border-white'>
          © 2023 Jobs Portal. Designed And Developed By Yuliia Bisiuk
        </p>
      </div>
    </section>
  );
};

export default Footer;
