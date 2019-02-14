import React, { Component } from 'react';
import RaffleForm from './RaffleForm';
import RaffleTicket from './RaffleTicket';

import './App.css';

class App extends Component {

  state = {
    numberOfTickets: 1
  }

  onRaffleFormChange = (values) => {
    console.log(values);
    // this.setState({
    //   numberOfTickets
    // });
  }

  render() {
    const { numberOfTickets } = this.state;
    const tickets = new Array(numberOfTickets).fill(0);

    return (
      <div className="App">
        <div>
          <RaffleForm onChange={this.onRaffleFormChange} />
        </div>
        <div>
          {tickets.map((t, i) => <RaffleTicket number={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
