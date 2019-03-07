import React from "react";
import Header from "./Header";
import BookName from "./BookName";
import { verifyLogin, fetchActiveUser } from "../fetchFunctions";
import { convertDate } from "../dataFunctions";

class Me extends React.Component {
  state: {
    user: {},
    activeUser: {}
  };

  addBook = () => event => {
    this.props.history.push({ pathname: "/addbook" });
  };

  goToReturn = event => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/return/" + this.state.activeUser.alquilerActivo.id_libro
    });
  };

  componentDidMount() {
    const user = verifyLogin();
    if (user) {
      this.setState({ user }, function() {
        fetchActiveUser(this.state.user.token)
          .then(res => res.json())
          .then(activeUser => this.setState({ activeUser }));
      });
    }
  }
  render() {
    return (
      <div className="app-view cover">
        <div className="scrollable">
          {this.state && this.state.user && (
            <Header withGreeting={true} username={this.state.user.username} />
          )}
          <div className="content">
            {this.state && !this.state.activeUser && (
              <p>
                <img className="loader" src="/images/loader.gif" />
              </p>
            )}
            {this.state && this.state.activeUser && (
              <>
                <p>
                  En esta sección podés administrar tus libros y ver tu
                  historial de alquileres.
                </p>
                <img className="separador" src="/images/separador.png" />
                {this.state &&
                  this.state.activeUser &&
                  this.state.activeUser.alquilerActivo && (
                    <>
                      <p className="titulo">Alquiler activo:</p>
                      <p>
                        Tenés{" "}
                        <BookName
                          id={this.state.activeUser.alquilerActivo.id_libro}
                          name={
                            this.state.activeUser.alquilerActivo.nombre_libro
                          }
                          navigation={this.props.history}
                        />{" "}
                        desde{" "}
                        {convertDate(
                          this.state.activeUser.alquilerActivo.fecha_salida
                        )}
                        . Si ya lo terminaste,{" "}
                        <a onClick={this.goToReturn}>devolvelo</a>.
                      </p>
                      <img className="separador" src="/images/separador.png" />
                    </>
                  )}
                {this.state &&
                  this.state.activeUser &&
                  this.state.activeUser.libros.length > 0 && (
                    <>
                      <p className="titulo">Tus libros:</p>
                      <ul className="libros">
                        {this.state.activeUser.libros.map(obj => {
                          return (
                            <li key={obj.id}>
                              <BookName
                                id={obj.id}
                                name={obj.titulo}
                                navigation={this.props.history}
                              />{" "}
                              - {obj.autor}
                              {obj.activo == 1 && (
                                <span className="newLine">
                                  <a>Sacarlo de Libroclub</a>
                                </span>
                              )}
                              {obj.activo != 1 && (
                                <>
                                  <span className="newLine">
                                    Este libro no está disponible.{" "}
                                  </span>
                                  <span className="newLine">
                                    <a>Volver a traerlo</a>
                                  </span>
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                <img className="separador" src="/images/separador.png" />
                <p>
                  <a onClick={this.addBook()}>Agregar un libro nuevo</a>
                </p>

                {this.state &&
                  this.state.activeUser &&
                  this.state.activeUser.alquileres.length > 0 && (
                    <>
                      <img className="separador" src="/images/separador.png" />
                      <p className="titulo">Historial de alquileres:</p>
                      <ul className="libros">
                        {this.state.activeUser.alquileres.map(obj => {
                          return (
                            <li key={obj.id}>
                              <p>
                                <BookName
                                  id={obj.id_libro}
                                  name={obj.nombre_libro}
                                  navigation={this.props.history}
                                />{" "}
                                - {obj.autor_libro}
                                <span className="rentalDates">
                                  Del {convertDate(obj.fecha_salida)} al{" "}
                                  {convertDate(obj.fecha_devolucion)}
                                </span>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
