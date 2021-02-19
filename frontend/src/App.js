import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import ChatPage from './pages/chat-page/ChatPage.component';
import LoginPage from "./pages/login-page/LoginPage.component";
import RegisterPage from "./pages/register-page/RegisterPage.component";

import store from "./redux/store";
import { GlobalStyles } from "./global.styles";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Router>
          <Switch>
            <ProtectedRoute exact path="/" component={ChatPage}/>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
