interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="main">
      <div className="main-content">{children}</div>
    </main>
  );
};
