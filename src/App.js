import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/landing";
import { divide } from "lodash";
import Menu from "./components/navbar";
import Pies from "./components/footer";

const App = () => {
  return (
    <>
      <Menu />
      <div class="container">
        <Landing />
      </div>
      <Pies />
    </>
  );
};

export default App;
