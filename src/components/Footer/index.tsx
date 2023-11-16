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
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <div className="left">
          <img className="footer__logo" src={logo2} role="logo2" />
          <ul className="footer__social" role="list">
            <li>
              <FacebookLogo size={32} color="#ffffff" />
            </li>
            <li>
              <InstagramLogo size={32} color="#ffffff" />
            </li>
            <li>
              <YoutubeLogo size={32} color="#ffffff" />
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
              <HashLink to="#events" smooth role="listitem">
                <li>最新活動</li>
              </HashLink>
              <HashLink to="#policy" smooth role="listitem">
                <li>政策議題</li>
              </HashLink>
              <HashLink to="#donations" smooth role="listitem">
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
                supernova.black@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
      <span>© 2023 黑新星 Supernova Black 版權所有。</span>
    </footer>
  );
};
