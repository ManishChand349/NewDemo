import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AmityUN from"../assets/Carousel-img/AmityUN.webp"
import AmritaUN from"../assets/Carousel-img/AmritaUN.webp"

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
    name: `John Morgan`,
    img: `${AmritaUN}`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
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