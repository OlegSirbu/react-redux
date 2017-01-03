import React from 'react';
import CardElement from './CardElement.jsx';

const styles = {
  position: 'absolute',
  top: '170px'
};

export default class CardHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var listCardsElements = this.props.flights.map((elem, i) => {
      return (
        <CardElement key={i} info={elem}/>
      );
    });
    return (
      <div style={styles}>
        {listCardsElements}
      </div>
    );
  }
}
