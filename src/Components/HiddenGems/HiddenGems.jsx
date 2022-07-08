import './hiddengems.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Star, Instagram } from '@mui/icons-material';

export default function HiddenGems() {

  const [hiddenGems, setHiddenGems] = useState([]);                                               

  const getHiddenGems = async () => {
    try{
      let response = await axios.get(`https://be-lolab.herokuapp.com/api/beautybar`)
      setHiddenGems(response.data)
      console.log(response.data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getHiddenGems();
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
      infinite: false,
      speed: 300,
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 4,
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
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            // centerMode: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
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
                  <h3>Hidden Gems</h3>
                </div>
                <div className="title-see-all">
                  <button className="btn-show-all">
                  <span>lihat semua</span>
                  </button>
                </div>
              </div>

              <div className="row d-flex col-md-12 ml-auto">

              <Slider {...settings}>

              {
                 hiddenGems.map((hiddengems, index) => {
                  return(
                    <div key={index} className="col-md-3">
                    <Link to={`/beautybars/${hiddengems._id}`} className="unlink">
                    <div className="card m-2 card-rounded shadow-card">
                      <img className='img-rounded border-bottom img-hidden-gems' src={hiddengems.img} alt="" />
                      <div className="m-2">
                        <span className="title-flash-sale">{hiddengems.name}</span>
                      <div className="d-flex">
                        <Star className="star-hidden-gems" />
                        <Star className="star-hidden-gems" />
                        <Star className="star-hidden-gems" />
                        <Star className="star-hidden-gems" />
                        <Star className="star-hidden-gems" />
                            <span className='ml-1 mt-1' style={{ color: "grey", fontSize: "13px" }}>4,5 (13 reviews)</span>
                      </div>
                        <div className="mt-1 text-secondary">
                        <span>
                        <p className='beautyBarAddress'>
                            {hiddengems.address.length > 50 ?
                              `${hiddengems.address.substring(0, 50)} ...` : hiddengems.address
                               }
                        </p>
                        </span>
                        </div>
                        <div className="d-flex justify-content-between" style={{ color: "black" }}>
                            <span style={{ fontSize: "15px" }}>
                                Open Hour : <span style={{ color: "red" }}>{hiddengems.openHour} - {hiddengems.endHour}</span>
                            </span>
                            <span><Instagram /></span>
                        </div>
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
