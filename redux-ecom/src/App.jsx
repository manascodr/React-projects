import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./frontstore/actions/userAction";
import { asyncLoadProducts } from "./frontstore/actions/procuctActions";

function App() {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadProducts());
    dispatch(asynccurrentuser());
    }, []);

  const appStyles = {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
  };

  const mainStyles = {
    padding: '20px 0',
    flex: 1
  };

  return (
    <div style={appStyles}>
      <Nav />
      <main style={mainStyles}>
        <Mainroutes />
      </main>
    </div>
  );
}

export default App;
