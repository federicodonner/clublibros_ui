import React from "react";
import Header from "./Header";

const User = props => {
  const theUser = {
    name: "Daniel Marotta",
    currentRental: {
      name: "Drive",
      author: "Daniel Pink",
      since: 123455
    },
    pastRentals: [
      {
        name: "Drive",
        author: "Daniel Pink",
        hasReview: false,
        startDate: 123456,
        endDate: 123456
      },
      {
        name: "The House of Leaves",
        author: "Mark Z. Danielewski",
        hasReview: true,
        startDate: 123456,
        endDate: 123456
      },
      {
        name: "The Universe in a Nutshell",
        author: "Stephen Hawkings",
        hasReview: false,
        startDate: 123456,
        endDate: 123456
      }
    ]
  };
  return (
    <div className="app-view cover">
      <div className="scrollable">
        <Header logoType="blackLogo" withGradient={true} withGreeting={true} />
        <div className="content">
          <p>
            {theUser.name} tiene un libro tuyo:{" "}
            <a href="/book/1"> {theUser.currentRental.name}</a> desde
            01/01/2019. - <a href="#">Pedile que lo devuelva</a>
          </p>
          <p>Historial de alquileres de {theUser.name}</p>
          <p>
            <a href="/book/1">{theUser.pastRentals[0].name}</a>{" "}
            {theUser.pastRentals[0].author}
            <span className="rentalDates">Del 01/01/2019 al 31/01/2019</span>
          </p>
          <p>
            <a href="/book/1">{theUser.pastRentals[1].name}</a> -{" "}
            {theUser.pastRentals[1].author}
            <span className="rentalDates">Del 01/01/2019 al 31/01/2019</span>
          </p>
          <p>
            <a href="/book/1">{theUser.pastRentals[2].name}</a> -{" "}
            {theUser.pastRentals[2].author}
            <span className="rentalDates">Del 01/01/2019 al 31/01/2019</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
