import "./index.scss";
import black1 from "../../assets/black-01.svg";
import { ArrowRight, NumberCircleOne } from "@phosphor-icons/react/dist/ssr";
import vote from "../../assets/vote.svg";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__candidate">
        <div className="wrapper">
          <img className="hero__candidate-img" src={black1} />
          <button className="hero__candidate-btn button-sm" type="button">
            候選人簡介 <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="hero__slogan">
        <div className="wrapper">
          <div className="hero__slogan-big">
            喵喵權益
            <br />
            我帶頭
          </div>
          <div className="hero__slogan-sm">
            <img className="hero__slogan-sm-icon" src={vote} />
            立委請支持
            <NumberCircleOne size={24} />
            黑新星
            <img className="hero__slogan-sm-icon" src={vote} />
          </div>
        </div>
      </div>
    </section>
  );
};
