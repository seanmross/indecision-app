
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClearOptions = this.handleClearOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleClearOptions() {
        this.setState( () => ({ options: [] }));
    }

    handleDeleteOption(option) {
        console.log(option);
        this.setState((prevState) => ({
            options: prevState.options.filter( opt => opt !== option)
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() *  this.state.options.length);
        const pick = this.state.options[randomNum];
        alert(pick);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        }

        this.setState((prevState) => ({
          options: prevState.options.concat(option),
        }));
    }
    
    render() {
        const appTitle = 'Indecision';
        const subtitle = "Put your life in the hands of a computer.";

        return (
          <div>
            <Header title={appTitle} subtitle={subtitle} />
            <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} 
            />
            <Options
                options={this.state.options}
                handleClearOptions={this.handleClearOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
          </div>
        );
    }
}

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h3>{props.subtitle}</h3>
  </div>
);

const Action = (props) => (
    <div>
        <button
            disabled={!props.hasOptions} 
            onClick={props.handlePick}
        >
            What should I do?
        </button>
    </div>
)

const Options = (props) => (
    <div>
        <button onClick={props.handleClearOptions}>Clear Options</button>
        {props.options.map( (option, i) => {
            return (
              <Option
                key={i}
                text={option}
                handleDeleteOption={props.handleDeleteOption}
              />
            );
        })}
    </div>
);

const Option = (props) => (
    <div>
        {props.text}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.text);
            }}
        >
            Remove
        </button>
    </div>
);

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: null
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                {this.state.error && <p>{this.state.error}</p>}
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
