import "./index.scss";
import data from "../../data/data.json";

export const Donations = () => {
  const { donations } = data;

  return (
    <section id="donations" className="donations">
      <div className="left">
        <div className="donations__title">
          <h3>小額捐款</h3>
          <h4>Small Donations</h4>
          <span>您的每筆捐款，是每隻毛孩未來的大大動力！</span>
        </div>
        <div className="donations__sum">
          <h5>目前贊助總金額</h5>
          <span>987,655,873</span>
        </div>
      </div>

      <div className="donations__options right">
        {donations.map((donation, index) => (
          <div className={`option option-${index + 1}`} key={index}>
            <div>
              <span className="option-price">
                {donation.name}｜<span className="NT">NT$</span>{" "}
                {donation.price}
              </span>
              <span className="option-donator">
                已有 {donation.donators} 人贊助
              </span>
            </div>
            <img src={donation.image} className="option-image" role="icon" />
          </div>
        ))}
      </div>
    </section>
  );
};
