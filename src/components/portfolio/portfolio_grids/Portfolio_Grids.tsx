import "./Portfolio_Grids_style.css"
import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/portfolio/portfolio_grids/Logo.png"
import Social_Media from "../../../assets/portfolio/portfolio_grids/Social_Media.png"
import Feature_Image_First from "../../../assets/portfolio/portfolio_grids/Feature_Image_First.png"
import Feature_Image_Second from "../../../assets/portfolio/portfolio_grids/Feature_Image_Second.png"
import Feature_Image_Third from "../../../assets/portfolio/portfolio_grids/Feature_Image_Third.png"
import Feature_Image_Fourth from "../../../assets/portfolio/portfolio_grids/Feature_Image_Fourth.png"
import Feature_Image_Fifth from "../../../assets/portfolio/portfolio_grids/Feature_Image_Fifth.png"
import Feature_Image_Sixth from "../../../assets/portfolio/portfolio_grids/Feature_Image_Sixth.png"
import Icon_Arrow_Right from "../../../assets/portfolio/portfolio_grids/Icon_arrow-right.png"

function Portfolio_Grids() {
    // Menu
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        if (!menuOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollBarWidth}px`
        } else {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0px'
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'auto'
        document.body.style.paddingRight = '0px'

        return () => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0px'
        }
    }, [])

    return (
        <div className="wrapper">
            <header className="Header_Partfolio_Grids">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src={Logo} alt="Logo" className="Logo"/></Link>
                        <div className="Navigation_btn">
                            <button className={`menu-open ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="Second">
                        <p className="Number">+86 852 346 000</p>
                        <button className="Reservations">Reservations</button>
                    </div>
                    <nav className={`SideMenu_Partfolio_Grids ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <Link to="/home">
                                <li><a href="#home">• Home</a></li>
                            </Link>
                            <Link to="/menu">
                                <li><a href="#menu">• Menu</a></li>
                            </Link>
                            <Link to="/contact">
                                <li><a href="#contact">• Contact</a></li>
                            </Link>
                            <Link to="/about">
                                <li><a href="#about">• About</a></li>
                            </Link>
                            <h1>• Portfolio</h1>
                            <Link to="/portfolio_grids">
                                <li><a href="#portfolio">Portfolio - Grids</a></li>
                            </Link>
                            <Link to="/single_portfolio_no_slidebar">
                                <li><a href="#portfolio">Single Portfolio - No Sidebar</a></li>
                            </Link>
                            <h1>• Blogs</h1>
                            <Link to="/blogs_two_columns">
                                <li><a href="#blogs_two_columns">Blogs - Two Columns</a></li>    
                            </Link>
                            <Link to="/blogs_one_columns">
                                <li><a href="#blogs_one_columns">Blogs - One Columns</a></li>    
                            </Link>
                            <h1>• Post</h1>
                            <Link to="/single_post_with_slidebar">
                                <li><a href="#single_post_with_slidebar">Single Post - with Slidebar</a></li>
                            </Link>
                            <Link to="/single_post_no_slidebar">
                                <li><a href="#single_post_no_slidebar">Single Post - No Slidebar</a></li>
                            </Link>
                        </ul>
                        <div className="Contact_Open_Menu">
                            <h6>Contact</h6>
                            <hr />
                            <div className="Contact_Open_Menu_First">
                                <p>+86 852 346 000</p>
                                <p>info@foodzero.com</p>
                            </div>
                            <div className="Contact_Open_Menu_Second">
                                <p>1959 Sepulveda Blvd.</p>
                                <p>Culver City, CA, 90230</p>
                            </div>
                            <img src={Social_Media} alt="Social Media" />
                        </div>
                    </nav>
                </div>
                <div className="Headline_Hero_Text_Partfolio_Grids">
                    <h1>Portfolio - Grids</h1>
                </div>
                <div className="Scroll_Partfolio_Grids">
                    <h5>Scroll</h5>
                    <hr className="dashed-line" />
                </div>
            </header>
            <div className="Filters_Portfolio_Grids">
                <a href="#">All</a>
                <a href="#">Starter</a>
                <a href="#">Launch</a>
                <a href="#">Dinner</a>
                <a href="#">Drinks</a>
                <a href="#">Sweets</a>
                <a href="#">Fruits</a>
            </div>
            <div className="Portfolio_Grids_Items">
                <div className="First_Portfolio_Grids_Items">
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_First} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Premium Deep Sea Snow<br /> White Cod Fillet</h1>
                            <div className="Partfolio_Cata">
                                <p>Launch  •  Dinner</p>
                                <img src={Icon_Arrow_Right} alt="Icon Arrow Right" />
                            </div>
                        </div>
                    </div>
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Second} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Option of natural <br /> wine available</h1>
                            <div className="Partfolio_Cata">
                                <p>Drinks  •  Fruits</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Second_Portfolio_Grids_Items">
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Third} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Best pumpkin for<br /> pumpkin soup</h1>
                            <div className="Partfolio_Cata">
                                <p>Launch  •  Starters</p>
                            </div>
                        </div>
                    </div>
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Fourth}alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Strip Steak With Rosemary<br /> Butter</h1>
                            <div className="Partfolio_Cata">
                                <p>Diner  •  Launch</p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="Third_Portfolio_Grids_Items">
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Fifth} alt="Feature" /> 
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Braised Sliced Abalone,Fish<br /> Maw with Premium Seafood</h1>
                            <div className="Partfolio_Cata">
                                <p>Cold Dishes  •  Starters</p>
                            </div>
                        </div>
                    </div>
                    <div className="Feature_Portfolio_Grids">
                        <img src={Feature_Image_Sixth} alt="Feature" />
                        <div className="Feature_Portfolio_Grids_Text">
                            <h1>Pan Fried Live Prawn with<br /> Superior Soy Sauce</h1>
                            <div className="Partfolio_Cata">
                                <p>Starter  •  Dinner</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="Pagination">
                <div className="Pagination_Items">
                    <button>Loading...</button>
                </div>
            </div>
            <footer className="footer">
                <div className="Text_Footer">
                    <div className="Logo_Footer">
                        <h1>Food</h1>
                        <h1>Zero.</h1>
                    </div>
                    <div className="Contacts_Tel">
                        <div>
                            <h2>Contact</h2>
                        </div>
                        <div className="Footer_Number">
                            <p>+1+86 852 346 000</p>
                            <p>info@foodzero.com</p>
                        </div>
                        <div>
                            <p>1959 Sepulveda Blvd.</p>
                            <p>Culver City, CA, 90230</p>
                        </div>
                    </div>
                    <div className="Subscribe">
                        <h2>Never Miss a Recipe</h2>
                        <div className="Subscribe_Email">
                            <form>
                                <input type="email" placeholder="Email"/>
                                <button className="Subscribe_Btn">Subscribe</button>
                            </form>
                        </div>
                        <p>Join our subscribers and gets best recipe recipe delivered each week!</p>
                    </div>
                </div>
                <hr />
                <div className="Contacts">
                    <p>© 2020 Zero Inc. All rights Reserved</p>
                    <img src={Social_Media} alt="Social Media" />
                </div>
            </footer>
        </div>
    )
}

export default Portfolio_Grids