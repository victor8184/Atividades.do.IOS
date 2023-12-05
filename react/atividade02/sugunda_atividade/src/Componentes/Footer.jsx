import { Component } from "react";

const estilo = {
    backgroundColor: "silver",
    fontSize: "15px",
  };

export class Footer extends Component {
  render() {
    return (
      <div>
        <p style={estilo}>Todos os direitos reservados a ©Lucas Gabriel</p>
      </div>
    );
  }
}

export default Footer;