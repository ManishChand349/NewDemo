import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AmityUN from"../assets/Carousel-img/AmityUN.webp"
import AmritaUN from"../assets/Carousel-img/AmritaUN.webp"
import ChandigarhUN from"../assets/Carousel-img/ChandigarhUN.webp"
import DattaUN from"../assets/Carousel-img/DattaUN.webp"
import GlaUN from"../assets/Carousel-img/GlaUN.webp"
import LovelyUN from"../assets/Carousel-img/LovelyUN.webp"
import MaharishiUN from"../assets/Carousel-img/MaharishiUN.webp"
import ManavUN from"../assets/Carousel-img/ManavUN.webp"
import ManipalUN from"../assets/Carousel-img/ManipalUN.webp"
import SastraUN from"../assets/Carousel-img/SastraUN.webp"
import UpesUN from"../assets/Carousel-img/UpesUN.webp"
import UttaranchalUN from"../assets/Carousel-img/UttaranchalUN.webp"
import VignansUN from"../assets/Carousel-img/VignansUN.webp"

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
     <Main>
    <div className='container'>
      <div className="carousel-div">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="inner-div">
            <div className=''>
              <img src={d.img} alt="" className="img"/>
            </div>
            <div className="box-2">
              <p className="name">{d.name}</p>
              <hr  className="line"/>
              <p className="rating">{d.review}</p>
              <p className="price">{d.price}</p>
              <button className='btn'>Compare</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>

    </div>
    </Main>
  );
}

const data = [
  {
    name: `AMITY UNIVERSITY ONLINE`,
    img: `${AmityUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `AMRITA UNIVERSITY ONLINE`,
    img: `${AmritaUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `CHANDIGARH UNIVERSITY ONLINE`,
    img: `${ChandigarhUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `DMIHER UNIVERSITY ONLINE`,
    img: `${DattaUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `GLA UNIVERSITY ONLINE`,
    img: `${GlaUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `LPU ONLINE`,
    img: `${LovelyUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `MMU ONLINE`,
    img: `${MaharishiUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `MANAV RACHNA UNIVERSITY ONLINE`,
    img: `${ManavUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `MANIPAL UNIVERSITY ONLINE`,
    img: `${ManipalUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `SASTRA UNIVERSITY ONLINE`,
    img: `${SastraUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `UPES ONLINE`,
    img: `${UpesUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `UTTARANCHAL UNIVERSITY ONLINE`,
    img: `${UttaranchalUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `VIGNAN UNIVERSITY`,
    img: `${VignansUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
];

export default Carousel;
const Main = styled.div`
*{
     padding: 0;
     margin: 0;
     font-family: 'Poppins', sans-serif;
   }
.container{
     max-width: 60%;
     margin: auto;
}
.carousel-div{
     margin: 20px;
}
.inner-div{
     max-width: 70%;
     margin: auto;
     display: flex;
     justify-content: center;
     background-color: #fff;
     height: 250px;
     color: #000;
     border-radius: 8px;
     border: none !important;
     padding: 20px 25px;
}
.box-2{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

}
.name{
     font-size: 0.6rem;
     margin: 10px ;
     margin-bottom: 20px;
     color: #495057;
}
.rating{
     margin-top:20px;
     color: #495057;
     font-size: 0.9rem;
}
.btn{
     margin-top: 20px;
     padding: 10px 50px;
     border-radius: 6px;
     border: none;
     font-size: 1.0rem;
     color: #fff;
     font-size: 900;
     background-color: #0B5ED7;
     cursor: pointer;
     margin-bottom: 20px;
}
.line{
     height: 0.01rem;
     width: 100%;
     background-color: #495057;

}
.img{
     margin: auto;
     margin-top: 30px;
}
.price{
     color: #0B5ED7;
     font-size: 0.9rem;
     font-weight: 900;
}

`