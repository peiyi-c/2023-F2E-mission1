import "./index.scss";
import data from "../../data/data.json";
import TrackVisibility from "react-on-screen";
export const Policy = () => {
  const { titles, texts } = data.policies[0];

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <section id="policy" className="policy">
          <div className="policy__title">
            <h3>政策議題</h3>
            <h4>Policy Issues</h4>
          </div>

          <div className="policy__table">
            <input id="tab1" type="radio" name="policy" checked />
            <input id="tab2" type="radio" name="policy" checked />
            <input id="tab3" type="radio" name="policy" checked />

            <div className="policy__table-title">
              <ul role="list">
                {titles.map((title, index) => (
                  <li className={title.tab} key={index}>
                    <label htmlFor={title.tab}>{title.name}</label>
                  </li>
                ))}
              </ul>
            </div>

            <article className="policy__table-description">
              {texts.map((text, index) => {
                return (
                  <div className={`tab ${text.tab}`} key={index}>
                    <h4>{text.title}</h4>
                    <div className="tab-content">
                      {text.content.map((p, index) => (
                        <p key={index}>
                          <img
                            src={p.image}
                            role="icon"
                            className={
                              isVisible
                                ? "animate__animated animate__fadeIn"
                                : ""
                            }
                          />
                          <h5
                            className={
                              isVisible
                                ? "animate__animated animate__fadeIn animate__delay-1s"
                                : ""
                            }
                          >
                            {p.title}
                          </h5>
                          <span
                            className={
                              isVisible
                                ? "animate__animated animate__fadeIn animate__delay-1s"
                                : ""
                            }
                          >
                            {p.description}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </article>
          </div>
        </section>
      )}
    </TrackVisibility>
  );
};
