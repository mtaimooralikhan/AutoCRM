import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/router";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <AppRouter />
        </div>
      </Router>
    </>
  );
}

export default App;
