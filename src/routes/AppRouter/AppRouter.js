import React from 'react';
import { Switch} from 'react-router-dom';
import PublicRoute from '../PublicRoute/PublicRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute'
const WelcomePage =React.lazy(() => import('../../pages/Welcome/'));
const Home =React.lazy(() => import('../../pages/Home/'));
const ContactPage =React.lazy(() => import('../../pages/contact-us/'));
const DoctorPage =React.lazy(() => import('../../pages/doctors/'));
const AboutPage =React.lazy(() => import('../../pages/about/'));
const ServicesPage =React.lazy(() => import('../../pages/services/'));

const AppRouter=()=>{
return (
    
        <Switch>
          /* PUBLIC ROUTE   */
          <PublicRoute  restricted={false} component={WelcomePage} path="/" exact />
          <PublicRoute  restricted={false} component={AboutPage} path="/about" exact />
          <PublicRoute  restricted={false} component={DoctorPage} path="/doctors" exact />

          <PublicRoute  restricted={false} component={ContactPage} path="/contact-us" exact />
          <PublicRoute  restricted={false} component={ServicesPage} path="/services" exact />

          /* PRIVATE ROUTE */
          <PrivateRoute component={Home} path="/home" exact />
        </Switch>
     
  );
}
export default AppRouter;