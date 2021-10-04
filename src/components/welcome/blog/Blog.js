import news from '../../../assets/images/blog/news1.png'
const Blog=()=>{
    return(<>
       <section>
      <div className="container pt-90 pb-70">
        <div className="section-title">
          <div className="row justify-content-md-center">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <div className="text-center">
                <div className="tm-sc-section-title section-title section-title-style1 text-center">
                  <div className="title-wrapper">
                    <h2 className="title title-line-bottom-currenty-style line-center"> News &amp; Articles</h2>
                    <div className="paragraph">
                      <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="news-item-current-style1">
                <div className="news-image">
                  <span className="date">30 Mar, 2020</span>
                  <img className="thumb img-fullwidth" src={news} alt="News"/>
                  <div className="admin-comment">
                    <span className="admin"><i className="far fa-user-circle"></i> Admin</span>
                    <span className="comments"><i className="far fa-comments"></i> 2 Comments</span>
                  </div>
                </div>
                <div className="news-content">
                  <a href="news-details.html">
                    <h4 className="mb-20">Discover 10 ways to stay safe from virus</h4>
                  </a>
                  <p className="mb-20">Lorem ipsum is simply free text dolor sit am adipi we help you is in the right jobs sicing elit have majority.</p>
                  <a href="news-details.html" className="read-more"><i className="fas fa-chevron-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="news-item-current-style1">
                <div className="news-image">
                  <span className="date">30 Mar, 2020</span>
                  <img className="thumb img-fullwidth" src={news} alt="News"/>
                  <div className="admin-comment">
                    <span className="admin"><i className="far fa-user-circle"></i> Admin</span>
                    <span className="comments"><i className="far fa-comments"></i> 2 Comments</span>
                  </div>
                </div>
                <div className="news-content">
                  <a href="news-details.html">
                    <h4 className="mb-20">Equitable Cities During World COVID-19</h4>
                  </a>
                  <p className="mb-20">Lorem ipsum is simply free text dolor sit am adipi we help you is in the right jobs sicing elit have majority.</p>
                  <a href="news-details.html" className="read-more"><i className="fas fa-chevron-right"></i>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="news-item-current-style1">
                <div className="news-image">
                  <span className="date">30 Mar, 2020</span>
                  <img className="thumb img-fullwidth" src={news} alt="News"/>
                  <div className="admin-comment">
                    <span className="admin"><i className="far fa-user-circle"></i> Admin</span>
                    <span className="comments"><i className="far fa-comments"></i> 2 Comments</span>
                  </div>
                </div>
                <div className="news-content">
                  <a href="news-details.html">
                    <h4 className="mb-20">Lifeline During the Corona Virus Crisis</h4>
                  </a>
                  <p className="mb-20">Lorem ipsum is simply free text dolor sit am adipi we help you is in the right jobs sicing elit have majority.</p>
                  <a href="news-details.html" className="read-more"><i className="fas fa-chevron-right"></i>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       </>);
}
export default Blog;