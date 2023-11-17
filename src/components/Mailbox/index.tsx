import "./index.scss";
import TrackVisibility from "react-on-screen";

export const Mailbox = () => {
  return (
    <section id="mailbox" className="mailbox">
      <div className="left">
        <div className="mailbox__title">
          <h3>服務信箱</h3>
          <h4>Service Mail</h4>
          <span>您的聲音，我們的行動！</span>
          <span>
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </span>
        </div>
      </div>
      <div className="right">
        <TrackVisibility>
          {({ isVisible }) => (
            <form
              className={
                isVisible
                  ? "animate__animated animate__headShake mailbox__form"
                  : "mailbox__form"
              }
            >
              <div className="group">
                <label htmlFor="name">姓名 Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="group">
                <label htmlFor="email">信箱 Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="group">
                <label htmlFor="phone">電話/手機 Phone</label>
                <input type="phone" name="phone" id="phone" />
              </div>
              <div className="group">
                <label htmlFor="suggestion">對我們的建議 Suggestion</label>
                <textarea name="suggestion" id="suggestion" required />
              </div>
              <button className="button-lg" role="submit">
                確認送出
              </button>
            </form>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
};
