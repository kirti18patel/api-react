import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const url = "https://api.hatchways.io/assessment/students";

  const [student, setStudent] = useState(null);

 const func = () =>{
    const response = fetch(url).then(response.json());
    const newdata = data.students;
    return newdata;
 }

 const fdata = func();

 console.log(fdata);

  return (
    <>
    <h1>hii</h1>
    {
      fdata.map((data, i) => {
        <h1>hello{i}</h1>
      })
    }
    </>
  );
}

export default App;
