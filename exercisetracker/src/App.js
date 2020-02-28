import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
// import Userlogin from "./pages/Userlogin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Tracker} />
          <Route exact path="/tracker" component={Tracker} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route exact path="/userlogin" component={Userlogin} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
