import React from "react";
import Header from "./Header";
import { fetchUsers, loginUser } from "../fetchFunctions";

class UserSelect extends React.Component {
  state = {
    usuarios: []
  };

  loginUser = user => event => {
    // Frena la navegación automática cuando se submitea el form
    event.preventDefault();
    // Así se obtiene le contenido del input
    // const storeName = this.myInput.current.value;
    // // Push es una función de Router que permite cambiar de estado
    // // Como este componente es hijo de Router, hereda los métodos
    // // OJO QUE NO SON COMILLAS, SON TILDES INVERTIDOS
    //this.props.history.push(`/user/${id}`);
    loginUser(user)
      .then(res => res.json())
      .then(response => {
        localStorage.setItem("libroclub_token", response.token);
        localStorage.setItem("libroclub_username", user.nombre);
        localStorage.setItem("libroclub_id", user.id);
        this.props.history.push(`/`);
      })
      .catch(error => console.error("Error:", error));
  };

  componentDidMount() {
    fetchUsers("1")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ usuarios: data.usuarios });
      });
  }

  render() {
    return (
      <div className="app-view cover">
        <div className="scrollable">
          <Header
            logoType="blackLogo"
            withGradient={true}
            withGreeting={false}
          />
          <div className="content">
            <p>¡Bienvenid@ a Libroclub!</p>
            <p>
              No estás logueado en libroclub. Por favor seleccioná quién sos:
            </p>
            <ul className="usuarios">
              {this.state.usuarios.map(obj => {
                return (
                  <li key={obj.id}>
                    <a href="#" onClick={this.loginUser(obj)}>
                      {obj.nombre}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="marginTop">
              ¡Hey, <a>no estoy en la lista</a>!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSelect;
