import "./index.scss";
import { useContext } from "react";
import { BlurContext, BlurContextType } from "../../containers/BlurContext";
import { Hero } from "../Hero";

export const Main = () => {
  const { navOpen } = useContext(BlurContext) as BlurContextType;

  return (
    <main className={`main ${navOpen ? "blur" : ""}`}>
      <Hero />
    </main>
  );
};
