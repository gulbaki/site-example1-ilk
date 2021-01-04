import Nagivation from "./nagivation";

function Layout({ children }) {
  return (
    <div>
      <Nagivation />

      <main>{children}</main>

      <footer>Design by baki</footer>
    </div>
  );
}

export default Layout;
