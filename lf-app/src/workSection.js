
export default function WorkSection(props) {
    const {heading} = props.container
    const {title, para} = heading;
    return (
        <section className="works-section">
            <div className="work-heading">
                <h3>{title}</h3>
                <p className="para">
                    {para}
                </p>
            </div>
            <div className="works-content-wrapper">
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/drone.jpg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Drone Visual
                    </p>
                </div>
                <div className="single-video-container" style={{
                background: "url(./static/images/works/timelapse.jpeg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Time-Lapse
                    </p>
                </div>
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/cinema.jpeg)",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
                <div className="single-video-container" style={{
                background: "url(./static/images/works/timelapse.jpeg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/cinema.jpeg)",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/drone.jpg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Drone Visual
                    </p>
                </div>
                <div className="single-video-container" style={{
                background: "url(./static/images/works/timelapse.jpeg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/cinema.jpeg)",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
                <div className="single-video-container" style={{
                background: "url(./static/images/works/timelapse.jpeg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Time-Lapse
                    </p>
                </div>
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/cinema.jpeg)",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
                <div className="single-video-container" style={{
                    background: "url(./static/images/works/drone.jpg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Drone Visual
                    </p>
                </div>
                <div className="single-video-container" style={{
                background: "url(./static/images/works/timelapse.jpeg) center/cover no-repeat"
                }}>
                    <p className="para">
                        <i className="fa-solid fa-circle-play"></i> 
                        Documentary Films
                    </p>
                </div>
            </div>
        </section>
    )
}