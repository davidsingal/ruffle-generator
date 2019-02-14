import React, { PureComponent } from 'react';

import './style.css';

function formatNumber(num, size = 4) {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

class RaffleTicket extends PureComponent {
  static defaultProps = {
    title: 'Viaje de fin de curso',
    description: 'Lorem ipsum',
    price: 1,
    number: 1
  }

  render() {
    const { title, description, price, number } = this.props;

    const RuffleNumber = () => (
      <span className="number text-primary">{formatNumber(number)}</span>
    );

    return (
      <div className="raffle-ticket">
        <div className="row">
          <div className="col-3">
            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" className="form-control -user-fill" />
              </div>
              <div className="form-group">
                <label>Telf.:</label>
                <input type="text" className="form-control -user-fill" />
              </div>
              <RuffleNumber />
            </form>
          </div>
          <div className="col-1">
            <div className="separator" />
          </div>
          <div className="col-8">
            <div className="content">
              <h1>Sorteo</h1>
              <h2>{title}</h2>
              <p className="description">{description}</p>
            </div>
            <footer className="row">
              <div className="col">
                <span className="price">{price}€</span>
              </div>
              <div className="col text-right">
                <RuffleNumber />
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default RaffleTicket;
