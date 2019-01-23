import React from "react";

class Background extends React.Component {
  constructor() {
    super();
    this.state = { selectedBook: {} };
  }

  componentDidMount() {
    fetch(
      "http://www.federicodonner.com/clublibros_api/public/api/usuarios"
    ).then(results => {
      console.log(results);
    });
  }

  render() {
    return <div>Hola</div>;
  }
}

export default Background;
