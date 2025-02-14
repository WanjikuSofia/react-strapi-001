const Header = () => {
    return (
      <header style={{ padding: "20px", background: "#222", color: "#fff", textAlign: "center" }}>
        <h1>My Website</h1>
        <nav>
          <a href="/" style={{ margin: "0 15px", color: "#fff" }}>Home</a>
          <a href="/about" style={{ margin: "0 15px", color: "#fff" }}>About</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  