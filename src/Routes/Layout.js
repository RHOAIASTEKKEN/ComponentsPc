import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function Layout() {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
    }

    return (
        <header>
            <Link
                to={'/'}
                onClick={() => handleClick('/')}
            >
                <img className="img-fluid" src="https://dreamgateways.net/bernalScan/img/logo.jpeg" alt="" />
            </Link>


            <nav>
                <Link
                    to={'/'}
                    className={activeLink === '/' ? 'activeLink' : ''}
                    onClick={() => handleClick('/')}
                >Home</Link>
                <Link
                    to={'/pcbuilder'}
                    className={activeLink === '/pcbuilder' ? 'activeLink' : ''}
                    onClick={() => handleClick('/pcbuilder')}
                >PcBuilder</Link>
                <Link
                    to={'/infocomponets'}
                    className={activeLink === '/infocomponets' ? 'activeLink' : ''}
                    onClick={() => handleClick('/infocomponets')}
                >Components</Link>
            </nav>
        </header>
    )
}

export default Layout