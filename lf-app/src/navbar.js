import { useState } from "react"

export default function NavigationBar () {
    const [visibleMenu , setVisibleMenu] = useState(null);
    const navItems = [
        {
            name: "HOME",
            link: "#none"
        },
        {
            name: "ABOUT US",
            link: "#about"
        },
        {
            name: "SERVICES",
            link: "#services"
        },
        {
            name: "ABOUT US",
            link: "#about"
        },
        {
            name: "TEAM",
            link: "#team"
        },
        {
            name: "CLIENTS",
            link: "#partners"
        }

    ]

    function handleMenuClick () {
        setVisibleMenu(prev => prev ? null : "visible")
    }
    return (
        <nav>
            <div className="logo-cont">
                <img src="./static/images/101318049_3374174919312111_7881680195533406208_n.jpg" alt="" />
            </div>
            <div className="slogan">
                <h3>LUCKY_FILMZ</h3>
                <i>The Sky Diver</i>
            </div>
            <ul className="nav-ul">
                {
                    navItems.map((item) => {
                        return(
                            <a href={item.link}>
                                <li>{item.name}</li>
                            </a>
                        )
                    })
                }
                <a href="#contact">
                    <button className="contact-li">Get in touch</button>
                </a>
            </ul>
            <button className="menu" onClick={handleMenuClick}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className={`nav-ul-hidden ${visibleMenu}`}>
                {
                    navItems.map((item) => {
                        return(
                            <a href={item.link}>
                                <li onClick={() => {
                                    setVisibleMenu(null)
                                }}>{item.name}</li>
                            </a>
                        )
                    })
                }
                <a href="#contact">
                    <button className="contact-li">Get in touch</button>
                </a>
            </ul>
        
        </nav>
    )
}