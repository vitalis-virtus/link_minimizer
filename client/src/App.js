import "./App.css";
import "materialize-css";
import useRoutes from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/auth.context";
import NavBar from "./component/NavBar";
import Loader from "./component/Loader/Loader"

// import { BrowserRouter } from "react-router-dom";

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if(!ready) {
    return (<Loader/>)
  }

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
      <>
      {isAuthenticated && <NavBar/>}
      <div className="container">{routes}</div>
      </>
    </AuthContext.Provider>
  );
}

export default App;
