const Header = () => {
  return (
    <header className="header">
      <div className="header-description">
        <h1>
          <b>
            University of British Columbia
            <br />
            Food Bank -
          </b>
        </h1>
        <h3>
          Building a Hunger-Free <br /> Community Together
        </h3>
        <button>
          <a
            tagret="blank"
            href="https://www.gofundme.com/f/4gvs2k-ams-food-bank"
          >
            Donate
          </a>
        </button>
        <a
          className="header-link"
          href="#inventory"
          onClick={() => {
            alert("At first, press sign-in link on navigation menu");
          }}
        >
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
