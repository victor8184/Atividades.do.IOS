import { Component } from "react";

const css = {
    backgroundColor: "black",
    color: 'white',
    fontSize: "15px",
  };

export class Header extends Component {

  render() {
    return (
      <div>
        <section style={css}>
          <h1>Olá, seja bem-vindo!!!</h1>
          <p>Vou falar um pouco sobre o espaço.</p>
        </section>
      </div>
    );
  }
}

export default Header;