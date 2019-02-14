import React, { Component } from 'react';
import RaffleForm from './RaffleForm';
import RaffleTicket from './RaffleTicket';

import './App.css';

class App extends Component {

  state = {
    title: 'Viaje de fin de curso',
    description: '',
    price: 1,
    numberOfTickets: 1
  }

  onRaffleFormChange = (values = {}) => {
    const { title, description, numberOfTickets, price } = values;
    this.setState({ title, description, numberOfTickets, price });
  }

  render() {
    const { numberOfTickets } = this.state;
    const tickets = new Array(numberOfTickets).fill(0);

    return (
      <div className="app">
        <div className="form-region">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Generador de rifas</h1>
                <RaffleForm defaultValues={this.state} onChange={this.onRaffleFormChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="result-region">
          <div className="container-fluid">
            <div className="row">
              {tickets.map((t, i) => (
                <div className="col-6" key={`ticket${i}`}>
                  <RaffleTicket {...this.state} number={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
