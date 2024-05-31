import { useState } from "react"
import {Link} from "react-router-dom"

export default function NavigationBar (props) {
    const [visibleMenu , setVisibleMenu] = useState(null);
    const {navItems} = props;
 
    function handleMenuClick () {
        setVisibleMenu(prev => prev ? null : "visible")
    }
    return (
        <nav>
            <Link to="/">
                <div className="logo-cont">
                    <img src="./static/images/101318049_3374174919312111_7881680195533406208_n.jpg" alt="" />
                </div>
            </Link>
            <div className="slogan">
                <h3>LUCKY_FILMZ</h3>
                <i>The Sky Diver</i>
            </div>
            <ul className="nav-ul">
                {
                    navItems.map((item) => {
                        const element =  item.link ? 
                            (<Link to={item.link}><li>{item.name}</li></Link>) : 
                            (<a href={item.id}><li>{item.name}</li></a>)
                        return element;
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
                        const element =  item.link ? 
                            (<Link to={item.link}><li onClick={() => {
                                setVisibleMenu(null)
                            }} >{item.name}</li></Link>) : 
                            (<a href={item.id}><li onClick={() => {
                                setVisibleMenu(null)
                            }}>{item.name}</li></a>)
                        return element;
                    })
                }
                <a href="#contact">
                    <button className="contact-li">Get in touch</button>
                </a>
            </ul>
        
        </nav>
    )
}