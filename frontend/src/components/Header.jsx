import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Magento Dashboard</Link>
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
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? `nav-link active` : 'nav-link'
                                    }
                                >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? `nav-link active` : 'nav-link'
                                    }
                                >Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
