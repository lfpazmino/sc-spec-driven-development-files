import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import "../../styles/layout.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
