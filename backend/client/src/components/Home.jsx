function Home() {


  return (
    <main className="h-screen bg-blue-50 flex justify-center items-center flex-col gap-2">
      <h3 className="font-semibold text-2xl uppercase">Create User</h3>
      <form className="w-1/3 rounded-md shadow-md shadow-blue-300 px-6 py-10 flex flex-col gap-3 bg-white">
        <div className="flex flex-col gap-1">
          <label htmlFor="names">Names:</label>
          <input className="outline-none p-2 rounded-md border border-blue-300" required type="text" id="names" placeholder="Enter user's names" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input className="outline-none p-2 rounded-md border border-blue-300" required type="text" id="username" placeholder="Enter username" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <input className="outline-none p-2 rounded-md border border-blue-300" required type="password" id="password" placeholder="Enter password" />
        </div>
        <div>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white" type="submit">Add User</button>
        </div>
      </form>
    </main>
  );
}

export default Home;
