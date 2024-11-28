import { useState } from "react";
import Counter from "./pages/counter";
import Landing from "./pages/landing";
import Menu from "./components/navbar";
import Pies from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState("landingPage");

  const Pages = {
    counterPage: <Counter />,
    landingPage: <Landing />,
  };

  return (
    <>
      <Menu currentPage={currentPage} pageSetter={setCurrentPage} />
      <div className="container">
        {Pages[currentPage] || <Landing />}
      </div>
      <Pies />
    </>
  );
};

export default App;
