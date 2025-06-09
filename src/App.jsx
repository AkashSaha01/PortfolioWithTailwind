function App() {
  return (
    <>
      <header>
        <div className="w-[90%] mx-auto flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl font-bold font-roboto pl-6 text-blue-800">
              Portfolio
            </h1>
          </div>

          <nav className="py-2">
            <ul className="flex gap-6 list-none">
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
            <button className="px-4 py-2 bg-white text-black rounded border border-gray-300">
              Resume
            </button>

            <button className="px-4 py-2 bg-white text-black rounded border border-gray-300">
              Hire me
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
