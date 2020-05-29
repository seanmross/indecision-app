
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visible: false
    }
  }
  
  handleToggle() {
    this.setState( (prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }
  
  render() {
    const msg = 'this is some random text';

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && <p>{msg}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app-root"));
