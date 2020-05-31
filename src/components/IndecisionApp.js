import React from 'react';
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: null
  };

  handleClearOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((opt) => opt !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    this.setState( () => ({ selectedOption: pick }))
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: null }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const appTitle = "Indecision";
    const subtitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header title={appTitle} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleClearOptions={this.handleClearOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;
