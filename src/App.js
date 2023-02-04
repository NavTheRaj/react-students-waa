import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './containers/DashBoard/Dashboard';
import SelectStudentContext from './context/SelectStudentContext';

function App() {

  const [selectedStudents, setSelectedStudents] = useState([])

  return (
    <SelectStudentContext.Provider
      value={{ selectedStudents, setSelectedStudents }}
    >
      <div className="App">
        <BrowserRouter>
          <h1> WAA 2nd Exam </h1>
          <Dashboard />
        </BrowserRouter>
      </div>
    </SelectStudentContext.Provider>
  );
}

export default App;
