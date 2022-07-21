import './App.css';
import Nav from "./Nav.js";
import Sidebar from './sidebar';
import Feed from './feed';
import Login from './login'; 
import {  useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function App() {
  const user = useSelector(selectUser);
  
  

  return (
   
    <div className="app">
      {!user ? <Login></Login> : (
          <>
          <Nav/>
          <div className='app_body'>
            
            <Sidebar/>
            <Feed/>
          </div>
        </>  
            
      )}
       
      
    </div>
    
   
  );
}

export default App;
