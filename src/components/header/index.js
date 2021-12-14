import "./index.css";
import data from "../../data";

function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <div className="header__info">
        <h1 className="header__info-name">{data[language].header.name}</h1>
        <h2 className="header__info-title">{data[language].header.title}</h2>
      </div>
      <select
        value={language}
        className="select"
        onChange={(event) => setLanguage(event.target.value)}
      >
        <option value="en">English</option>
        <option value="lt">Lietuviškai</option>
      </select>
    </header>
  );
}
export default Header;
