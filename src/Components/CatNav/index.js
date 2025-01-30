import "./_cat-nav.scss";

const CatNav = () => {
  return (
    <div className="cat-nav-container">
      <ul>
        <li className="list-items">
          <a href="#">Men</a>
        </li>
        <li className="list-items">
          <a href="#">Women</a>
        </li>
        <li className="list-items">
          <a href="#">Kids</a>
        </li>
        <li className="list-items">
          <a href="#">Bonus</a>
        </li>
      </ul>
    </div>
  );
};

export default CatNav;
