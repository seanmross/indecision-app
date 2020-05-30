import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleClearOptions}>Clear Options</button>
    {props.options.length === 0 && <p>Add an option to get started!</p>}
    {props.options.map((option, i) => {
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

export default Options;
