import "./index.scss";
import data from "../../data/data.json";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import TrackVisibility from "react-on-screen";

export const Events = () => {
  const { articles } = data;

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <section id="events" className="events">
          <div className="events__title">
            <h3>最新活動</h3>
            <h4>Latest Events</h4>
          </div>
          <div className="events__articles">
            {articles.map((article, index) => (
              <article className="events__articles-article" key={index}>
                <img
                  className={
                    isVisible
                      ? `animate__animated animate__pulse  events__articles-img`
                      : "events__articles-img"
                  }
                  src={article.image}
                />

                <div>
                  <h4>{article.title}</h4>
                  <p>{article.content}</p>
                  <div>
                    <span className="events__articles-date">
                      {article.date}
                    </span>
                    <button className="events__articles-btn button-sm">
                      閱讀更多 <ArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </TrackVisibility>
  );
};
