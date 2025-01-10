//import Footer from "../Footer"
import Navbar from '../Navbar'
import UserList from '../UserList'
import './index.css'

const Home = () => (
    <div className="main-container">          
        <Navbar/>
        <div className="home-container mt-2">
            <UserList/>
        </div>
        <div className="footer-container">
            
        </div>
    </div>
)

export default Home