import React from "react";
import Header from "./Header";
import { verifyLogin, fetchBook } from "../fetchFunctions";



class UserSignup extends React.Component {
  state: {
  };

  componentDidMount() {
    // Verify if the user has logged in before
    const user = verifyLogin();
    if (user) {
      // If it has, store the information in state
      this.setState({ user }, function() {
        fetchBook(this.state.user.token, this.props.match.params.id)
          .then(res => res.json())
          .then(book => this.setState({ book }));
      });

      // this.setState({ user }, function() {
      //   // Fetch the rest of the user information
      //   fetchActiveUser(this.state.user.token)
      //     .then(res => res.json())
      //     .then(activeUser => this.setState({ activeUser }, function() {}));
      //   // Load the available books
      //   fetchBooks(this.state.user.token, "true")
      //     .then(res => res.json())
      //     .then(availableBooks => this.setState({ availableBooks }));
      // });
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
              withGreeting={true}
              username={this.state.user.username}
            />
          )}
          <div className="content">
            {this.state && !this.state.book && (
              <p>
                <img className="loader" src="/images/loader.gif" />
              </p>
            )}
            {this.state && this.state.book && (
              <>
                <p>
                  {this.state.book.titulo} - {this.state.book.autor} -{" "}
                  {this.state.book.ano}
                  {this.state &&
                    this.state.user &&
                    this.state.book &&
                    this.state.book.usr_dueno != this.state.user.user_id && (
                      <span className="newLine">
                        Lo trajo{" "}
                        <UserName
                          id={this.state.book.usr_dueno}
                          name={this.state.book.usr_dueno_nombre}
                          navigation={this.props.history}
                        />
                      </span>
                    )}
                </p>

                <p>{this.state.book.resumen}</p>
                {this.state &&
                  this.state.book &&
                  !this.state.book.alquilerActivo &&
                  this.state.book.usr_dueno != this.state.user.user_id && (
                    <p>
                      Este libro está disponible, <a href="#">¡llevátelo!</a>
                    </p>
                  )}
                {this.state &&
                  this.state.book &&
                  this.state.book.alquilerActivo && (
                    <p>
                      Este libro no está disponible, lo tiene{" "}
                      <UserName
                        id={this.state.book.alquilerActivo.id_usuario}
                        name={this.state.book.alquilerActivo.nombre}
                        navigation={this.props.history}
                      />
                      .
                      {this.state &&
                        this.state.user &&
                        this.state.book &&
                        this.state.book.usr_dueno ==
                          this.state.user.user_id && (
                          <span className="newLine">
                            <a href="#">Quiero que me lo devuelva.</a>
                          </span>
                        )}
                    </p>
                  )}

                {this.state &&
                  this.state.book &&
                  !this.state.book.alquilerActivo &&
                  this.state.book.usr_dueno == this.state.user.user_id && (
                    <p>
                      Este libro está disponible.
                      <span className="newLine">
                        <a href="#">Quiero sacarlo de libroclub.</a>
                      </span>
                    </p>
                  )}

                <ul className="libros">
                  {this.state.book.reviews.map(obj => {
                    return (
                      <li key={obj.id}>
                        <p>
                          <UserName
                            id={obj.id_usuario}
                            name={obj.nombre}
                            navigation={this.props.history}
                          />{" "}
                          le dio {obj.estrellas} estrellas y dijo:
                          <span className="newLine">"{obj.texto}"</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserSignup;
