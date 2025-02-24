import "./Blog_One_Column_style.css"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from '../../../assets/blogs/blog_one_column/Logo.png'
import Feature_First from '../../../assets/blogs/blog_one_column/Feature_First.png'
import Feature_Second from '../../../assets/blogs/blog_one_column/Feature_Second.png'
import Feature_Third from '../../../assets/blogs/blog_one_column/Feature_Third.png'
import Feature_Fourth from '../../../assets/blogs/blog_one_column/Feature_Fourth.png'
import Feature_Sixth from '../../../assets/blogs/blog_one_column/Feature_Sixth.png'
import Avatar_First from '../../../assets/blogs/blog_one_column/Avatar_First.png'
import Avatar_Second from '../../../assets/blogs/blog_one_column/Avatar_Second.png'
import Avatar_Third from '../../../assets/blogs/blog_one_column/Avatar_Third.png'
import Avatar_Fourth from '../../../assets/blogs/blog_one_column/Avatar_Fourth.png'
import Avatar_Sixth from '../../../assets/blogs/blog_one_column/Avatar_Sixth.png'
import Vector from '../../../assets/blogs/blog_one_column/Vector.png'
import Social_Media from '../../../assets/blogs/blog_one_column/Social_Media.png'

function Blog_One_Column() {
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
            <header className="Header_Blog_One">
                <div className="Navigation">
                    <div className="First">
                        <Link to="/home"><img src={Logo} alt="Logo" className="Logo" /></Link>
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
                    <nav className={`SideMenu_Blog_One ${menuOpen ? "open" : ""}`}>
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
                <div className="Headline_Hero_Text_Blog_One">
                    <h1>Blogs List - One Column</h1>
                    <p>It is easy way to create your beatiful blog for daily</p>
                </div>
            </header>
            <div className="Text_Blog_One_Columns">
                <p>Home / Blog <span>/ Blog List One Column</span></p>
            </div>
            <div className="Recent_Post_Blog_One_Columns_First">
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_First} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_First} alt="Avatar" />
                            <a href="#">Julie Christie  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>Fruit and vegetables and <br /> protection against diseases</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Second} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Second} alt="Avatar" />
                            <a href="#">Dianne Russell  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>Asparagus Spring Salad with <br /> Rocket, Goat's Cheese</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Third} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Third} alt="Avatar" />
                            <a href="#">Jenifier Lopez  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>The Best Style of Dough for <br /> Dumplings</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Fourth} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Fourth} alt="Avatar" />
                            <a href="#">Theresa Webb  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>7 Reasons to Start Your Day <br /> With Lemon Water</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
                        </div>
                    </div>
                </div>
                <div className="Blog_One_Columns">
                    <div className="Foto_Blog_One_Columns">
                        <img src={Feature_Sixth} alt="Food" />
                        <button className="Fashion">Fashion</button>
                    </div>
                    <div className="Review_One_Columns">
                        <div className="User_One_Columns">
                            <img src={Avatar_Sixth} alt="Avatar" />
                            <a href="#">Leslie Alexander  •  October 17,2021  •  3:33  •  2 comments</a>
                        </div>
                        <div className="Text_Review_One_Columns">
                            <h1>12 Sparkling Wines We're <br /> Loving This Summer</h1>
                            <hr />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#">Read More <img src={Vector} alt="Vector" /></a>
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

export default Blog_One_Column