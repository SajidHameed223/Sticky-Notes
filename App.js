
import Routes from './Pages/Routes'
import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Header'
import Table from './Components/Table';
//import auth from "./Confgi/auth"
//import Message from 'antd'
function App() {
  return (
    <>
    <Header />
            <Routes />


    </>
  );
}

export default App;
