import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import { BlurMessage } from "./containers/BlurContext";
import { Main } from "./components/Main";
function App() {
  return (
    <>
      <BrowserRouter>
        <BlurMessage>
          <HeaderContainer />
          <Main />
        </BlurMessage>
      </BrowserRouter>
    </>
  );
}

export default App;
