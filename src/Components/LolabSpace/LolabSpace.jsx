import'./lolabspace.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function LolabSpace() {

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try{
      let response = await axios.get(`https://be-lolab.herokuapp.com/api/category`)
      setCategory(response.data)
      console.log(response.data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getCategory();
  }, [])

  return (
    <div>
        <div className="mt-4">
           <div className="row">

                <div className="col-md-6">
                    <div className="card shadow-card lo-space-border">
                        <div className="card-body">
                            <span className="lo-space-title">
                                <h4>Lolab Space</h4>
                            </span>
                           <Link to="/lolabspace" className='bg-lolab-space'>
                           <div className="card text-white mt-4">
                            <img 
                                className="card-img" 
                                src="https://p0.nicelocal.ca/preview/kpGNJfVjLcQinXu6pGBUwg/640x420x85/1/e/6/original_61349ac823af751c147bb71e_616c11f132fe8.jpg" 
                                alt="lolabspace" />
                              <div className="card-img-overlay">
                                <h5 className="card-title">Lolab Space</h5>
                              </div>
                            </div>
                           </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mt-2">
                  <div className="card shadow-card lo-space-border">
                    <div className="card-body">
                    <span className="fw-bold lo-space-title">Category</span>
                        <div className="row">
                            <div className="d-flex flex-wrap">

                           {
                              category.map((categories, index) => {
                                return(
                              <div key={index} className="card text-white mt-4 ml-2 col-md-5" style={{ border: "none" }}>
                                <Link to={categories.url} className="unlink">
                                  <img 
                                    className="card-img bg-category"
                                // style={{ height: "150px" , width:"150px" }} 
                                    src={categories.img} 
                                    alt="lolabspace" />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title title-category">{categories.title}</h5>
                                    </div>
                                  </Link>
                                </div>
                                )
                              })
                            
                             }

                        </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
