import "./About_style.css"
import { useState } from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/about/Logo.png"
import Social_Media from "../../assets/about/Social_Media.png"
import Tomato from "../../assets/about/Tomato.png"
import Bake from "../../assets/about/Bake.png"
import Chef from "../../assets/about/Chef.png"
import Manager from "../../assets/about/Manager.png"
import Pickled from "../../assets/about/Pickled.png"
import Play from "../../assets/about/Play.png"
import Rosemary_First from "../../assets/about/Rosemary_First.png"
import Rosemary_Second from "../../assets/about/Rosemary_Second.png"
import Slice from "../../assets/about/Slice.png"
import Our_Story from "../../assets/about/Our_Story.png"

function About() {
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
            <header className="Header_About">
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
                    <nav className={`SideMenu_About ${menuOpen ? "open" : ""}`}>
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
                <div className="Headline_Hero_Text_About">
                    <h1>Who We Are</h1>
                    <p>The most important thing for us is to give you the <br /> comfortable dining experience</p>
                </div>
            </header>
            <div className="Our_Story">
                <img src={Tomato} alt="Tomato" className="Tomato"/>
                <div className="Our_Story_Items">
                    <div className="Our_Story_Text">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br /> lorem id penatibus imperdiet. Turpis egestas ultricies purus <br /> auctor tincidunt lacus nunc.</p>
                    </div>
                    <img src={Our_Story} alt="Our Story" />
                </div>
            </div>
            <div className="Staff">
                <div className="Manager_">
                    <div className="Staff_Manager">
                        <div className="Staff_Text">
                            <h1>Restaran Manager</h1>
                            <p>Carson Hugn</p>
                        </div>
                        <img src={Manager} alt="Manager" />
                        <p className="Manager_p">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. Augue habitant accumsan, ut <br /> parturient orci ac etiam congue mi.</p>
                    </div>
                </div>  
                <div className="Chef_">
                    <div className="Staff_Chef">
                        <p className="Chef_p">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. </p>
                        <div className="Staff_Text">
                            <h1>Executive Chef</h1>
                            <p>Jane Cooper</p>
                        </div>
                        <img src={Chef} alt="Chef" />
                    </div>
                </div> 
            </div>
            <div className="Our_Story_Video">
                <div className="Video_Text">
                    <h1>It looks delicious</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="Play_Icon"> 
                        <img src={Play} alt="Play"/>
                    </div> 
                </div>
            </div>
            <div className="Process">
                <img src={Rosemary_First} alt="Rosemary" className="Rosemary_First"/>
                <h1>Sophisticated Process</h1>
                <div className="Slice">
                    <img src={Slice} alt="Slice" />
                    <div className="Slice_Text">
                        <h2>01.Slice</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus auctor tincidunt lacus nunc. Convallis <br /> pellentesque quis fringilla sagittis. Egestas in risus sit <br /> nunc nunc, arcu donec nam etiam. </p>
                    </div>
                </div>
                <div className="Pickled_Bake">
                    <div className="Bake">
                        <h2>03.Bake</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. </p>
                        <img src={Bake} alt="Bake" />
                    </div>
                    <div className="Pickled">
                        <img src={Pickled} alt="Pickled"/>
                        <h2>02.Pickled</h2>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Purus lorem <br /> id penatibus imperdiet.</p>
                    </div>
                </div>
                <img src={Rosemary_Second} alt="Rosemary" className="Rosemary_Second"/>
            </div>
            <div className="Reservation_Form_About">
                <div className="Text_Form_Menu">
                    <h1>Make a Reservation</h1>
                    <p>Get in touch with restaurant</p>
                </div>
                <form className="Form_Menu">
                    <div className="Time">
                        <input type="date" name="date" placeholder="Date"/>
                        <select name="time">
                            <option value="">Select Time</option>
                            <option>6:00 pm</option>
                            <option>7:00 pm</option>
                            <option>8:00 pm</option>
                        </select>
                    </div>
                    <div className="Guests_Menu">
                        <select>
                            <option value="">Select Guests</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                            <option>6 Person</option>
                        </select>
                    </div>
                </form>
                <button className="Submit_Btn_Menu">Book Now</button>
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

export default About