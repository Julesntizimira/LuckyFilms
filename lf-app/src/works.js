import { Outlet } from "react-router-dom";
import Contact from "./contact";
import Footer from "./footer";
import NavigationBar from "./navbar";

export default function Works() {
    const navItems = [
        {
            name: "Drone Visuals",
            link: "drone_visuals"
        },
        {
            name: "Documentary Films",
            link: "documentary_films"
        },
        {
            name: "Time-lapse",
            link: "time_lapse"
        },
        {
            name: "Cinematography",
            link: "cinematography"
        },
        {
            name: "Project Documentation",
            link: "project_documentation"
        }

    ]
    return (
        <>
            <main className="work-main">
                <NavigationBar navItems={navItems}/>
                <Outlet />
                <Contact />
                <Footer />
            </main>
             <div className="sunset hide" style={{
                display: "block"
             }}>
                <h3>The Sky Diver</h3>
            </div> 
        </>
    )
}