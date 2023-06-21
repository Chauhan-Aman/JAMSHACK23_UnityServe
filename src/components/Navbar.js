import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const Navbar = (props) => {

    // let location = useLocation();
    let history = useHistory();
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/login')
        props.showAlert("Logged out Successfully", "success")
    }

    return (
        <>
            <div className="bgCover1 bg-fixed"></div>
            <nav className="navbar navbar-expand-lg py-2">
                <div className="navbar_everything container-fluid mx-5">
                    <img src="./img/logo_nobg.png" alt="" id="navbar_logo" className=" rounded-full pt-1" />
                    <h2 className="name_nav pt-1 mx-3">UNITYSERVE</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">

                        <ul className="navbar-nav ms-auto mx-2">
                            <li className="nav-item px-2">
                                <Link className="nav-link" aria-current="page" to="/" id="current">HOME</Link>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#vision">VISION</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#team">THE TEAM</a>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="/marketplace" id="marketplace_nav">MARKETPLACE</Link>
                            </li>
                            <div className="nav-item mx-2">
                                {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                                    <Link className="btn btn-outline-info text-xs" id="start_button" to="/login" role="button">Login</Link>
                                </form> : <button className="btn btn-outline-info text-xs" id="start_button" onClick={handleLogout}>Logout</button>}
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar