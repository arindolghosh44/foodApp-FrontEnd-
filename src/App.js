import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import AddFood from './Component/AddFood';
import UpdateFood from './Component/UpdateFood';
import DeleteFood from './Component/DeleteFood';
import SearchFood from './Component/SearchFood';
import FoodReport from './Component/FoodReport';
import Food1 from './Component/Food1';
function App() {
  return (
    <div className="App">
     <h2>Food App</h2>
     <Nav/>

     <Routes>
         <Route path='/food' element={<Food1/>}>
        <Route path="addFood" element={<AddFood/>}/>
         <Route path="deleteFood" element={<DeleteFood/>}/>
         <Route path="updateFood" element={<UpdateFood/>}/>
         <Route path="searchFood" element={<SearchFood/>}/>
         <Route path="details" element={<FoodReport/>}/>
         </Route>
       
         </Routes>
    </div>
  );
}

export default App;
