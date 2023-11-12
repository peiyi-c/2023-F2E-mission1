import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import { BlurMessage } from "./containers/BlurContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <BlurMessage>
          <HeaderContainer />
        </BlurMessage>
      </BrowserRouter>
    </>
  );
}

export default App;
