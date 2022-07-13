import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainComponent } from './components/MainComponent';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainComponent />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
