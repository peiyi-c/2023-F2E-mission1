import { useContext } from "react";
import { Header } from "../../components/Header";
import { BlurContext } from "../BlurContext";
type BlurContextType = {
  blur?: boolean;
  setBlur?: React.Dispatch<React.SetStateAction<boolean>>;
};

function HeaderContainer() {
  const { setBlur } = useContext(BlurContext) as BlurContextType;

  const handleClick = () => {
    if (window.innerWidth < 1210) {
      setBlur && setBlur((blur: boolean) => !blur);
    } else {
      setBlur && setBlur(false);
    }
  };

  return <Header handleClick={handleClick} />;
}

export default HeaderContainer;
