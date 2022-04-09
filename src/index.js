"use strict";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render = () => (
        <div id="main-container">
            <div id="view-main">
                <p>Hi</p>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
