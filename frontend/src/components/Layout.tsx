import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
