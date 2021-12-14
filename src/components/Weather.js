import React from "react";
import moment from "moment";
import { Button } from "semantic-ui-react";

const refresh = () => {
  window.location.reload();
};

const CardExampleCard = ({ weatherData }) => {
  let currentDate = new Date();
  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  console.log(time);
  console.log(
    new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("fr-FR") + time
  );

  return (
    <div>
      <div className="main ">
        <div className="top">
          <p className="header">{weatherData.name}</p>
          <Button
            className="button"
            inverted
            color="blue"
            circular
            icon="refresh"
            onClick={refresh}
          />
        </div>
        <div className="flex">
          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
            <br />
            <br />
            Heure actuelle : {time}
          </p>
          <p className="description">{weatherData.weather[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp">Température: {weatherData.main.temp} &deg;C</p>
          <p className="temp">Humidité: {weatherData.main.humidity} %</p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset">
            Lever du soleil:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "fr-FR"
            )}
          </p>
          <p className="sunrise-sunset">
            Coucher du soleil:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "fr-FR"
            )}
          </p>
        </div>

        <div className="flex col">
          <div className="row">
            <div
              style={{ textAlign: "center", justifyContent: "center" }}
              className="flex"
            >
              {time >
                new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                  "fr-FR"
                ) &&
              time <
                new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  "fr-FR"
                ) ? (
                <img
                  alt=""
                  src="https://media3.giphy.com/media/kJqZDN4aDHNsowYg7t/giphy.gif?cid=ecf05e47u4lbceimhe1uuffpkbudt91e3zk5272bi55lxalk&rid=giphy.gif&ct=g"
                />
              ) : (
                <img
                  alt=""
                  src="https://media3.giphy.com/media/p2PoRL1YVjh31Pnyj6/giphy.gif?cid=ecf05e47t0f0konegk5nxzpyrcd0sutzenc22qc9hpayji40&rid=giphy.gif&ct=g"
                />
              )}
            </div>
          </div>

          <div className="row">
            <div
              style={{ textAlign: "center", justifyContent: "center" }}
              className="flex"
            >
              {weatherData.weather[0].main === "Clouds" ? (
                <img
                  alt=""
                  src="https://media2.giphy.com/media/l1J3IBMn0rRxbjxUQ/giphy.gif?cid=ecf05e47alfvky5f42hgypk5gqic0lqaqnj66u9rrqazsqo4&rid=giphy.gif&ct=g"
                />
              ) : null}
            </div>

            <div
              style={{ textAlign: "center", justifyContent: "center" }}
              className="flex"
            >
              {weatherData.weather[0].main === "Sun" ? (
                <img
                  alt=""
                  src="https://media0.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif?cid=ecf05e47hgxsrnuilipua12y3uvislk0w6cm03e08v8uelvg&rid=giphy.gif&ct=g"
                />
              ) : null}
            </div>

            <div
              style={{ textAlign: "center", justifyContent: "center" }}
              className="flex"
            >
              {weatherData.weather[0].main === "Rain" ? (
                <img
                  alt=""
                  src="https://media4.giphy.com/media/3og0IOUWB5AZoP6la0/giphy.gif?cid=ecf05e47gd9lnrgmy7jgouv7nhxom9pm2mu8nerq6qvtci2q&rid=giphy.gif&ct=g"
                />
              ) : null}
            </div>

            <div
              style={{ textAlign: "center", justifyContent: "center" }}
              className="flex"
            >
              {weatherData.weather[0].main === "Snow" ? (
                <img
                  alt=""
                  src="https://media0.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif?cid=790b761128e19afe9d9fcd436ab3e01e7dbb6627477efcf1&rid=giphy.gif&ct=g"
                />
              ) : null}
            </div>
          </div>

          <div className="row">
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                marginBottom: "50px",
              }}
              className="flex"
            >
              {time >
                new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                  "fr-FR"
                ) &&
              time <
                new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  "fr-FR"
                ) ? (
                <img
                  alt=""
                  src="https://media0.giphy.com/media/377Tbj3ccTQxCsxhgz/giphy.gif?cid=ecf05e47b3hwmwns4otwipkitwluuk0p8efd7zltzrplvsjq&rid=giphy.gif&ct=g"
                />
              ) : (
                <img
                  alt=""
                  src="https://media1.giphy.com/media/cAuwW15e54lFGXoMyc/giphy.gif?cid=ecf05e47vwsw9n820el29es10nehii00x6lnte5tjzu2c80j&rid=giphy.gif&ct=g"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExampleCard;
