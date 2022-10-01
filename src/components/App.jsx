// export const App = () => {
//   return;
// };
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeValue = option => {
    // console.log(option);
    this.setState({ [option]: this.state[option] + 1 });
  };

  countTotalFeedback = () => {
    const totalArr = Object.values(this.state);
    return totalArr.reduce((acc, el) => acc + el, 0);
  };

  render() {
    return (
      <>
        <p>Please leave feeback</p>
        {Object.keys(this.state).map(el => (
          <button
            type="button"
            key={el}
            option={el}
            onClick={() => this.handleChangeValue(el)}
          >
            {el}
          </button>
        ))}
        <p>Statistics</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
        </ul>
      </>
    );
  }
}

export default Feedback;
