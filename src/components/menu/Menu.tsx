import "./Menu_style.css"
import { useState } from "react"

function Menu() {
    // Menu
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="wrapper">
            <header className="Header">
                <div className="Navigation">
                    <div className="First">
                        <a href="#menu"><img src="src/components/menu/img/Logo.png" alt="Logo" className="Logo"/></a>
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
                    <nav className={`SideMenu ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li><a href="#menu">Home</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio - Grids</a></li>
                            <li><a href="#blogs">Blogs</a></li>
                            <li><a href="#post">Post</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="Headline_Hero">
                    <h1>View Our <br /> New Menu</h1>
                    <p>The freshest ingredients for you every day</p>
                </div>
            </header>
            <div className="Starters">
                <img src="src/components/menu/img/Blueberry.png" alt="Blueberry" className="Blueberry" />
                <div className="Text_Starters">
                    <h1>Starters</h1>
                    <p>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="Price_Starters_Items">
                    <img src="src/components/menu/img/Food_Starters.png" alt="Food_Starters" />
                    <div className="Price_S">
                        <div className="Menu_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Grilled Okra and Tomatoes</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$18</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Cucumber Salad</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$12</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Basil Pancakes</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="Mains">
                <div className="Text_Mains">
                    <h1>Mains</h1>
                    <p>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="Price_Mains_Items">
                    <div className="Price_S">
                        <div className="Menu_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Deep Sea Snow White <br /> Cod Fillet</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$22</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Steak Whith Rosemary <br /> Butter</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Steaks with Grilled <br /> Kimchi</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                    <img src="src/components/menu/img/Mains.png" alt="Food_Mains" />
                </div>
            </div>
            <div className="Pastries_Drinks">
                <img src="src/components/menu/img/Avocado.png" alt="Avocado" className="Avocado" />
                <div className="Text_Pastries_Drinks">
                    <h1>Pastries & Drinks</h1>
                    <p>This is a section of your menu. Give your section a brief description</p>
                </div>
                <div className="Price_Pastries_Drinks_Items">
                    <img src="src/components/menu/img/Pastries_Drinks.png" alt="Pastries_Drinks" />
                    <div className="Price_S">
                        <div className="Menu_Item">
                            <span className="Price">$158</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Wine Pairing</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$168</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Natural Wine Pairing</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                        <div className="Menu_Item">
                            <span className="Price">$90</span>
                            <hr />
                            <div className="Menu_Header">
                                <h2>Whisky Flyer</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="Reservation_Form">
                <div className="Text_Form">
                    <h1>Make a Reservation</h1>
                    <p>Get in touch with restaurant</p>
                </div>
                <form className="Form">
                    <div className="Time">
                        <input type="date" name="date" placeholder="Date"/>
                        <select name="time">
                            <option value="">Select Time</option>
                            <option>6:00 pm</option>
                            <option>7:00 pm</option>
                            <option>8:00 pm</option>
                        </select>
                    </div>
                    <div className="Guests">
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
                <button className="Submit_Btn">Book Now</button>
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
                    <img src="src/components/contact/img/Social_Media.png" alt="Social Media" />
                </div>
            </footer>
        </div>
    )
}

export default Menu