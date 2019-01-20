import React from "react";
import Header from "./Header";

const Book = props => {
  const theBook = {
    name: "Drive",
    author: "Daniel Pink",
    year: "2009",
    abstract:
      "Drive is the fourth non-fiction book by Daniel Pink. The book was published on December 29, 2009 by Riverhead Hardcover. In the text, he argues that human motivation is largely intrinsic, and that the aspects of this motivation can be divided into autonomy, mastery, and purpose.",
    owner: "Daniel Marotta",
    available: true,
    reviews: [
      { author: "Victoria Badani", stars: 4, text: "Genial!" },
      {
        author: "Federico Donner",
        stars: 1,
        text: "No muy bueno."
      }
    ]
  };
  return (
    <div className="app-view cover">
      <div className="scrollable">
        <Header logoType="blackLogo" withGradient={true} withGreeting={true} />
        <div className="content">
          <p>
            {theBook.name} - {theBook.author} - {theBook.year}
          </p>
          <p>
            Lo trajo <a href="/user/1">{theBook.owner}</a>
          </p>
          <p>{theBook.abstract}</p>
          <p>
            Este libro está disponible, <a href="#">llevátelo!</a>
          </p>
          <p>
            <a href="/user/1">{theBook.reviews[0].author}</a> le dio{" "}
            {theBook.reviews[0].stars} estrellas y dijo:
            <span className="reviewText">{theBook.reviews[0].text}</span>
          </p>
          <p>
            <a href="/user/1">{theBook.reviews[1].author}</a> le dio{" "}
            {theBook.reviews[1].stars} estrella y dijo:
            <span className="reviewText">{theBook.reviews[1].text}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
