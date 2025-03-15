import { NavLink } from "react-router";

function Header() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Magento Dashboard</a>
                    <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? `nav-link active` : 'nav-link'
                                    }
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/baseball"
                                    className={({ isActive }) =>
                                        isActive ? `nav-link active` : 'nav-link'
                                    }
                                >Baseball</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? `nav-link active` : 'nav-link'
                                    }
                                >About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header