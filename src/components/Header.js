import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: () => {
      dispatch(startLogout())
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header);


const regex = /^(32)$/; // expresion regular para ver si algo empieza con el numero 32
const elDni = 32264789; // una variable que empieza con 32
regex.test(elDni); // esto devuelve true si lo que le pasas respeta la condicion de la expresion regular (en este caso devuelve true)

if (regex.test(elDni)) {
  console.log('el dni empieza con 32!');
}
else {
  console.log('el dni NO empieza con 32...')
}