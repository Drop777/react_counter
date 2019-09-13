import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { increment } = this;
    return (
      <div>
        <button onClick={increment}>Click to Add!</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default App;
