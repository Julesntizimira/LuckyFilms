export default function Video() {
    return (
        <section id="home" className="home">
            <video muted autoPlay loop className="welcome-video">
                <source src="static/videos/Reel for the web .mov" type="video/mp4" />
            </video>
        </section>
    )
}