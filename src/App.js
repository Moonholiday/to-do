class App extends Component {
  state = {
    todos: [
      { text: "Learn about React" },
      { text: "Meet friend for lunch" },
    ]
  }
  
  setTodo = todos => this.setState({ todos });

  render() {
    return <div></div>
  }
}
