import { layout } from '../styles';
import girl from '../assets/girl.svg';
import { statistics } from '../constants';

const Statistics = () => {
  return (
    <section className={`${layout.section} bg-lightGrey`}>
      <div className='container flex justify-center items-center'>
        <img
          className='hidden sm:block w-[250px] mr-[30px]'
          src={girl}
          alt='illustration'
        />
        <ul className='flex items-center px-[16px] w-fit h-fit bg-white rounded-lg'>
          {statistics.map((stat, i) => (
            <>
              <li
                key={stat.id}
                className=' p-[10px] ss:p-[16px] flex items-center '
              >
                <div>
                  <p className='mb-[6px] sm:mb-[12px] text-center text-textGrey uppercase text-[16px] sm:text-[20px]'>
                    {stat.title}
                  </p>{' '}
                  <p className='text-center text-black font-bold text-[18px] sm:text-[24px] uppercase '>
                    {stat.value}
                  </p>
                </div>
              </li>
              <span className=' last:hidden h-[48px] ss:h-[60px] sm:h-[90px] w-[0.5px] bg-primaryGreen mx-[0px] sm:mx-[6px] sm:mx-[10px]'></span>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
