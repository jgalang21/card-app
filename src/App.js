
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import SelectionButton from './components/SelectionButton'
import Lots from './components/Lots'
import Singles from './components/Singles';
import Summary from './components/Summary';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './components/lotSlice';


function App() {

  const lotName = useSelector((state) => state.lot.lotName);
  const preview = useSelector((state) => state.lot.lotPictures);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/card_lots" element={<Lots/>}/>
            <Route path="/lot_preview" element={<Summary/>}/>
            <Route path="/singles" element={<Singles/>}/>
        </Routes>

        <SelectionButton title={"Card Lots"} variant={"primary"} to={'/card_lots'} size={"lg"}/>
        <SelectionButton title={"Singles"} variant={"secondary"} to={'/singles'} size={"lg"}/>
  

   
      </header>
    </div>
  );
}

export default App;
