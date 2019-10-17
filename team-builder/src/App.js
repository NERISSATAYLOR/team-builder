import React, { useState } from 'react';
import Form from './Form';
import './App.css';
import Member from './Member';

function App() {
  const [members, setMembers] = useState([{
    name: 'James Stevens', email: 'jamesstevens@gmail.com', role: 'Back end'
  }, { name: 'Jessica Parker', email: 'jessicaparker@aol.com', role: 'UX Design' }])

  const addNewMember = member => {
    setMembers([...members, member])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Member List</h1>
        <Form addNewMember={addNewMember} />
        <Member membersList={members} />




      </header>
    </div>
  );
}

export default App;
