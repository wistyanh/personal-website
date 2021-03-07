import './NavBar.css';

function TopBar() {
    return (
        <div className="topBar">
            <div className="AVP">
                <h2 className="initial">AVP</h2>
            </div>

            <nav className="navBar">
                <ul>
                    <li className="navLink">
                        <a href="#about">about</a>
                    </li>
                    <li className="navLink">
                        <a href="#experiences">experiences</a>
                    </li>
                    <li className="navLink">
                        <a href="#projects">projects</a>
                    </li>
                    <li className="navLink">
                        <a href="#contact">contact</a>
                    </li>
                </ul>
        </nav>
        </div>
    );
}

export default TopBar;