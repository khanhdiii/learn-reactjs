import logo from './logo.svg';
import './App.css';

function App() {
  const name  = "khanh";
  const age = 22;
  const isMale = true;
  const employee = {
    name : "khanh duy"
  };
  const colorList = ["Green", "Red", "Blue"];
  return (
    <div className="App">
     <p>Xin chao {name}</p>
     <p>Nam nay khanh {age} tuoi</p>

     {isMale ? <p>Male</p> : <p>Female</p>}
     {isMale && <p>Male</p>}
     {!isMale && <p>Female</p>}


    {isMale && (
      <div>
        <p>Male 1</p>
        <p>Male 2</p>
        <p>Male 3</p>
      </div>
    )}

    {isMale && (
      <>
        <p>Male 4</p>
        <p>Male 5</p>
        <p>Male 6</p>
      </>
    )}

    <p>La nhan vien {employee.name}</p>

      <ul>
        {colorList.map(color =>
        <li style={{color}}>{color}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
