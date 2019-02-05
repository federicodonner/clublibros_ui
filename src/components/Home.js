import React from "react";
import Header from "./Header";
import BookName from "./BookName";
import UserName from "./UserName";
import { verifyLogin, fetchActiveUser, fetchBooks } from "../fetchFunctions";
import { convertDate } from "../dataFunctions";

class Home extends React.Component {
  state: {
    user: {},
    activeUser: {},
    availableBooks: {}
  };

  goToDetails = event => {
    event.preventDefault();

    this.props.history.push(`/me`);
  };

  componentDidMount() {
    // Verify if the user has logged in before
    const user = verifyLogin();
    if (user) {
      // If it has, store the information in state
      this.setState({ user }, function() {
        // Fetch the rest of the user information
        fetchActiveUser(this.state.user.token)
          .then(res => res.json())
          .then(activeUser => this.setState({ activeUser }, function() {}));
        // Load the available books
        fetchBooks(this.state.user.token, "true")
          .then(res => res.json())
          .then(availableBooks => this.setState({ availableBooks }));
      });
    } else {
      // If there is no data in localStorage, go back to user select screen
      // this.props.history.push(`/userselect`);
      this.props.history.push({
        pathname: "/userselect"
        //state: { prueba: "hoooola" }
      });
    }
  }

  render() {
    return (
      <div className="app-view cover">
        <div className="scrollable">
          {this.state && this.state.user && (
            <Header
              logoType="blackLogo"
              withGradient={true}
              withGreeting={true}
              username={this.state.user.username}
            />
          )}
          <div className="content">
            {this.state && !this.state.activeUser && (
              <p>
                <img className="loader" src="/images/loader.gif" />
              </p>
            )}

            {this.state &&
              this.state.activeUser &&
              !this.state.activeUser.alquilerActivo && (
                <p>
                  No tenés ningún libro alquilado.
                  <span className="newLine">
                    Estos están disponibles para que te lleves:
                  </span>
                </p>
              )}

            {this.state &&
              this.state.activeUser &&
              this.state.activeUser.alquilerActivo && (
                <>
                  <p>
                    Tenes{" "}
                    <BookName
                      id={this.state.activeUser.alquilerActivo.id_libro}
                      name={this.state.activeUser.alquilerActivo.nombreLibro}
                      navigation={this.props.history}
                    />{" "}
                    desde el{" "}
                    {convertDate(
                      this.state.activeUser.alquilerActivo.fecha_salida
                    )}
                    .
                    <span className="newLine">
                      Si ya lo devolviste, <a href="#">finaliza el alquiler</a>.
                    </span>
                  </p>
                  <p>
                    Estos son los libros que podés disfrutar cuando termines{" "}
                    <BookName
                      id={this.state.activeUser.alquilerActivo.id_libro}
                      name={this.state.activeUser.alquilerActivo.nombreLibro}
                      navigation={this.props.history}
                    />
                    :
                  </p>
                </>
              )}

            {this.state && this.state.availableBooks && (
              <ul className="libros">
                {this.state.availableBooks.map(obj => {
                  return (
                    <li key={obj.id}>
                      <BookName
                        id={obj.id}
                        name={obj.titulo}
                        navigation={this.props.history}
                      />{" "}
                      - {obj.autor}
                    </li>
                  );
                })}
              </ul>
            )}

            {/*Usuario:
              <UserName
                name={"Daniel Marotta"}
                id={5}
                navigation={this.props.history}
              />
              */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
