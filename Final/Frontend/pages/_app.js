import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import '@/styles/reserves.css'
import 'sf-font';
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
 
  return (
    <div>
    <header className="navstyle">
    <div className="container">
      <div className="d-flex justify-content-left">
        <a href="#" className="d-flex align-items-left mb-2 mb-lg-0 text-white text-decoration-none">
          <img width="100" height="45" src="https://raw.githubusercontent.com/net2devcrypto/misc/main/n2Dex-img.png" style={{opacity:'0.9'}}/>
        </a>
        <ul className="nav col-10 col-lg me-lg mb-2 justify-content-left mb-md-0 px-3" style={{fontSize:'16px', fontWeight:"500" ,fontFamily:'SF Pro Display'}}>
          <li><a href="/" className="nav-link text-white hover-button" style={{textShadow:'0px 1px 9px #000', opacity:'0.8'}}>n2Stables Reserves</a></li>
        </ul>
      </div>
    </div>
  </header>
  <Component {...pageProps} />
    </div>
  )
}

export default MyApp