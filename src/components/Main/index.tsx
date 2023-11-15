import "./index.scss";
import { useContext } from "react";
import { BlurContext, BlurContextType } from "../../containers/BlurContext";
import { Hero } from "../Hero";
import { Claims } from "../Claims";
import { Events } from "../Events";
import { Policy } from "../Policy";
import { Donations } from "../Donations";
import { Mailbox } from "../Mailbox";

export const Main = () => {
  const { navOpen } = useContext(BlurContext) as BlurContextType;

  return (
    <main className={`main ${navOpen ? "blur" : ""}`}>
      <Hero />
      <Claims />
      <Events />
      <Policy />
      <Donations />
      <Mailbox />
    </main>
  );
};
