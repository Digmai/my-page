const Header = () => {
  return (
    <header className="header">
      Header
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        {/* 
        <div id="menu" className="navigation__menu">
          <div className="navigation__menu-checkbox  navigation__menu-checkbox-category li">
            <div
              // onClick={() => setCategory(category)}
              className="navigation__menu-category"
            >
              {"category"}
            </div>

            <div className="navigation__menu-checkbox navigation__menu-checkbox-subcategory ul">
              <div
                className=" navigation__menu-subcategory li"
                // onClick={() => setSubcategory(subcategory)}
              >
                <>{"subcategory"}</>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
