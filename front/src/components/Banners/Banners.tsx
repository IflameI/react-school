import Slider from 'react-slick';

import bannerOne from '../../assets/img/banners/i_01.png';
import bannerTwo from '../../assets/img/banners/i_02.png';
import bannerThree from '../../assets/img/banners/i_03.png';
import bannerFour from '../../assets/img/banners/i_04.png';
import arrowLeft from '../../assets/img/banners/arrow-l.png';
import arrowRight from '../../assets/img/banners/arrow-r.png';

const Banners: React.FC = () => {
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <img src={arrowLeft} alt='arrow' />,
    nextArrow: <img src={arrowRight} alt='arrow' />,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className='banners'>
      <div className='container'>
        <div className='banners__slider slider-banners slider'>
          <Slider {...settings}>
            <div className='slider-banners__item'>
              <div className='slider-banners__row'>
                <div className='slider-banners__column'>
                  <img src={bannerOne} alt='#' />
                  <span>Федеральный институт педагогических измерений</span>
                </div>
              </div>
            </div>
            <div className='slider-banners__item'>
              <div className='slider-banners__row'>
                <div className='slider-banners__column'>
                  <img src={bannerTwo} alt='#' />
                  <span>Федеральная служба по надзору в сфере образования и науки</span>
                </div>
              </div>
            </div>
            <div className='slider-banners__item'>
              <div className='slider-banners__row'>
                <div className='slider-banners__column'>
                  <img src={bannerThree} alt='#' />
                  <span>Министерство науки и высшего образования Российской Федерации</span>
                </div>
              </div>
            </div>
            <div className='slider-banners__item'>
              <div className='slider-banners__row'>
                <div className='slider-banners__column'>
                  <img src={bannerFour} alt='#' />
                  <span>Министерство просвещения Российской Федерации</span>
                </div>
              </div>
            </div>
            <div className='slider-banners__item'>
              <div className='slider-banners__row'>
                <div className='slider-banners__column'>
                  <img src={bannerOne} alt='#' />
                  <span>Федеральный институт педагогических измерений</span>
                </div>
              </div>
            </div>
          </Slider>
          {/* <div className='slider-banners__body'></div> */}
        </div>
      </div>
    </section>
  );
};

export default Banners;
