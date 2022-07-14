import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainComponent } from './components/MainComponent';
import Map from './components/Map';
import Header from './components/Header';
import BusData from './components/data/BusData';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/map"} element={
                  <div>
                    <Header />
                    <Map />
                  </div>
                  }>
                  </Route>
                <Route path={"/"} element={<MainComponent />}></Route>
                <Route path={"/busdata"} element={<BusData />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
