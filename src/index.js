import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Button = props => (
  <button
    style={{ color: props.color, backgroundColor: props.bgColor }}
    onClick={props.onClick}
  >
    Click Me!
  </button>
);

class AlertOnClick extends React.Component {
  onClick = () => alert("Hello, world!");

  render() {
    const color = "green";
    const Render = this.props.render;
    return <Render color={color} {...this.props} onClick={this.onClick} />;
  }
}

function App() {
  return (
    <div className="App">
      <h1>React Render Props Examples</h1>
      <ul>
        <li>
          Example 1: Cleanest Example?
          <AlertOnClick bgColor="black" render={Button} />
        </li>
        <li>
          Example 2: You can also pass a functional component like this.
          <AlertOnClick
            bgColor="yellow"
            render={props => (
              <button
                style={{ color: props.color, backgroundColor: props.bgColor }}
                onClick={() => alert("Hello, world!")}
              >
                Click Me!
              </button>
            )}
          />
        </li>
        <li>
          Example 3: You can pass anything.
          <AlertOnClick
            bgColor="yellow"
            render={({ onClick }) => <a onClick={onClick}>Link button</a>}
          />
        </li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
