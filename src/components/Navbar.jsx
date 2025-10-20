import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1">
      <div className="container">
        <img
          src="/lol.png"
          className=" rounded-2"
          width={45}
          height={35}
          alt=""
        />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
          Bako`s e n t
        </a>
        <button
          className="navbar-toggler shadow-none bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about" className="nav-link fw-bold">
                About 
              </a>
            </li>
              <ul className="navbar-nav"></ul>
            <li className="nav-item">
              <a href="/tutorials" className="nav-link fw-bold">
              Tutorials

              </a>
            </li>
              <ul className="navbar-nav"></ul>
            <li className="nav-item">
              <a href="/project" className="nav-link fw-bold">
               Project
              </a>
            </li>
  <ul className="navbar-nav"></ul>
            <li className="nav-item">
              <a href="/contact" className="nav-link fw-bold">
                Contact
              </a>
            </li>
              <ul className="navbar-nav"></ul>
            <li className="nav-item">
              <a href="/home" className="nav-link fw-bold">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
