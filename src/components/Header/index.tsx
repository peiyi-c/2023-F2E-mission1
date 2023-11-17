import "./index.scss";
import logo1 from "../../assets/logo-01.svg";
import {
  List,
  HandCoins,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { BlurContext, BlurContextType } from "../../containers/BlurContext";
import { scrollOffset } from "../../utilities/helpers";

interface HeaderProps {
  handleClick: () => void;
}
export const Header = ({ handleClick }: HeaderProps) => {
  const { blur } = useContext(BlurContext) as BlurContextType;

  return (
    <>
      <header className="header" role="heading">
        <HashLink to="#top">
          <img
            className="header__logo"
            src={logo1}
            role="img"
            aria-label="website logo"
          />
        </HashLink>

        <List onClick={handleClick} className="header__icon" size={32} />
        <nav
          className={`nav ${blur ? "open" : ""}`}
          role="navigation"
          onClick={handleClick}
        >
          <img
            className="nav__logo"
            src={logo1}
            role="img"
            aria-label="website logo"
          />
          <ul className="nav__links" role="list">
            <HashLink
              smooth
              to="/#donations"
              scroll={scrollOffset}
              role="listitem"
            >
              <li>
                <button className="button-sm" type="button">
                  <HandCoins size={24} />
                  小額捐款
                </button>
              </li>
            </HashLink>
            <HashLink
              smooth
              to="/#claims"
              scroll={scrollOffset}
              role="listitem"
            >
              <li>候選主張</li>
            </HashLink>
            <HashLink
              smooth
              to="/#events"
              scroll={scrollOffset}
              role="listitem"
            >
              <li>最新活動</li>
            </HashLink>
            <HashLink
              smooth
              to="/#policy"
              scroll={scrollOffset}
              role="listitem"
            >
              <li>政策議題</li>
            </HashLink>
            <HashLink
              smooth
              to="/#mailbox"
              scroll={scrollOffset}
              role="listitem"
            >
              <li>服務信箱</li>
            </HashLink>
          </ul>
          <hr className="nav__hr" />
          <ul className="nav__icons" role="list">
            <a href="https://www.facebook.com/" target="_blank">
              <li>
                <FacebookLogo size={32} />
                <span className="nav__icons-name">Facebook</span>
              </li>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <li>
                <InstagramLogo size={32} />
                <span className="nav__icons-name">Instagram</span>
              </li>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <li>
                <YoutubeLogo size={32} />{" "}
                <span className="nav__icons-name">Youtube</span>
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};
