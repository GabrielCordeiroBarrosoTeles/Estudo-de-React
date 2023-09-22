import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function RotaA() {
  return <div>Rota A</div>;
}

function RotaB() {
  return <div>Rota B</div>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/rota-a">Rota A</Link>
          </li>
          <li>
            <Link to="/rota-b">Rota B</Link>
          </li>
        </ul>
      </nav>
      <Route path="/rota-a" component={RotaA} />
      <Route path="/rota-b" component={RotaB} />
    </Router>
  );
}
