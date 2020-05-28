
const msg = 'This is some random text';
let visible = false;

const toggle = () => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}>{visible ? "Hide Details" : "Show Details"}</button>
        {visible && <p>{msg}</p>}
      </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
}

render();
