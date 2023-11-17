import "./index.scss";
import logo2 from "../../assets/logo-02.svg";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  MapPin,
  Phone,
  Envelope,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { scrollOffset } from "../../utilities/helpers";
import { BlurContext, BlurContextType } from "../../containers/BlurContext";

export const Footer = () => {
  const { blur } = useContext(BlurContext) as BlurContextType;

  return (
    <footer className={`footer ${blur ? "blur" : ""}`}>
      <section>
        <div className="left">
          <img className="footer__logo" src={logo2} role="logo2" />
          <ul className="footer__social" role="list">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookLogo size={32} color="#ffffff" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramLogo size={32} color="#ffffff" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <YoutubeLogo size={32} color="#ffffff" />
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div>
            <span className="title">快速連結</span>
            <ul role="list">
              <HashLink to="#top" smooth role="listitem">
                <li>首頁</li>
              </HashLink>
              <HashLink
                smooth
                to="/2023-F2E-mission1/#events"
                scroll={scrollOffset}
                role="listitem"
              >
                <li>最新活動</li>
              </HashLink>
              <HashLink
                smooth
                to="/2023-F2E-mission1/#policy"
                scroll={scrollOffset}
                role="listitem"
              >
                <li>政策議題</li>
              </HashLink>
              <HashLink
                smooth
                to="/2023-F2E-mission1/#donations"
                scroll={scrollOffset}
                role="listitem"
              >
                <li>小額捐款</li>
              </HashLink>
            </ul>
          </div>
          <div>
            <span className="title">與我們聯繫</span>
            <ul role="list">
              <li className="item">
                <MapPin size={16} color="#D1FA31" />
                新星區閃耀大道88號 喵喵大樓3樓
              </li>
              <li className="item">
                <Phone size={16} color="#D1FA31" />
                (02) 888-5678
              </li>
              <li className="item">
                <Envelope size={16} color="#D1FA31" />
                <a href="mailto:supernova.black@gmail.com">
                  supernova.black@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <span>© 2023 黑新星 Supernova Black 版權所有。</span>
    </footer>
  );
};
