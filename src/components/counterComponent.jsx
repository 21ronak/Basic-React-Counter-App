import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags1: [],
  //   tags: ["tag1", "tag2", "tag3", "tag4"]
  // };
  // *** Removing local state, becomes contained object.

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // **** use arrow function to avoid using constructor

  // stylesEx = {
  //   fontSize: 14,
  //   fontWeight: "bold"
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <React.Fragment>
        {/* For passing JSX from parent to child */}
        {this.props.children}
        <span style={{ fontSize: 14 }} className={this.getClassNames()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/* <p>{this.state.tags.length === 0 && "Please add new tags!"}</p>
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getClassNames() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
