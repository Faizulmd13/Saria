import { Outlet } from "react-router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css"

function App() {
  return(
    <div className="app-container">
      <Header />
      <main className="content-area">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
