import s1 from '../../assets/images/services/s1.png'
import s2 from '../../assets/images/services/s2.png'
import s3 from '../../assets/images/services/s3.png'
import s4 from '../../assets/images/services/s4.png'
import s5 from '../../assets/images/services/s5.png'

const Service=()=>{
    return(<>
      <section>
          <div className="container text-center service-title">
              <h1>Services</h1>
          </div>
      </section>
       <section className="service-container" style={{backgroundColor: "rgb(246, 246, 246) !important"}}>
      <div className="container pb-70">
        <div className="section-content">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="symptom-item">
                <div className="symptom-image">
                  <img src={s1} alt="Symptom"/>
                </div>
                <div className="symptom-content">
                  <h4 className="mt-0"><a href="page-service-details.html">Cardiology</a></h4>
                  <span>Lorem ipsum dolor sit amet cing sitsuscipit.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="symptom-item">
                <div className="symptom-image">
                  <img src={s2} alt="Symptom"/>
                </div>
                <div className="symptom-content">
                  <h4 className="mt-0"><a href="page-service-details.html">Pathology</a></h4>
                  <span>Lorem ipsum dolor sit amet cing sitsuscipit.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="symptom-item">
                <div className="symptom-image">
                  <img src={s3} alt="Symptom"/>
                </div>
                <div className="symptom-content">
                  <h4 className="mt-0"><a href="page-service-details.html">Dentology</a></h4>
                  <span>Lorem ipsum dolor sit amet cing sitsuscipit.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="symptom-item">
                <div className="symptom-image">
                  <img src={s4} alt="Symptom"/>
                </div>
                <div className="symptom-content">
                  <h4 className="mt-0"><a href="page-service-details.html">Gynecology</a></h4>
                  <span>Lorem ipsum dolor sit amet cing sitsuscipit.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="symptom-item">
                <div className="symptom-image">
                  <img src={s5} alt="Symptom"/>
                </div>
                <div className="symptom-content">
                  <h4 className="mt-0"><a href="page-service-details.html">Neurology</a></h4>
                  <span>Lorem ipsum dolor sit amet cing sitsuscipit.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="symptom-item">
                <div className="symptom-image">
                  <img src={s1} alt="Symptom"/>
                </div>
                <div className="symptom-content">
                  <h4 className="mt-0"><a href="page-service-details.html">Ophthalmology</a></h4>
                  <span>Lorem ipsum dolor sit amet cing sitsuscipit.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>);
}
export default Service;