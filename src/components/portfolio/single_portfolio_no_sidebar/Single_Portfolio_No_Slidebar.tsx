import "./Single_Portfolio_No_Slidebar_style.css"
import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/portfolio/single_portfolio_no_slidebar/Logo.png"
import Social_Media from "../../../assets/portfolio/single_portfolio_no_slidebar/Social_Media.png"
import Drinks from "../../../assets/portfolio/single_portfolio_no_slidebar/Drinks.png"
import Food_First from "../../../assets/portfolio/single_portfolio_no_slidebar/Food_First.png"
import Food_Second from "../../../assets/portfolio/single_portfolio_no_slidebar/Food_Second.png"
import Icon_Back from "../../../assets/portfolio/single_portfolio_no_slidebar/Icon_back.png"
import Icon_Arrow_Left from "../../../assets/portfolio/single_portfolio_no_slidebar/Icon_arrow-left.png"
import Icon_Arrow_Right from "../../../assets/portfolio/single_portfolio_no_slidebar/Icon_arrow-right.png"

function Single_Portfolio_No_Slidebar() {
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
            <header className="Header_Single_Portfolio_No_Slidebar">
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
                    <nav className={`SideMenu_Single_Portfolio_No_Slidebar ${menuOpen ? "open" : ""}`}>
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
                <div className="Headline_Hero_Text_Single_Portfolio_No_Slidebar">
                    <h1>Deep Sea Snow White <br /> Cod Fillet</h1>
                </div>
                <div className="Scroll_Single_Portfolio_No_Slidebar">
                    <h5>Scroll</h5>
                    <hr className="dashed-line" />
                </div>
            </header>
            <div className="Drinks_Food">
                <div className="Drinks_Single_Portfolio_No_Slidebar">
                    <img src={Drinks} alt="Drinks" />
                    <div className="Text_Drinks_Single_Portfolio_No_Slidebar">
                        <h1>Melt in Your Mouth</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient orci ac etiam congue mi. </p>
                    </div>
                </div>
                <div className="Food_First_Single_Portfolio_No_Slidebar">
                    <div className="Food_Forst_Single_Portfolio">
                        <img src={Food_First} alt="Food" />
                    </div>
                    <div className="Food_Text_Single_Portfolio_No_Slidebart">
                        <h1>The Best Taste</h1>
                        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                    </div>
                </div>
                <div className="Drinks_Food_Text">
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient orci ac etiam congue mi. </p>
                    <h1>Cooking Suggestions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
                </div>
                <div className="Food_Second_Single_Portfolio_No_Slidebar">
                    <img src={Food_Second} alt="Food" />
                </div>
            </div>
            <div className="Portfolio_PreviosNext">
                <div className="Previos_Page">
                    <div className="Previos_Page_Items">
                        <a href="#"><img src={Icon_Arrow_Left} alt="Icon Arrow Left" /></a>
                        <p>PREVIOUS PAGE</p>
                    </div>
                    <h1>Strip Steak With Rosemary Butter</h1>
                </div>
                <a href="#"><img src={Icon_Back} alt="Icon Back" /></a>
                <div className="Next_Page">
                    <div className="Next_Page_Items">
                        <p>NEXT PAGE</p>
                        <a href="#"><img src={Icon_Arrow_Right} alt="Icon Arrow Right" /></a>
                    </div>
                    <h1>Option of natural wine available</h1>
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

export default Single_Portfolio_No_Slidebar