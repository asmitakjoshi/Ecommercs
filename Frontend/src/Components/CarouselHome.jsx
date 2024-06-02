import { Carousel } from "@material-tailwind/react";



export function CarouselHome(props) {
  return (
    <Carousel className="rounded-xl">
       {props.carouselItems.map((item, index) => {
          return (
      
            <div key={index}
              className="ps-banner--4 bg--top-right bg-right bg-cover bg-no-repeat "
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className="ps-banner__content flex justify-center h-full item-center ">
                <div className="ps-banner__left">
                  <small>{item.subHeading}</small>
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                  <a className="button-default ps-btn ps-btn--rounded" href="#">
                    Shop now
                  </a>
                </div>
                <div className="ps-banner__right">
                  <div className="ps-banner__image">
                    <img src={item.prodImage} alt={item.prodImage} />
                    <div className="ps-banner__badge blue">
                      <span>
                        save<strong>{item.offer}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
     
    </Carousel>
  );
}
