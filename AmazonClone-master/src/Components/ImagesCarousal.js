import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImagesCarousal () {
  return (
    <div>
      <Carousel
        autoPlay={ true }
        infiniteLoop={ true }
        interval={ "2000" }
        showStatus={ false }
        showThumbs={ false }
        showIndicators={ false }
      >
        <div>
          <img src={ require( '../Images/PC_Hero.jpg' ) } alt='' />

        </div>
        <div>
          { <img src={ require( "../Images/Homepage_DesktopHero_3000x1200_3_1x._CB589917529_.jpg" ) } alt='' /> }

        </div>
        <div>
          { <img src={ require( "../Images/shoes.jpg" ) } alt='' /> }
        </div>
      </Carousel>
    </div>
  )
}

export default ImagesCarousal