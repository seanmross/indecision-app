
class App extends React.Component {
    render() {
        const appTitle = 'Indecision';
        const subtitle = "Put your life in the hands of a computer.";
        const options = ['opt 1' , 'opt 2', 'opt 3'];

        return (
            <div>
                <Header title={appTitle} />
                <Action subtitle={subtitle}/>
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handleClick() {
        alert('Decide')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        // this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options)
    }

    render() {
        return (
          <div>
            <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
            {
                this.props.options.map( (option, i) => <Option key={i} text={option} />)
            }
          </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.text}</div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));
