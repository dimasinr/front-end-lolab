import './beauty.css'
import React,{ useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { NavbarAllPages } from './../../Components/Navbar/NavbarAll'
import { Container } from 'react-bootstrap';
import Footer from './../../Components/Footer/Footer'
import { Star } from '@mui/icons-material'

export default function BeautyBar() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [beautys, setBeautys] = useState({});                                               

  const getBeautys = async () => {
    try{
      let response = await axios.get(`https://be-lolab.herokuapp.com/api/beautybar/${id}`)
      setBeautys(response.data)
      console.log(response.data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getBeautys();
  },[])


return (
  <div>
      <NavbarAllPages />
      <Container>
          <div className="mt-2">

            {/* Header Beauty Bar */}

            <div className="card shadow-card">
              <div className="card-body">
                <div className="mt-2">
                  <h4 className="fw-bold">{beautys.name}</h4>
                </div>
                  <div className="row d-flex">
                    <img 
                    src={beautys.img} 
                    className="img-first-bb mt-2 shadow-sm" 
                    alt="" 
                    />
                    <div className="col-md-4 d-flex flex-wrap">
                    <img 
                    src={beautys.img} 
                    className="img-sec-bb mt-2 img-rounded shadow-card" 
                    alt="" 
                    />
                    <img 
                    src={beautys.gallery} 
                    className="img-sec-bb mt-2 img-rounded shadow-card bb-img-card" 
                    alt="" 
                    />
                    </div>
                  </div>
                </div>
              </div>

      {/* End Header BeautyBar */}

    {/* Review */}
        <div className="mt-2">
          <div className="d-flex row">
            
              <div className="col-md-8">
                <div className="card card-rounded shadow-card">
                  <div className="card-body">
                    <div className="card-title">
                      <span style={{width: "20px", height: "20px"}}>
                        <Star className="star-review-bb" />
                        <span className="star-review-bb">4,5</span>
                      </span>
                    </div>
                    <span className='mt-2'>
                      <p>
                        {beautys.address}
                      </p>
                    </span>                                    
                    <div className="d-flex justify-content-end">
                        <button className='btn-show-all mt-2 btn-width-peta' >
                          Lihat di Peta
                        </button>
                    </div>
                  </div>
                </div>
              </div>
    {/* End Review */}

    {/* Search Treatment */}
              <div className="col-md-4 mt-2">
                <div className="card card-rounded shadow-card">
                  <div className="card-body">
                    <span>
                      <h5>Mulai Dari</h5>
                      <h2 className="fw-bold" style={{ color: "#25979D"}}>Rp 50.000</h2>
                    </span>
                    <span className="d-flex justify-content-center">
                      <button className='btn-show-all mt-1' style={{ width: "100%" }}>
                        Cari Treatment
                      </button>
                    </span>
                  </div>
                </div>
              </div>

          </div>
        </div>
    {/* End Search Treatment */}

    <div className="col-md-8 mt-2">
      <div className="card card-rounded shadow-card">
        <div className="card-body">
          <span>
          <h4>Detail Lokasi</h4>
          </span>
          <span className='mt-2'>
            <p>
              {beautys.address}
            </p>
          </span>                                    
          <div className="d-flex justify-content-end">
              <button className='btn-show-all mt-2 btn-width-peta' >
                Lihat di Peta
              </button>
          </div>
        </div>
      </div>
    </div>
            
          </div>
      </Container>
      <div className="mt-4">
          <Footer />
      </div>
  </div>
)

}
