import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Home from "./components/home/Home"
import Blog_Two_Columns from "./components/blogs/blogs_two_columns/Blog_Two_Columns"
import Blog_One_Columns from "./components/blogs/blog_one_column/Blog_One_Column"
import Single_Portfolio_No_Slidebar from "./components/portfolio/single_portfolio_no_sidebar/Single_Portfolio_No_Slidebar"
import Portfolio_Grids from "./components/portfolio/portfolio_grids/Portfolio_Grids"
import Single_Post_No_Slidebar from "./components/posts/single_post_no_slidebar/Single_Post_No_Slidebar"
import Single_Post_With_Slidebar from "./components/posts/single_post_with_slidebar/Single_Post_With_Slidebar"

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs_two_columns" element={<Blog_Two_Columns />} />
            <Route path="/blogs_one_columns" element={<Blog_One_Columns />} />
            <Route path="/single_portfolio_no_slidebar" element={<Single_Portfolio_No_Slidebar />} />
            <Route path="/portfolio_grids" element={<Portfolio_Grids />} />
            <Route path="/single_post_no_slidebar" element={<Single_Post_No_Slidebar />} />
            <Route path="/single_post_with_slidebar" element={<Single_Post_With_Slidebar />} />
        </Routes>
        </Router>
      )
}

export default App