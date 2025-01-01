import "./Home_style.css"
import { useState } from "react"
import { Link } from "react-router-dom";

//Slider
const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet <br />ultricies purus Lorem ipsum dolor sit amet.",
        user: {
            name: "John Doe",
            role: "Bloger",
            avatar: "src/components/home/img/Avatar.png"
        }
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus Lorem ipsum dolor sit amet.",
        user: {
            name: "Jane Smith",
            role: "Influencer",
            avatar: "src/components/home/img/Avatar.png"
        }
    },
    {
        text: "Lorem ipsum dolor sit elit. Purus lorem id <br /> penatibus imperdiet. Turpis egestas <br /> ultricies purus Lorem ipsum dolor sit amet.",
        user: {
            name: "Alice Johnson",
            role: "Writer",
            avatar: "src/components/home/img/Avatar.png"
        }
    }
]

function Home() {
    // Menu
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    //Slider
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
                setIsAnimating(false)
            }, 500)
        }
    }

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!isAnimating) {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
                setIsAnimating(false)
            }, 500)
        }
    }



    return (
        <div className="wrapper">
            <header className="Header_Home">
                <div className="Navigation">
                    <div className="First">
                    <Link to="/home"><img src="src/components/home/img/Logo.png" alt="Logo" className="Logo"/></Link>
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
                    <nav className={`SideMenu_Home ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <Link to="/home">
                                <li><a href="#home">Home</a></li>
                            </Link>
                            <Link to="/menu">
                                <li><a href="#menu">Menu</a></li>
                            </Link>
                            <Link to="/contact">
                                <li><a href="#contact">Contact</a></li>
                            </Link>
                            <Link to="/about">
                                <li><a href="#about">About</a></li>
                            </Link>
                            <h1>Portfolio</h1>
                            <Link to="/portfolio_grids">
                                <li><a href="#portfolio">Portfolio - Grids</a></li>
                            </Link>
                            <Link to="/single_portfolio_no_slidebar">
                                <li><a href="#portfolio">Single Portfolio - No Sidebar</a></li>
                            </Link>
                            <h1>Blogs</h1>
                            <Link to="/blogs_two_columns">
                                <li><a href="#blogs_two_columns">Blogs - Two Columns</a></li>    
                            </Link>
                            <Link to="/blogs_one_columns">
                                <li><a href="#blogs_one_columns">Blogs - One Columns</a></li>    
                            </Link>
                            <h1>Post</h1>
                            <Link to="/single_post_whith_slidebar">
                                <li><a href="#single_post_whith_slidebar">Single Post - whith Slidebar</a></li>
                            </Link>
                            <Link to="/single_post_no_slidebar">
                                <li><a href="#single_post_no_slidebar">Single Post - No Slidebar</a></li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="Headline_Hero_Text_Home">
                    <div className="Text_Home">
                        <h1>Healthy Eating <br /> is important <br /> part of lifestyle </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing <br /> elit. Neque congue arcu</p>
                        <h5 className="Scroll_Home">Scroll</h5>
                        <hr />
                    </div>
                    <div className="Food_First">
                        <img src="src/components/home/img/food_first.png" alt="Food_First" />
                        <img src="src/components/home/img/seasoning_first.png" className="Seasoning_First" alt="Seasoning First" />
                    </div>
                </div>
                <div className="Text_Home_Food_Second">
                    <div className="Food_Second">
                        <img src="src/components/home/img/food_second.png" alt="Food Second" />
                        <h1>Start to plan <br /> your diet today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Neque congue arcu</p>
                    </div>
                    <div className="Seasoning_Second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Neque congue arcu</p>
                        <img src="src/components/home/img/seasoning_second.png" alt="Seasoning Second" />
                    </div>
                </div>
            </header>
            <div className="Our_Menu">
                <div className="Text_Menu_Home_Items">   
                    <div className="Text_Menu_Home">
                        <h1>Our Menu</h1>
                        <p>This a section of your menu. Give your section <br /> a brief brief description</p>
                    </div>
                </div> 
                <img src="src/components/home/img/leaves.png" className="Leaves" alt="Leaves" />
                <div className="Price_Home_Items">
                    <div className="Price_Home_First">
                        <div className="Home_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Deep Sea Snow White <br /> Cod Fillet</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="Home_Item">
                            <span className="Price">$22</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Cucumber Salad</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
                        </div>
                    </div>
                    <div className="Price_Home_Second">
                        <div className="Home_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Steak Whith Rosemary <br /> Butter</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                        <div className="Home_Item">
                            <span className="Price">$20</span>
                            <hr />
                            <div className="Home_Header">
                                <h2>Natural Wine Pairing</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>
                </div>
            </div>  
            <div className="Excellent_Cook">
                <div className="Excellent_Cook_Items">
                    <div className="Image_Excellent_Cook">
                        <img src="src/components/home/img/Leaf_First.png" className="Leaf_First" alt="" />
                        <img src="src/components/home/img/Chef.png" className="Chef" alt="Chef" />
                    </div>
                    <div className="Text_Image_Excellent_Cook">
                        <h1>Excellent <br /> cook</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas ultricies <br /> purus auctor tincidunt lacus nunc. </p>
                        <img src="src/components/home/img/Leaf_Second.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="Features">
                <div className="Features_Items">
                    <div className="Premium_Quality">
                        <img src="src/components/home/img/CircleIcon_First.png" alt="CircleIcon First" />
                        <h2>Premium Quality</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
                    </div>
                    <div className="Seasonal_Vegetables">
                        <img src="src/components/home/img/CircleIcon_Second.png" alt="CircleIcon Second" />
                        <h2>Seasonal Vegetables</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
                    </div>
                    <div className="Fresh_Fruit">
                        <img src="src/components/home/img/CircleIcon_Third.png" alt="CircleIcon Third" />
                        <h2>Fresh Fruit</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Neque congue arcu</p>
                    </div>
                </div>
            </div>
            <div className="Recent_Post">
                <div className="Blog_First">
                    <div className="Foto_Blog">
                        <img src="src/components/home/img/Feature_First.png" alt="Food"/>
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review">
                        <div className="User">
                            <img src="src/components/home/img/Avatar_First.png" alt="Avatar" />
                            <a href="#">Julie Christie  •  October 17,2021  •  3:33  •  2 comments</a>  
                        </div>
                        <div className="Text_Review">
                            <h1>Fruit and vegetables and <br /> protection against diseases</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src="src/components/home/img/Vector.png" alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_Second">
                    <div className="Foto_Blog">
                        <img src="src/components/home/img/Feature_Second.png" alt="Food"/>
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review">
                        <div className="User">
                            <img src="src/components/home/img/Avatar_Second.png" alt="Avatar" />
                            <a href="#">Dianne Russell  •  October 17,2021  •  3:33  •  2 comments</a>   
                        </div>
                        <div className="Text_Review">
                            <h1>Aspargus Spring Salad with <br /> Rocket, Goat's Cheese</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src="src/components/home/img/Vector.png" alt="Vector" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Reservation_Form">
                <div className="Text_Form_Home">
                    <h1>Make a Reservation</h1>
                    <p>Get in touch with restaurant</p>
                </div>
                <form className="Form_Home">
                    <div className="Time">
                        <input type="date" name="date" placeholder="Date"/>
                        <select name="time">
                            <option value="">Select Time</option>
                            <option>6:00 pm</option>
                            <option>7:00 pm</option>
                            <option>8:00 pm</option>
                        </select>
                    </div>
                    <div className="Guests_Home">
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
                <button className="Submit_Btn_Home">Book Now</button>
            </div>
            <div className="Category">
                <div className="Category_Text">
                    <h1>Calories Energy <br /> Balance</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="Menu_Category">
                    <div className="Starters_Category">
                        <div className="Category_Items">
                            <a href="#">Starters</a>
                            <a href="#"><img src="src/components/home/img/Vector.png" alt="Arrow" /></a>
                        </div>
                        <img src="src/components/home/img/Starters_Category.png" alt="Starters" className="Starters_Category_Img"/>
                    </div>
                    <div className="Mains_Category">
                        <div className="Category_Items">
                            <a href="#">Mains</a>
                            <a href="#"><img src="src/components/home/img/Vector.png" alt="Arrow" /></a>
                        </div>
                        <img src="src/components/home/img/Mains_Category.png" alt="Mains" className="Mains_Category_Img"/>
                    </div>
                    <div className="Soups_Category">
                        <div className="Category_Items">
                            <a href="#">Soups</a>
                            <a href="#"><img src="src/components/home/img/Vector.png" alt="Arrow" /></a>
                        </div>
                        <img src="src/components/home/img/Soups_Category.png" alt="Soups" className="Soups_Category_Img"/>
                    </div>
                </div>
            </div>
            <div className="Testimonials">
                <div className={`Slider_Text ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                <h1 dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].text }} />
                </div>
                <div className="Slide_Items">
                    <div className={`User_Bloger ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                        <img src={testimonials[currentIndex].user.avatar} alt="Avatar" />
                        <div className="User_Bloger_Text">
                            <p>{testimonials[currentIndex].user.name}</p>
                            <p>{testimonials[currentIndex].user.role}</p>
                        </div>
                    </div>
                    <div className="Slider_Btn">
                        <a href="#" onClick={handlePrev}>
                            <img src="src/components/home/img/Icon_arrow-left.png" alt="Previous" />
                        </a>
                        <p>{currentIndex + 1}/{testimonials.length}</p>
                        <a href="#" onClick={handleNext}>
                            <img src="src/components/home/img/Icon_arrow-right.png" alt="Next" />
                        </a>
                    </div>
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
                    <img src="src/components/contact/img/Social_Media.png" alt="Social Media" />
                </div>
            </footer>
        </div>
    )
}

export default Home