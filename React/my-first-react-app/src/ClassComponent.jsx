import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      editingId: null,
      editingText: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }
  handleDelete(id) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  }

  handleEdit(id, text) {
    this.setState({
      editingId: id,
      editingText: text,
    });
  }

  handleEditChange(e) {
    this.setState({ editingText: e.target.value });
  }

  handleEditSubmit(id) {
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: state.editingText } : todo
      ),
      editingId: null,
      editingText: "",
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.todos.length}</p>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              {this.state.editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={this.state.editingText}
                    onChange={this.handleEditChange}
                  />
                  <button onClick={() => this.handleEditSubmit(todo.id)}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button onClick={() => this.handleEdit(todo.id, todo.text)}>
                    Edit
                  </button>
                  <button onClick={() => this.handleDelete(todo.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
