import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className="">
              <p className="name">{d.name}</p>
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
    img: `/src/assets/Carousel-img/amity-online-university-logo.webp`,
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
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Rating: 4.4/5`,
    price: `14,500/semesters`,
  },
  
  
];

export default Carousel;
const Main = styled.div`
.container{
     max-width: 50%;
     margin: auto;
}
.carousel-div{
     margin: 20px;
}
.inner-div{
     max-width: 60%;
     margin: auto;
     background-color: #fff;
     height: 225px;
     color: #000;
     border-radius: 4px;
     border: none;
     padding: 20px 30px;
}
`