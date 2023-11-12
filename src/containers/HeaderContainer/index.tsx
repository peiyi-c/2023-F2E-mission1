import { useContext } from "react";
import { Header } from "../../components/Header";
import { BlurContext } from "../BlurContext";

type BlurContextType = {
  navOpen?: boolean;
  setNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

function HeaderContainer() {
  const { setNavOpen } = useContext(BlurContext) as BlurContextType;

  const handleClick = () => {
    setNavOpen && setNavOpen((navOpen: boolean) => !navOpen);
  };

  const scrollOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return <Header handleClick={handleClick} scrollOffset={scrollOffset} />;
}

export default HeaderContainer;
