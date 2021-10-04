import member1 from '../../assets/images/team/member-1.jpg'
import member2 from '../../assets/images/team/member-2.jpg'

const Doctor=()=>{
    return(<>
               
             <div className="container doctor-list-section">
                <div className="row">
                    <div className="col-lg-12 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <h2 className="ls-n-20 text-center section-heading mb-3">Meet our expert and qualified doctors.</h2>
                        <div className="filter-form mb-2">
                            <a href="#" className="btn btn-form grid-filter-item filter-clear ls-20" data-filter="*">
                                <span>All Doctors</span>
                            </a>
                            <div className="input-group input-light">
                                <div className="form-control select-control">Other select<i className="far fa-angle-down"></i></div>
                                <ul className="option-menu grid-filter" data-container="#doctors">
                                    <li className="option-list grid-filter-item" data-filter=".pf-anesthesiologist"><span className="option"><i className="far fa-caret-right"></i>Anesthesiologist</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-internists"><span className="option"><i className="far fa-caret-right"></i>Internists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-nephrologists"><span className="option"><i className="far fa-caret-right"></i>Nephrologists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-pathologists"><span className="option"><i className="far fa-caret-right"></i>Pathologists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-ophthalmologists"><span className="option"><i className="far fa-caret-right"></i>Ophthalmologists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-oncologists"><span className="option"><i className="far fa-caret-right"></i>Oncologists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-podiatrists"><span className="option"><i className="far fa-caret-right"></i>Podiatrists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-radiologists"><span className="option"><i className="far fa-caret-right"></i>Radiologists</span></li>
                                    <li className="option-list grid-filter-item" data-filter=".pf-general-surgeons"><span className="option"><i className="far fa-caret-right"></i>General Surgeons</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row grid-container" id="doctors" data-layout="fitRows" style={{position:"relative", height: "1968px"}}>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 pf-anesthesiologist" style={{position: "absolute", left: "0px", top: "0px"}}>
                        <div className="image-box doctor-card mt-3">
                            <figure>
                                <a href="doctors-detailed.html">
                                    <img src={member1} className="w-100" alt="Doctor" width="370" height="407"/>
                                    <div className="hover">
                                        <div className="circle">
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <div className="box-content">
                                <h4 className="box-title">James Benjamin</h4>
                                <p className="doctor-cat">Anesthesiologists</p>
                                <p className="box-desc" style={{display: "none"}}>
                                    Dr. Amelia fraduated from the Universiy of Rochester School of Medicine and 
                                    Dentistry in 1990 and then she completed her residency at Yale Unversity Medical Center.
                                </p>
                                <a href="javascript:;" className="btn-toggle"><i className="fas fa-plus-circle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 pf-pathologists" style={{position: "absolute", left: "400px", top:" 0px;"}}>
                        <div className="image-box doctor-card mt-3">
                            <figure>
                                <a href="doctors-detailed.html">
                                    <img src={member1} className="w-100" alt="Doctor" width="370" height="407"/>
                                    <div className="hover">
                                        <div className="circle">
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <div className="box-content">
                                <h4 className="box-title">Stephanie Moor</h4>
                                <p className="doctor-cat">Pathologists</p>
                                <p className="box-desc" style={{display: "none"}}>
                                    Dr. Amelia fraduated from the Universiy of Rochester School of Medicine and 
                                    Dentistry in 1990 and then she completed her residency at Yale Unversity Medical Center.
                                </p>
                                <a href="javascript:;" className="btn-toggle"><i className="fas fa-plus-circle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 pf-podiatrists" style={{position: "absolute", left: "800px", top: "0px"}}>
                        <div className="image-box doctor-card mt-3">
                            <figure>
                                <a href="doctors-detailed.html">
                                    <img src={member1} className="w-100" alt="Doctor" width="370" height="407"/>
                                    <div className="hover">
                                        <div className="circle">
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <div className="box-content">
                                <h4 className="box-title">George Brown</h4>
                                <p className="doctor-cat">Podiatrists</p>
                                <p className="box-desc"style={{display: "none"}}>
                                    Dr. Amelia fraduated from the Universiy of Rochester School of Medicine and 
                                    Dentistry in 1990 and then she completed her residency at Yale Unversity Medical Center.
                                </p>
                                <a href="javascript:;" className="btn-toggle"><i className="fas fa-plus-circle"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 pf-podiatrists" style={{position: "absolute", left: "800px", top: "0px"}}>
                        <div className="image-box doctor-card mt-3">
                            <figure>
                                <a href="doctors-detailed.html">
                                    <img src={member1} className="w-100" alt="Doctor" width="370" height="407"/>
                                    <div className="hover">
                                        <div className="circle">
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <div className="box-content">
                                <h4 className="box-title">George Brown</h4>
                                <p className="doctor-cat">Podiatrists</p>
                                <p className="box-desc"style={{display: "none"}}>
                                    Dr. Amelia fraduated from the Universiy of Rochester School of Medicine and 
                                    Dentistry in 1990 and then she completed her residency at Yale Unversity Medical Center.
                                </p>
                                <a href="javascript:;" className="btn-toggle"><i className="fas fa-plus-circle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 pf-podiatrists" style={{position: "absolute", left: "800px", top: "0px"}}>
                        <div className="image-box doctor-card mt-3">
                            <figure>
                                <a href="doctors-detailed.html">
                                    <img src={member1} className="w-100" alt="Doctor" width="370" height="407"/>
                                    <div className="hover">
                                        <div className="circle">
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <div className="box-content">
                                <h4 className="box-title">George Brown</h4>
                                <p className="doctor-cat">Podiatrists</p>
                                <p className="box-desc"style={{display: "none"}}>
                                    Dr. Amelia fraduated from the Universiy of Rochester School of Medicine and 
                                    Dentistry in 1990 and then she completed her residency at Yale Unversity Medical Center.
                                </p>
                                <a href="javascript:;" className="btn-toggle"><i className="fas fa-plus-circle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 pf-podiatrists" style={{position: "absolute", left: "800px", top: "0px"}}>
                        <div className="image-box doctor-card mt-3">
                            <figure>
                                <a href="doctors-detailed.html">
                                    <img src={member1} className="w-100" alt="Doctor" width="370" height="407"/>
                                    <div className="hover">
                                        <div className="circle">
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </div>
                                </a>
                            </figure>
                            <div className="box-content">
                                <h4 className="box-title">George Brown</h4>
                                <p className="doctor-cat">Podiatrists</p>
                                <p className="box-desc"style={{display: "none"}}>
                                    Dr. Amelia fraduated from the Universiy of Rochester School of Medicine and 
                                    Dentistry in 1990 and then she completed her residency at Yale Unversity Medical Center.
                                </p>
                                <a href="javascript:;" className="btn-toggle"><i className="fas fa-plus-circle"></i></a>
                            </div>
                        </div>
                    </div>
               
               
                </div>
            </div>
                </>);
}
export default Doctor;