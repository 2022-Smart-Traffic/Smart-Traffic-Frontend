import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainComponent } from './components/MainComponent';
import Map from './components/Map';
import Header from './components/Header';
import OperatingHours from './components/OperatingHours';
import { Seat } from './components/Seat';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/map"} element={
                    <div style={{ maxWidth: "1280px", width: "100vw", height: "100vh", }}>
                        <Header />
                        <Map />
                    </div>
                }>
                </Route>
                <Route path={"/seat"} element={<Seat />}></Route>
                <Route path={"/"} element={<MainComponent />}></Route>
                <Route path={"/Operating"} element={<OperatingHours />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
