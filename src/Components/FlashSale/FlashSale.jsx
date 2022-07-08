import './flashsale.css'
import { Link } from 'react-router-dom';
import { LocationOn } from '@mui/icons-material';
import Slider from "react-slick";
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function FlashSale() {

  let headers = {
    "x-api-key" : "hx3RLOczTOYKSSWazQN7z65Femq1"
  }

  const [flashsales, setFlashSales] = useState([]);                                               

  const getFlashSales = async () => {
    try{
      let response = await axios.get(`https://staging.lolab.id/oapi/flash-sales-home?limit=20&offset=0`,{
        headers: {
          'Authorization': 'hx3RLOczTOYKSSWazQN7z65Femq1'
        }
      })
      setFlashSales(response.data)
      console.log(response.data.headers);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getFlashSales();
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
      speed: 600,
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
          breakpoint: 560,
          settings: {
            // centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            // centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <div className='container'>
      <div className="mt-4">
        <div className="row">
          <div className="card lo-space-border shadow-card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="card-title">
                  <h3>Flash Sale</h3>
                </div>
                <div className="title-see-all">
                  <button className="btn-show-all">
                  <span>lihat semua</span>
                  </button>
                </div>
              </div>

              <div className="row d-flex col-md-12 ml-auto">

              <Slider {...settings}>

              <div className="col-md-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="card m-2 card-flash-sale shadow-card">
                  <img className='img-flash-sale border-bottom' src="https://img.freepik.com/free-photo/close-up-woman-green-eye-pink-flower-space_186202-3742.jpg?t=st=1656575289~exp=1656575889~hmac=a2e30099bed610538b12ca568e05e17635f727b80a479762838901d0104d089d&w=740" alt="" />
                  <div className="mt-1 d-flex">
                    <LocationOn className="icon-location" style={{ height: "20px", width: "20px" }} />
                    <span className="title-location" style={{ marginTop: "2px" }}>Jakarta Selatan</span>
                  </div>
                  <div className="ml-1">
                    <span className="title-flash-sale">Nail Gel + Free 2 Arts</span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span style={{ textDecoration: "line-through", color: "grey" }}>Rp. 250.000</span>
                    <br />
                    <span style={{ color: "#02979d" }} className="fw-bold" >Rp. 200.000</span>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-md-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="card m-2 card-flash-sale shadow-card">
                  <img className='img-flash-sale border-bottom' src="https://img.freepik.com/free-photo/close-up-woman-green-eye-pink-flower-space_186202-3742.jpg?t=st=1656575289~exp=1656575889~hmac=a2e30099bed610538b12ca568e05e17635f727b80a479762838901d0104d089d&w=740" alt="" />
                  <div className="mt-1 d-flex">
                    <LocationOn className="icon-location" style={{ height: "20px", width: "20px" }} />
                    <span className="title-location" style={{ marginTop: "2px" }}>Jakarta Selatan</span>
                  </div>
                  <div className="ml-1">
                    <span className="title-flash-sale">Nail Gel + Free 2 Arts</span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span style={{ textDecoration: "line-through", color: "grey" }}>Rp. 250.000</span>
                    <br />
                    <span style={{ color: "#02979d" }} className="fw-bold" >Rp. 200.000</span>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-md-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="card m-2 card-flash-sale shadow-card">
                  <img className='img-flash-sale border-bottom' src="https://img.freepik.com/free-photo/close-up-woman-green-eye-pink-flower-space_186202-3742.jpg?t=st=1656575289~exp=1656575889~hmac=a2e30099bed610538b12ca568e05e17635f727b80a479762838901d0104d089d&w=740" alt="" />
                  <div className="mt-1 d-flex">
                    <LocationOn className="icon-location" style={{ height: "20px", width: "20px" }} />
                    <span className="title-location" style={{ marginTop: "2px" }}>Jakarta Selatan</span>
                  </div>
                  <div className="ml-1">
                    <span className="title-flash-sale">Nail Gel + Free 2 Arts</span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span style={{ textDecoration: "line-through", color: "grey" }}>Rp. 250.000</span>
                    <br />
                    <span style={{ color: "#02979d" }} className="fw-bold" >Rp. 200.000</span>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-md-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="card m-2 card-flash-sale shadow-card">
                  <img className='img-flash-sale border-bottom' src="https://img.freepik.com/free-photo/close-up-woman-green-eye-pink-flower-space_186202-3742.jpg?t=st=1656575289~exp=1656575889~hmac=a2e30099bed610538b12ca568e05e17635f727b80a479762838901d0104d089d&w=740" alt="" />
                  <div className="mt-1 d-flex">
                    <LocationOn className="icon-location" style={{ height: "20px", width: "20px" }} />
                    <span className="title-location" style={{ marginTop: "2px" }}>Jakarta Selatan</span>
                  </div>
                  <div className="ml-1">
                    <span className="title-flash-sale">Nail Gel + Free 2 Arts</span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span style={{ textDecoration: "line-through", color: "grey" }}>Rp. 250.000</span>
                    <br />
                    <span style={{ color: "#02979d" }} className="fw-bold" >Rp. 200.000</span>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-md-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="card m-2 card-flash-sale shadow-card">
                  <img className='img-flash-sale border-bottom' src="https://img.freepik.com/free-photo/close-up-woman-green-eye-pink-flower-space_186202-3742.jpg?t=st=1656575289~exp=1656575889~hmac=a2e30099bed610538b12ca568e05e17635f727b80a479762838901d0104d089d&w=740" alt="" />
                  <div className="mt-1 d-flex">
                    <LocationOn className="icon-location" style={{ height: "20px", width: "20px" }} />
                    <span className="title-location" style={{ marginTop: "2px" }}>Jakarta Selatan</span>
                  </div>
                  <div className="ml-1">
                    <span className="title-flash-sale">Nail Gel + Free 2 Arts</span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span style={{ textDecoration: "line-through", color: "grey" }}>Rp. 250.000</span>
                    <br />
                    <span style={{ color: "#02979d" }} className="fw-bold" >Rp. 200.000</span>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-md-2">
                <Link to="/" style={{ textDecoration: "none" }}>
                <div className="card m-2 card-flash-sale shadow-card">
                  <img className='img-flash-sale border-bottom' src="https://img.freepik.com/free-photo/close-up-woman-green-eye-pink-flower-space_186202-3742.jpg?t=st=1656575289~exp=1656575889~hmac=a2e30099bed610538b12ca568e05e17635f727b80a479762838901d0104d089d&w=740" alt="" />
                  <div className="mt-1 d-flex">
                    <LocationOn className="icon-location" style={{ height: "20px", width: "20px" }} />
                    <span className="title-location" style={{ marginTop: "2px" }}>Jakarta Selatan</span>
                  </div>
                  <div className="ml-1">
                    <span className="title-flash-sale">Nail Gel + Free 2 Arts</span>
                  </div>
                  <div className="ml-1 mt-1">
                    <span style={{ textDecoration: "line-through", color: "grey" }}>Rp. 250.000</span>
                    <br />
                    <span style={{ color: "#02979d" }} className="fw-bold" >Rp. 200.000</span>
                  </div>
                </div>
                </Link>
              </div>

              </Slider>

          </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
