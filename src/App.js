import React, { Component } from "react";
import Feed from "./components/Feed";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: "Gefferson", curtidas: 100, comentarios: 3 },
        { id: 2, username: "Gerson", curtidas: 90, comentarios: 80 },
        { id: 3, username: "Emile", curtidas: 400, comentarios: 60 },
        { id: 3, username: "Gabriela", curtidas: 90, comentarios: 20 },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              id={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
