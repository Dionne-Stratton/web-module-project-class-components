import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const stuffToDo = [
  {
    task: "Sleep",
    id: 1,
    completed: false,
  },
  {
    task: "Read",
    id: 12,
    done: false,
  },
  {
    task: "Shower",
    id: 13,
    done: false,
  },
  {
    task: "Run",
    id: 15,
    done: false,
  },
  {
    task: "Yoga",
    id: 2,
    done: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stuffToDo: stuffToDo,
      anotherStateProp: "",
    };
  }

  toggleItem = (id) => {
    this.setState({
      stuffToDo: this.state.stuffToDo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearDone = () => {
    this.setState({
      stuffToDo: this.state.stuffToDo.filter((item) => !item.done),
    });
  };

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      done: false,
    };
    this.setState({
      stuffToDo: [...this.state.stuffToDo, newItem],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to Your Ultimate To Do List!</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          clearDone={this.clearDone}
          stuffToDo={this.state.stuffToDo}
        />
      </div>
    );
  }
}

export default App;