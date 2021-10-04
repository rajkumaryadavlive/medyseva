import { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout=({children})=>{
    return(<>
            <div className="wrapper-container">
              <Fragment>
                <div className="header-section">
                    <Header />
                </div>
               
                <div className="main-section">
                    {children}
                </div>
                
                <div className="footer-section">
                <Footer />
                </div>
          
              </Fragment>
             </div>
           </>)
}
export default Layout;