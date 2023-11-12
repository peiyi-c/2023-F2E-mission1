import "./index.scss";
import logo1 from "../../assets/logo-01.svg";
import {
  List,
  HandCoins,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export const Header = () => {
  return (
    <>
      <header className="header" role="heading">
        <img
          className="header__logo"
          src={logo1}
          role="img"
          aria-label="website logo"
        />
        <List className="header__icon" size={32} />
      </header>
      <nav className="nav" role="navigation">
        <img
          className="nav__logo"
          src={logo1}
          role="img"
          aria-label="website logo"
        />
        <ul className="nav__links" role="list">
          <li>
            <button className="button-sm">
              <HandCoins size={24} />
              小額捐款
            </button>
          </li>
          <li>候選主張</li>
          <li>最新活動</li>
          <li>政策議題</li>

          <li>服務信箱</li>
        </ul>
        <hr className="nav__hr" />
        <ul className="nav__icons" role="list">
          <li>
            <FacebookLogo size={32} />{" "}
            <span className="nav__icons-name">Facebook</span>
          </li>
          <li>
            {" "}
            <InstagramLogo size={32} />{" "}
            <span className="nav__icons-name">Instagram</span>
          </li>
          <li>
            {" "}
            <YoutubeLogo size={32} />{" "}
            <span className="nav__icons-name">Youtube</span>
          </li>
        </ul>
      </nav>
    </>
  );
};
