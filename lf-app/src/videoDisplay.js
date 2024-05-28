import { Link } from "react-router-dom"



export function Documentary() {
    return (
        <main>
            <Link className="close-btn-link" to="/">
                <i class="fa-solid fa-rectangle-xmark close-btn"></i>
            </Link>
            <iframe className="videodisplay" src="https://www.youtube.com/embed/8wjJQxCDY6c?si=vc4C4kK3YXZeCBQg&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </main>
    )
}
export function TimeLapse() {
    return (
        <main>
            <Link className="close-btn-link" to="/">
                <i class="fa-solid fa-rectangle-xmark close-btn"></i>
            </Link>
            <iframe  className="videodisplay"  src="https://www.youtube.com/embed/WREr9nfKvO0?si=saCBN0qKYsPyWTza&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </main>
    )
}
export function DroneVisual() {
    return (
        <main>
            <Link className="close-btn-link" to="/">
                <i class="fa-solid fa-rectangle-xmark close-btn"></i>
            </Link>
            <iframe className="videodisplay"   src="https://www.youtube.com/embed/AimfKq5djF8?si=AyvjqAkGROEHa8Gs&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

        </main>
    )
}

export function ProjectDocumentation() {
    return (
        <main>
            <Link className="close-btn-link" to="/">
                <i class="fa-solid fa-rectangle-xmark close-btn"></i>
            </Link>
            <iframe className="videodisplay" src="https://www.youtube.com/embed/8wjJQxCDY6c?si=vc4C4kK3YXZeCBQg&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </main>
    )
}
export function Cinematography() {
    return (
        <main>
            <Link className="close-btn-link" to="/">
                <i class="fa-solid fa-rectangle-xmark close-btn"></i>
            </Link>
            <iframe  className="videodisplay"  src="https://player.vimeo.com/video/948360012?h=0e3e20c7b7&autoplay=1"  title="vmeo video player" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
            </iframe>
        </main>
    )
}

