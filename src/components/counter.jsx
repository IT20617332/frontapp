import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/100",
  //   tags: [],
  // };

  style = {
    fontSize: 40,
    fontWeight: "bold",
  };

  // handleIncrement = (e) => {
  //   // console.log("Incremented", this);
  //   console.log(e);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    //let classes = this.getBadgeClasses();

    //console.log("props", this.props);

    //console.log(this.props);

    return (
      <div>
        <h4>{this.props.id}</h4>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
          //onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {/* <div>
          {this.state.tags.length === 0 && "please create tags"}
          {this.renderTags()}
        </div> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { count } = this.state;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
