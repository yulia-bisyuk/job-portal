import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { layout, styles } from '../styles';
import { partners } from '../constants';

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className={`${layout.section}`}>
      <div className='container '>
        <h2 className={`${styles.heading2}`}>We are glad to be trusted by!</h2>
        <Slider
          {...settings}
          className='py-[20px] border-y-2 border-lightGreen'
        >
          {partners.map((partner) => (
            <div key={partner.id} className='flex align-center'>
              <img
                src={partner.logo}
                className='!outline-none'
                alt='partner'
                width='100px'
                height='100px'
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
