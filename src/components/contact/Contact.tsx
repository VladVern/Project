import "./Contact_style.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Contact() {
    // Menu
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    // Btn submit
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
    })

    const [formErrors, setFormErrors] = useState<string[]>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const errors: string[] = []
        if (!formData.firstName.trim()) errors.push("First Name is required.")
        if (!formData.lastName.trim()) errors.push("Last Name is required.")
        if (!formData.email.trim()) errors.push("Email is required.")
        if (!formData.phone.trim()) errors.push("Phone is required.")
        if (!formData.date.trim()) errors.push("Date is required.")
        if (!formData.time.trim()) errors.push("Time is required.")
        if (!formData.guests.trim()) errors.push("Guests count is required.")

        if (errors.length > 0) {
            setFormErrors(errors)

            setTimeout(() => setFormErrors([]), 5000)
            return
        }

        setFormErrors([])
        console.log("Form submitted:", formData)
    }

    return (
         <div className="wrapper">
            <header className="Header_Contact">
                <div className="Navigation">
                    <div className="First">
                        <Link to="/home"><img src="src/components/contact/img/Logo.png" alt="Logo" className="Logo"/></Link>
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
                    <nav className={`SideMenu_Contact ${menuOpen ? "open" : ""}`}>
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
                            <Link to="/portfolio">
                                <li><a href="#portfolio">Portfolio - Grids</a></li>
                            </Link>
                            <Link to="/blogs">
                                <li><a href="#blogs">Blogs</a></li>    
                            </Link>
                            <Link to="/post">
                                <li><a href="#post">Post</a></li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="Headline_Hero">
                    <h1>Get in Touch</h1>
                    <p>The freshest ingredients for you every day</p>
                </div>
                <div className="OpenTime">
                    <div className="Open-time">
                        <p>Open time</p>
                        <p>Sunday-Friday</p>
                    </div>
                    <div className="Time-eat">  
                        <div className="Brunch">
                            <p>Brunch</p>
                            <p>11:00-12:00</p>
                        </div>
                        <div className="Lunch">
                            <p>Lunch</p>
                            <p>13:00-17:00</p>
                        </div>
                        <div className="Dinner">
                            <p>Dinner</p>
                            <p>18:00-20:00</p>
                        </div>
                    </div>  
                </div>
            </header>
            <div className="Adress_Location">
                <img className="Orange" src="src\components\contact\img\Orange.png" alt="Orange" />
                <div className="Contact">
                    <img src="src\components\contact\img\Adress+Location+First.png" alt="Adress+Location+First" />
                    <div className="Text_Contact">
                        <p>We can be contacted via</p>
                        <p>email  <span>info@foodzero.com</span> </p>
                        <p>or telephone on  <span>+86 852 346 000</span> </p>
                    </div>
                </div>
                <div className="Place">
                    <div className="Text_Place">
                        <p>We are located in 1959 Sepulveda Blvd. Culver</p>
                        <p>City, CA, 90230</p>
                        <button className="Btn_maps">View in maps</button>
                    </div>
                    <img src="src\components\contact\img\Adress+Location+Second.png" alt="Adress+Location+Second" />
                </div>
            </div>
            <div className="Reservation_Form">
                <img src="src\components\contact\img\Mint.png" alt="Mint" className="Mint"/>
                <div className="Text_Form">
                    <h1>Make a Reservation</h1>
                    <p>Get in touch with restaurant</p>
                </div>
                <form className="Form_Contact" onSubmit={handleFormSubmit}>
                    <div className="Name">
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange}/>
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="Email">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div className="Tel">
                        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange}/>
                    </div>
                    <div className="Time">
                        <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleInputChange}/>
                        <select name="time" value={formData.time} onChange={handleInputChange}>
                            <option value="">Select Time</option>
                            <option>6:00 pm</option>
                            <option>7:00 pm</option>
                            <option>8:00 pm</option>
                        </select>
                    </div>
                    <div className="Guests">
                        <select name="guests" value={formData.guests} onChange={handleInputChange}>
                            <option value="">Select Guests</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                            <option>6 Person</option>
                        </select>
                    </div>
                    {formErrors.length > 0 && (
                        <div className="error-message">
                            {formErrors.map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    )}
                    <button type="submit" className="Submit_Btn">Book Now</button>
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
                                <button type="submit" className="Subscribe_Btn">Subscribe</button>
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

export default Contact