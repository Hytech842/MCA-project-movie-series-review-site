import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./movie-series-review-site/Re-use-components/Navbar"
import Home from "./movie-series-review-site/HomePage"
import RegistrationForm from './movie-series-review-site/forms/RegistrationForm'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;