import "./favplace.css"
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default function FavoritePlace() {

  const [city, setCity] = useState([]);

  const getCity = async () => {
    try{
      let response = await axios.get(`https://be-lolab.herokuapp.com/api/city`)
      setCity(response.data)
      console.log(response.data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getCity();
  }, [])


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(195, 195, 195)", borderRadius: "60%" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(195, 195, 195)",  borderRadius: "60%" }}
      onClick={onClick}
    />
  );
}

    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "25px"
          }
        },
      ]
    };


  return (
    <div className='container'>
      <div className="mt-4 mb-4">
        <div className="row">
          <div className="card lo-space-border shadow-card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="card-title">
                  <h3>Tempat Favorit Berdasarkan Daerah</h3>
                </div>
                <div className="title-see-all">
                  <button className="btn-show-all">
                    <span>lihat semua</span>
                  </button>
                </div>
              </div>

              <div className="row">

              <Slider {...settings}>

              {
                city.map((citys, index) => {

                  return(
                    <div key={index} className="col-md-2">
                    <Link to="/:id" style={{ textDecoration: "none" }}>
                    <div className="d-flex">
                      <img className='img-city border-bottom' src={citys.img} alt="" />
                      <div className="centered">
                      {citys.nameCity}
                      </div>
                    </div>
                    </Link>
                  </div>
                  )

                })
              }

              </Slider>

          </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}