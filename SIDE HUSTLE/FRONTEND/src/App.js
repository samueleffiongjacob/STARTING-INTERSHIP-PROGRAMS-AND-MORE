import "./App.css";

import Card from "./component/Card";

//displaying json
function App() {
  const sam = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((res) => res.json());
    console.log(res);
  };
  sam();

  const sa = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    console.log(res);
  };
  sa();
  return (
    <div className="App">
      <h1>LET SEE SOME BICOIN</h1>

      <Card />
    </div>
  );
}

export default App;
