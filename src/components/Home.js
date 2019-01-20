import React from "react";
import Header from "./Header";
import BookName from "./BookName";
import UserName from "./UserName";

class Home extends React.Component {
  goToDetails = event => {
    event.preventDefault();

    this.props.history.push(`/me`);
  };

  render() {
    return (
      <div className="app-view cover">
        <div className="scrollable">
          <Header
            logoType="blackLogo"
            withGradient={true}
            withGreeting={true}
          />
          <div className="content">
            <p>
              <a href="#" onClick={this.goToDetails}>
                Mis datos
              </a>
            </p>
            <p>
              Libro:
              <BookName name={"Drive"} id={2} navigation={this.props.history} />
            </p>
            <p>
              Otro libro:
              <BookName name={"algo"} id={3} navigation={this.props.history} />
            </p>
            <p>
              Usuario:
              <UserName
                name={"Daniel Marotta"}
                id={5}
                navigation={this.props.history}
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
