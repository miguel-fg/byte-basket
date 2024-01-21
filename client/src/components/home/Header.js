
const Header = () => {
    return (
        <header className="header">
            <div className="header-description">
                <h1>
                    University of British Columbia
                    <br />
                    Food Bank -
                </h1>
                <h3>
                    Building a Hunger-Free <br /> Community Together
                </h3>
                <button>Donate</button>
                <a className="header-link" href="#inventory">
                    Inventory
                </a>
            </div>
            <div className="header-img">
                <img src="/assets/header-img.png" alt="UBC-logo" />
            </div>
        </header>
    );
};

export default Header;
