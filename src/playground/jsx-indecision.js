// 'ternary' operator
// 'logical and' operator

const app = {
  title: "Indecision App",
  subtitle: "Making decisions is hard.",
  options: [],
};

const onSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onClearAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomIdx = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomIdx];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h3>{app.title}</h3>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
      {app.options.length > 0 && (
        <div>
          <button onClick={onMakeDecision}>Decide</button>
          <button onClick={onClearAll}>Clear options</button>
        </div>
      )}
      <ol>
        {app.options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
