import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [points, setPoints] = useState(0);

  const [employeeList, setEmployeeList]=useState([]);

  const writestuff = () =>{
    console.log(name,age,country,points);
  };
  const addEmployee = () =>{
    Axios.post('https://employee-manager-nrtan.herokuapp.com/create', {
      name:name,
      age: age,
      country: country,
      points: points,
    }).then(()=>console.log("succes"))
  };
  const getEmployees = () =>{
    Axios.get('https://employee-manager-nrtan.herokuapp.com/employees').then((response)=>{
    setEmployeeList(response.data);
  });
  };
  return (
    <>
      <label>Name:</label>
      <input type="text" onChange={(event)=>{setName(event.target.value);}}/>
      <label>Age:</label>
      <input type="number" onChange={(event)=>{setAge(event.target.value);}}/>
      <label>Country:</label>
      <input type="text" onChange={(event)=>{setCountry(event.target.value);}}/>
      <label>Points:</label>
      <input type="number" onChange={(event)=>{setPoints(event.target.value);}}/>
      <button onClick={writestuff}>Write in console</button>
      <button onClick={addEmployee}>Add employee to database</button>
      <button onClick={getEmployees}>View all employees in database</button>
      <div>
        {employeeList.map((val, key)=>{
          return<div>{val.name}</div>
        })}
      </div>
    </>
  );
}

export default App;
