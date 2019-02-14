import React, { PureComponent } from 'react';
import { Form, Text } from 'informed';

class RaffleForm extends PureComponent {
  static defaultProps = {
    onChange: () => null
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { onChange } = this.props;

    return (
      <Form>
        <div>
          <label>
            Title
          </label>
          <Text type="text" field="title" placeholder="End of course trip" />
        </div>
        <div>
          <label>
            Description
          </label>
          <textarea placeholder="Lorem ipsum" />
        </div>
        <div>
          <label>
            Price
          </label>
          <Text type="number" placeholder="1" field="price" />
        </div>
        <div>
          <label htmlFor="numberOfTickets">
            Number of tickets
          </label>
          <Text type="number" min="1" field="numberOfTickets" id="numberOfTickets" placeholder="1" />
        </div>
      </Form>
    );
  }
}

export default RaffleForm;
