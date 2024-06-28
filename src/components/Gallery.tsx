import { images } from "../images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  return (
    <div className="">
    <div className="w-1/2 h-3/4 -left-1/2 translate-x-1/2">
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
          <img src={image.src} alt="gallery" width={image.width} height={image.height} />
          </div>
        ))}          
      </Carousel>
      </div>
      </div>
  )
}

export default Gallery