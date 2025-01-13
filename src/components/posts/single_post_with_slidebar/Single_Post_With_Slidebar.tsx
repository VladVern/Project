import "./Single_Post_With_Slidebar_style.css"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from '../../../assets/posts/single_post_with_slidebar/Logo.png'
import Avatar_Header from '../../../assets/posts/single_post_with_slidebar/Avatar_Header.png'
import Social_Media from '../../../assets/posts/single_post_with_slidebar/Social_Media.png'
import Containet_1 from "../../../assets/posts/single_post_with_slidebar/Containet_1.png"
import Containet_2 from "../../../assets/posts/single_post_with_slidebar/Containet_2.png"
import Containet_3 from "../../../assets/posts/single_post_with_slidebar/Containet_3.png"
import Quotation from "../../../assets/posts/single_post_with_slidebar/”.png"
import Blog_AuthorBox from "../../../assets/posts/single_post_with_slidebar/Blog_AuthorBox.png"
import Icon_search from "../../../assets/posts/single_post_with_slidebar/Icon_search.png"
import Sidebar_1 from "../../../assets/posts/single_post_with_slidebar/Sidebar_1.png"
import Sidebar_2 from "../../../assets/posts/single_post_with_slidebar/Sidebar_2.png"
import Sidebar_3 from "../../../assets/posts/single_post_with_slidebar/Sidebar_3.png"
import Sidebar_4 from "../../../assets/posts/single_post_with_slidebar/Sidebar_4.png"
import Icon_arrow_left from "../../../assets/posts/single_post_with_slidebar/Icon_arrow-left.png"
import Icon_arrow_right from "../../../assets/posts/single_post_with_slidebar/Icon_arrow-right.png"
import Avatar_1 from "../../../assets/posts/single_post_with_slidebar/Avatar_1.png"
import Avatar_1_1 from "../../../assets/posts/single_post_with_slidebar/Avatar_1_1.png"
import Avatar_2 from "../../../assets/posts/single_post_with_slidebar/Avatar_2.png"
import Avatar_3 from "../../../assets/posts/single_post_with_slidebar/Avatar_3.png"

function Single_Post_With_Slidebar() {
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
            <header className="Header_Post_With_Slidebar">
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
                    <nav className={`SideMenu_Post_With_Slidebar ${menuOpen ? "open" : ""}`}>
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
                <div className="Headline_Hero_Text_Post_With_Slidebar_Items">
                    <div className="Headline_Hero_Text_Post_With_Slidebar">
                        <button className="Fashion_Post_No_Slidebar">Fashion</button>
                        <h1>Three Ideas For Cooking<br /> Goat Meat at Home</h1>
                    </div>
                    <div className="User_Header_Post_With_Slidebar">
                        <img src={Avatar_Header} alt="Avatar" />
                        <p>Julie Christie  •  October 17,2021  •  3:33  •  2 comments</p>  
                    </div>
                </div>
            </header>
            <div className="Post_With_Slidebar">
                <div className="Post_With_Slidebar_Items">
                    <p className="Path_Post_With_Slidebar">Home / Blog <span>/ Thee Ideas for Cooking Goat Meat at Home</span></p>
                    <div className="Post_With_Slidebar_P">  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc <br /> nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus <br /> imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.</p>
                    </div>  
                    <div className="Gallery_With_Slidebar">
                        <img src={Containet_1} className="Gallery_With_Slidebar_Food_1" alt="Food" />
                        <div className="Gallery_With_Slidebar_Items">
                            <img src={Containet_2} alt="Food" />
                            <img src={Containet_3} alt="Food" />
                        </div>
                    </div>
                    <div className="Post_With_Slidebar_P">  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. <br /> Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis <br /> fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit</p>
                    </div> 
                    <div className="Post_With_Slidebar_H1">
                        <img src={Quotation} alt="Quotation" />
                        <h1>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br /> lorem id penatibus imperdiet. Turpis egestas ultricies purus <br /> auctor tincidunt lacus nunc. </h1>
                    </div>
                    <div className="Post_With_Slidebar_P">  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc <br /> nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt <br /> lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. </p>
                    </div> 
                    <div className="Tags_Post_With_Slidebar">
                        <h1>Tags:</h1>
                        <button>Design</button>
                        <button>Photography</button>
                        <button>Images</button>
                        <button>Video</button>
                        <button>Music</button>
                        <button>Travel</button>
                    </div>
                    <div className="User_Singele_Post_With_Slidebar">
                        <img src={Blog_AuthorBox} alt="User" />
                        <div className="User_Text_Singele_Post_With_Slidebar">
                            <h1>Julie Christie</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id <br /> penatibus imperdiet. </p>
                        </div>
                    </div>
                </div>
                <aside className="Slidebar">
                    <div className="Search_Input_Post_Slidebar">
                        <input type="text" placeholder="Search......" />
                        <img src={Icon_search} alt="Icon search" className="Search_Icon"/>
                    </div>
                    <div className="Categories_Post_Slidebar">
                        <h1>Categories</h1>
                        <hr />
                        <div className="Categories_Post_Slidebar_Items">
                            <ul>
                                <li>Fashion</li>
                                <li>Food</li>
                                <li>Music</li>
                                <li>Travel</li>
                            </ul>
                            <ul>
                                <li>16</li>
                                <li>20</li>
                                <li>12</li>
                                <li>36</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Recent_Comments_Post_Slidebar">
                        <h1>Recent Comments</h1>
                        <hr />
                        <div className="Recent_Comments_Post_Slidebar_Items">
                            <p><span>John Mccain</span> Vegan baked oatmeal with fresh berries</p>
                            <p><span>Ana</span> 50 Foods That Are Super Healty</p>
                            <p><span>Camilla</span> How Many Carbs Should You Eat for Weight Loss?</p>
                            <p><span>Dailey</span> 22 Foods That Can Give You More Energy</p>
                        </div>
                    </div>
                    <div className="Archives_Post_Slidebar">
                        <h1>Archives</h1>
                        <hr />
                        <div className="Archives_Post_Slidebar_Items">
                            <ul>
                                <li>October 2021</li>
                                <li>September 2021</li>
                                <li>August 2021</li>
                            </ul>
                            <ul>
                                <li>12</li>
                                <li>6</li>
                                <li>23</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Recent_Posted_Post_Slidebar">
                        <h1>Recent Posted</h1>
                        <hr />
                        <div className="Recent_Posted_Post_Slidebar_Items">
                            <div className="Recent_Posted">
                                <img src={Sidebar_1} alt="Sidebar" />
                                <div className="Recent_Posted_Text">
                                    <h4>Vegan baked oatmeal with fresh berries</h4>
                                    <p>Julie Christie  •  October 17,2021</p>
                                </div>
                            </div>
                            <div className="Recent_Posted">
                                <img src={Sidebar_2} alt="Sidebar" />
                                <div className="Recent_Posted_Text">
                                    <h4>Vegan baked oatmeal with fresh berries</h4>
                                    <p>Julie Christie  •  October 17,2021</p>
                                </div>
                            </div>
                            <div className="Recent_Posted">
                                <img src={Sidebar_3} alt="Sidebar" />
                                <div className="Recent_Posted_Text">
                                    <h4>Vegan baked oatmeal with fresh berries</h4>
                                    <p>Julie Christie  •  October 17,2021</p>
                                </div>
                            </div>
                            <div className="Recent_Posted">
                                <img src={Sidebar_4} alt="Sidebar" />
                                <div className="Recent_Posted_Text">
                                    <h4>Vegan baked oatmeal with fresh berries</h4>
                                    <p>Julie Christie  •  October 17,2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Tags_Post_Slidebar">
                        <h1>Tags</h1>
                        <hr />
                        <div className="Tags_Post_Slidebar_Items">
                            <button>Design</button>
                            <button>Photography</button>
                            <button>Images</button>
                            <button>Video</button>
                            <button>Music</button>
                            <button>Travel</button>
                        </div>
                    </div>
                </aside>
            </div>
            <div className="Blog_PreviosNext">
                <div className="Previos_Post">
                    <div className="Previos_Post_Items">
                        <img src={Icon_arrow_left} alt="Previos" />
                        <h3>PREVIOS POST</h3>
                    </div>
                    <div className="Previos_Post_Text">
                        <h1>7 Reasons to Start Your Day With Lemon <br /> Water</h1>
                    </div>
                </div>
                <div className="Next_Post">
                    <div className="Next_Post_Items">
                        <h3>NEXT POST</h3>
                        <img src={Icon_arrow_right} alt="Next" />
                    </div>
                    <div className="Next_Post_Text">
                        <h1>12 Sparkling Wines We`re Loving This <br /> Summer</h1>
                    </div>
                </div>
            </div>
            <div className="Comments_Post">
                <h1>5 Comments</h1>
                <div className="Comments_Post_Items">
                    <div className="Comment">
                        <img src={Avatar_1} alt="Avatar" />
                        <div className="Comment_Text">
                            <h2>Leslie Alexander</h2>
                            <p>March 12,2020,7:08 pm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <p className="Reply">Reply</p>
                    </div>
                    <div className="Comment_1">
                        <img src={Avatar_1_1} alt="Avatar" />
                        <div className="Comment_Text">
                            <h2>Jenifier Lopez</h2>
                            <p>March 12,2020,7:08 pm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus <br /> imperdiet. </p>
                        </div>
                        <p className="Reply">Reply</p>
                    </div>
                    <div className="Comment">
                        <img src={Avatar_2} alt="Avatar" />
                        <div className="Comment_Text">
                            <h2>Jane Cooper</h2>
                            <p>March 12,2020,7:08 pm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <p className="Reply">Reply</p>
                    </div>
                    <div className="Comment">
                        <img src={Avatar_3} alt="Avatar" />
                        <div className="Comment_Text">
                            <h2>Jenny Wilson</h2>
                            <p>March 12,2020,7:08 pm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <p className="Reply">Reply</p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="Leave_a_Reply">
                <h2>Leave a Reply</h2>
                <form className="Form_Post">
                    <p>Comment</p>
                    <textarea></textarea>
                    <p>Name*</p>
                    <input type="text"/>
                    <p>Email*</p>
                    <input type="mail"/>
                    <p>Website</p>
                    <input type="url"/>
                    <button type="submit">Post Comment</button>
                </form>
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

export default Single_Post_With_Slidebar