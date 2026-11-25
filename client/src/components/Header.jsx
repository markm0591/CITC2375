export default function Header() {
  return (
    <header>
      <div className="content-width header-inner">
        <p className="site-name">
          <a href="/">NFL QB Tracker</a>
        </p>
        <nav>
          <a href="/">Home</a>
          <a href="/about.html">About</a>
          <a href="/add.html">Add</a>
        </nav>
      </div>
    </header>
  );
}
