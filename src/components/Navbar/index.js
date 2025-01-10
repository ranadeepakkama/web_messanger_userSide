import './index.css'

const Navbar = () => (
    <div className='navbar-container'>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <div className="cmp-logo">
                    <a className="navbar-brand" href="google.com">
                        Kich-Frinds
                    </a>
                </div>
                <div className="cmp-details-container d-flex flex-row justify-content-between align-items-center">
                    <button className='cmpy-details'>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <img className='user-img' src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' alt='user-img'/>
                            <h2 className='pt-1'>Name</h2>
                        </div>
                    </button>  
                </div>
            </div>
        </nav>
    </div>
)

export default Navbar