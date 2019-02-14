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

    return (
      <div className="raffle-ticket">
        <div className="row">
          <div className="col-4">
            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" className="form-control -user-fill" />
              </div>
              <div className="form-group">
                <label>Telf.:</label>
                <input type="text" className="form-control -user-fill" />
              </div>
            </form>
          </div>
          <div className="col-8">
            <h1>Sorteo</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <footer>
              <div>{price}€</div>
              <div>{formatNumber(number)}</div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default RaffleTicket;
