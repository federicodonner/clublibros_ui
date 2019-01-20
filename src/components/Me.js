import React from "react";
import Header from "./Header";

const Me = props => {
  const me = {
    name: "Federico Donner",
    email: "federico.donner@telefonica.com",
    books: [
      { name: "Drive", author: "Daniel Pink", available: true, borrowed: true },
      {
        name: "The house of leaves",
        author: "Mark Z. Danielewski",
        available: false,
        borrowed: false
      },
      {
        name: "The Universe in a Nuthsell",
        author: "Stephen Hawkings",
        available: true,
        borrowed: false
      }
    ],
    reviews: [
      { author: "Victoria Badani", stars: 4, text: "Genial!" },
      {
        author: "Federico Donner",
        stars: 1,
        text: "No muy bueno."
      }
    ],
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
        <Header logoType="blackLogo" withGradient={true} withGreeting={false} />
        <div className="content">
          <p>Hola, {me.name}</p>
          <p>
            En esta sección podés modificar tus datos y ver tu historial de
            alquileres
          </p>
          <form className="prettyForm">
            <span className="formField">
              Nombre: <input type="text" value={me.name} />
            </span>
            <span className="formField">
              Email: <input type="email" value={me.email} />
            </span>
          </form>
          <p>
            <a href="#">Guardar</a>
          </p>
          <p>Tus libros:</p>
          <p>
            <a href="/book/1">{me.books[0].name}</a> - {me.books[0].author} -
            Disponible
            <span className="reviewText">
              <a href="#">Quiero llevármelo</a>
            </span>
          </p>
          <p>
            <a href="/book/1">{me.books[1].name}</a> - {me.books[1].author} - lo
            tiene Victoria Badani
            <span className="reviewText">
              <a href="#">Quiero que lo devuelva</a>
            </span>
          </p>
          <p>
            <a href="/book/1">{me.books[2].name}</a> - {me.books[2].author} - lo
            tiene Victoria Badani
            <span className="reviewText">
              No disponible,
              <a href="/books/1"> lo traje devuelta</a>
            </span>
          </p>
          <p>Historial de alquileres:</p>
          <p>
            <a href="/book/1">{me.pastRentals[0].name}</a>{" "}
            {me.pastRentals[0].author} - <a href="#">Escribí una reseña</a>
            <span className="rentalDates">Del 01/01/2019 al 31/01/2019</span>
          </p>
          <p>
            <a href="/book/1">{me.pastRentals[1].name}</a> -{" "}
            {me.pastRentals[1].author}
            <span className="rentalDates">Del 01/01/2019 al 31/01/2019</span>
          </p>
          <p>
            <a href="/book/1">{me.pastRentals[2].name}</a> -{" "}
            {me.pastRentals[2].author} - <a href="#">Escribí una reseña</a>
            <span className="rentalDates">Del 01/01/2019 al 31/01/2019</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
