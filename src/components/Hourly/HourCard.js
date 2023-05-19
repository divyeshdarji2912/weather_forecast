import React from "react";

function HourCard(props) {
    const styles = {
      width: 170,
      backgroundColor: "#C0C0C0",
    };
  const {card} = props;
  // console.log(card);

    // const location = useLocation();
    // var day = (location.pathname).substr(1);
    // console.log(day);

  return (
    <>
      <div className="weather-card border card-container">
        <div
          style={styles}
          className="border border-success"
          align="center"
        >
          <span>
            <h3 className="bg m-2 bg-dark rounded-pill">
              {card.date} {card.month}
            </h3>
          </span>
          <span className="bg m-2 bg-dark">{card.time}</span>
          <div className="category" align="center">
            <img
              src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`}
              alt=""
            />
          </div>
          <div className="temperatures">
            <span className="badge minmax text-dark">
              {card.temperature}°C
            </span>
          </div>
        </div>
        <p className="m-2 ">
          <strong>{card.summary}</strong>
        </p>
      </div>
    </>
  );
}

export default HourCard;