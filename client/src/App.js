import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    const json = await fetch('http://localhost:1337/api/properties?populate=*');
    const data = await json.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [data])

  return (
    <div className="App">
      {console.log(data)};
    </div>
  );
}

export default App;
