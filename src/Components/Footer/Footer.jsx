import './footer.css'

export default function Footer() {

    // const logoImage = require('https://fe-lolab.netlify.app/static/media/logoputih.d4e09ce13171fb476b7d.png');

  return (
    <div>
        <div className='footer'>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className='justify-content-center'>
                <img className='logo' src="https://fe-lolab.netlify.app/static/media/logoputih.d4e09ce13171fb476b7d.png" alt="lolab" />
                <p>© 2020 - 2022 Lolab All Rights Reserved Powered By PT Nawastra Teknologi Nimpuna</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <ul className='noes'>
                  <li>Help Center</li>
                  <li>Contact Us</li>
                  <li>Terms & Conditition</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <p className="text-white">
                    Download
                </p>
                <div className="d-flex justify-content-space-between">
                <img src="https://lolab.id/static/assets/img/android.png" className='mobile-app-store' alt="Lolab Play Store" />
                    <img src="https://lolab.id/static/assets/img/apple.png" className='ml-2 mobile-app-store' alt="Lolab App Store" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
