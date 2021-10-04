import {Col}  from 'react-bootstrap'
const Speciality=({iconImage})=>{
    return(<>
         <Col md={4}>
            <div className="spread-item">
                    <img className="thumb" src={iconImage} alt="Icon"/>
                    <h4 className="title mt-20"><a href="page-service-details.html">Cardio Clinic</a></h4>
                    <p>There are many variations of pass ages of lorem ipsum but majority have suffered majority</p>
            </div>
         </Col>
        </>)
}
export default Speciality;