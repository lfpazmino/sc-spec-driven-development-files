export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">AgentClinic</h1>
        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="/agents">Agents</a>
          <a href="/therapies">Therapies</a>
          <a href="/bookings">Bookings</a>
        </nav>
      </div>
    </header>
  );
};
