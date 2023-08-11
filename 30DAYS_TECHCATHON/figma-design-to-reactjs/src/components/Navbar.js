import logo from '../images/logo.svg'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
    return (
        <nav>
            <div className='left'>
                <img src={logo} alt='' className='logo-img'></img>
            </div>
            <HamburgerMenu />
            <div className='right'>
                <p><a href='#'>Login</a></p>
                <button>Register</button>
            </div>
        </nav>
    )
}

export default Navbar