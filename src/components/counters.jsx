import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = this.props;
  // }
  // **** use constuctor lifecycle when state is to be initialised from props

  componentDidMount() {
    //Make AJAX call maybe
  }
  componentDidUpdate(oldProps, prevState) {
    console.log(oldProps, prevState);
    //optimistaion technique , check prev data and perform new tasks
  }
  componentWillUnmount() {
    //clear data - avoid memory leaks
  }

  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;
    //Object Destructuring - Instead of this.props.onReset, we can now use onReset directly
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          >
            <p> Counter #{counter.id}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
