import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import UsersList from './pages/UsersList/UsersList';
import UserDetails from './pages/UserDetails/UserDetails';
import AddUser from './pages/AddUser/AddUser';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="login" element={<Login/>} />
              <Route path="users">
                 <Route index element={<UsersList/>}/>
                 <Route path=":userId" element={<UserDetails/>}/>
                 <Route path="adduser" element={<AddUser/>}/>
              </Route>
              <Route path="products">
                 <Route index element={<UsersList/>}/>
                 <Route path=":productId" element={<UserDetails/>}/>
                 <Route path="addproduct" element={<AddUser/>}/>
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
