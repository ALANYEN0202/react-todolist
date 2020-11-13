import React from "react";

class Test extends React.Component {
  componentDidMount() {
    console.log("test mount");
  }
  componentWillUnmount() {
    console.log("test unmount");
  }
  render() {
    return <div>123</div>;
  }
}

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("did mount", this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    console.log("update!");
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log("render!");
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>+1</button>
        counter: {counter}
        {counter === 1 && <Test />}
      </div>
    );
  }
}
