import { Link } from "react-router-dom";

export default function Work() {
    return (
        <section id="work-section" className="work-section">
            <div className="work-top-container">
                <h3>OUR WORK</h3>
                <p className="para">Explore our portfolio to witness the beauty and diversity of our planet captured through the 
                    lens of  dedicated filmmakers and drone specialist.
                </p>
                <div className="work-bottom-container">
                    <a href="">
                        <span>VIEW ALL<i className="fa-solid fa-arrow-right"></i></span>
                    </a>
                </div>
            </div>

            <div className="work-container">
                <Link to="/drone_visual">
                 
                        <div className="work-piece one"> 
                            <p className="para">
                                <i className="fa-solid fa-circle-play"></i> 
                                Drone Visual
                            </p>
                        </div>
             
                </Link>
                <Link to="documentary">
                    <div className="work-piece two">

                           
                            <p className="para">
                                <i className="fa-solid fa-circle-play"></i>
                                Documentary Films
                            </p>
                    </div>
                </Link>
                <Link to="time_lapse">
                    <div className="work-piece three">
                        <p className="para">
                            <i className="fa-solid fa-circle-play"></i>
                            Time-lapse
                        </p>
                    </div>
                </Link>
                <Link to="cinematography">
                    <div className="work-piece four">
                        <p className="para">
                            <i className="fa-solid fa-circle-play"></i>
                            Cinematography
                        </p>
                    </div>
                </Link>
                <Link to="project_documentation">
                    <div className="work-piece five">
                        <p className="para">
                            <i className="fa-solid fa-circle-play"></i>
                            Project Photo & Videography Documentation
                        </p>
                    </div>
                </Link>
            </div>
            
        </section>
    )
}