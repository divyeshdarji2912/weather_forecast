import React, { Component } from "react";
import Cards from "./components/Card/Cards";
import Hourly from "./components/Hourly/Hourly";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import weatherData from "./weather.json";
// import initialData from "./local.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initialData
      isLoaded: false,
      data: [],
      hourData:[],
    };
  }

  //  const days = ["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"];

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=42.4072&lon=71.3824&appid=562f7d3952d9da613c82a1306e53aa94&units=metric"
    )
      .then((res) => res.json())
      .then((json) => {
        this.updateFromAPI(json);
        this.hourlyData(json);
        // this.setState({ data : json.list, isLoaded: true });
      });
  }

  updateFromAPI(data) {
    // console.log(data);
    const localData = [];

    var temp1 = {};

    for (let i = 0; i < data.list.length; i++) {
      // const { time, temperatureHigh, temperatureLow, icon, summary, dt_txt } =
      //   data.list[i];

      let dateTime = convertDate(data.list[i].dt).split(" ");
      // console.log(dateTime);
      // var date = dateTime[4].substr(0, 5) + " " + dateTime[5];
      // // console.log(data.list[i]);
      // console.log("Date: "+ date);

      var date1 = dateTime[2] + " " + dateTime[1];
      console.log("Date1: "+date1);
      if (!(date1 in temp1)) {
        temp1[date1] = {
          min: Number.MAX_VALUE,
          max: Number.MIN_VALUE,
          done: false,
          dateTime,
          icon: data.list[i].weather[0].icon,
          summary: data.list[i].weather[0].description,
        };
      }
      if (data.list[i].main.temp_max > temp1[date1].max) {
        temp1[date1].max = data.list[i].main.temp_max;
      }
      if (data.list[i].main.temp_min < temp1[date1].min) {
        temp1[date1].min = data.list[i].main.temp_min;
      }
      // else {

      //   temp1[date1].max = data.list[i].main.temp_max;
      //   temp1[date1].min = data.list[i].main.temp_min;
      // }
      // console.log({ ...temp1 });
    }
    var date;
    console.log(temp1)
    let counter = 0;
    for (date in temp1) {
      if (!temp1[date].done && counter < 5) {
        const temp = {};
        temp.date = temp1[date].dateTime[2];
        temp.month = temp1[date].dateTime[1];
        temp.weekday = temp1[date].dateTime[0];
        // temp.time = dateTime[3].substr(0, 5) + " " + dateTime[4];
        temp.temperatureHigh = temp1[date].max;
        temp.temperatureLow = temp1[date].min;
        temp.icon = temp1[date].icon;
        temp.summary = temp1[date].summary;
        localData.push(temp);
        temp1[date].done = true;
        counter++;
      }
    }
    // console.log(localData);
    this.setState({ data: localData });
  }

  hourlyData(result) {
    const hour = [];
    // console.log(result);
    for (let i = 0; i < result.list.length; i++) {
      let dateTime = convertDate(result.list[i].dt).split(" ");
      // console.log(dateTime);
      var date = dateTime[2] + " " + dateTime[1];
      // console.log("Date: "+date);
      const temp = {};
      temp.date = dateTime[2];
      temp.month = dateTime[1];
      temp.weekday = dateTime[0];
      temp.time = dateTime[4].substr(0, 5) + " " + dateTime[5];
      temp.temperature = result.list[i].main.temp;
      temp.icon = result.list[i].weather[0].icon
      temp.summary = result.list[i].weather[0].description;
      hour.push(temp);
      
    }
    // console.log(hour);
    this.setState({ hourData: hour });
  }

  render() {
    return (
      <>
        <div className="background"></div>
        <div className="">
          <Router>
            <nav className="navi">
              <Link className="text-link" to="/">
                {" "}
                Home{" "}
              </Link>
            </nav>
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<Cards cards={this.state.data} />}
                ></Route>
                <Route
                  path="/:nameofDay"
                  element={<Hourly forecast={this.state.hourData} />}
                ></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </>
    );
  }
}

function convertDate(time) {
  var dateTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    weekday: 'long',
  }).format(time * 1000);
  dateTime = dateTime.replace(/,/g, "");
  // console.log(dateTime);
  // console.log(weatherData.list[0].main.temp_max);
  // const dayOfWeekName = new Date(dateTime).toLocaleString(
  //   'default', {weekday: 'long'}
  // );
  // console.log(dayOfWeekName);
  return dateTime;
}

export default App;
