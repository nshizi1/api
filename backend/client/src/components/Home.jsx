import  { useState } from "react";
import axios from 'axios'; 

function Home() {
  const [names, setNamesValue] = useState('');
  const handleNamesChange = (event) => {
    setNamesValue(event.target.value);
  }

  const [username, setUsernameValue] = useState('');
  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  }

  const [password, setPasswordValue] = useState('');
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('/api/addUser', { names, username, password});
      console.log(response.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <main className="h-screen bg-blue-50 flex justify-center items-center flex-col gap-2">
      <h3 className="font-semibold text-2xl uppercase">Create User</h3>
      <form className="w-1/3 rounded-md shadow-md shadow-blue-300 px-6 py-10 flex flex-col gap-3 bg-white" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Names:</label>
          <input className="outline-none p-2 rounded-md border border-blue-300" required value={names} onChange={handleNamesChange} type="text" placeholder="Enter user's names" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Username:</label>
          <input className="outline-none p-2 rounded-md border border-blue-300" required value={username} onChange={handleUsernameChange} type="text" placeholder="Enter username" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Password:</label>
          <input className="outline-none p-2 rounded-md border border-blue-300" required value={password} onChange={handlePasswordChange} type="password" placeholder="Enter password" />
        </div>
        <div>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white" type="submit">Add User</button>
        </div>
      </form>
    </main>
  )
}

export default Home;
