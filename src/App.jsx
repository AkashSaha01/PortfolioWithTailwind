function App() {
  return (
    <>
      <header>
        <div className="w-screen flex justify-between items-center p-4">
          <div>
            <h1 className="text-xl font-bold pl-6 text-blue-800">Portfolio</h1>
          </div>

          <nav>
            <ul className="flex gap-4 list-none">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Resume
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Hire me
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
