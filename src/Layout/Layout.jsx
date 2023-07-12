import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="h-fit">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
