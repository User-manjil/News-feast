import News from './components/News'
import Navbar from './Navbar/Navbar'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
// Link,
  Routes
} from "react-router-dom";



const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/sports'  element={<News key="sport" pageSize="9" category="sports"/> }> </Route>
        <Route exact path='/business'  element={<News key="business" pageSize="9" category="business"/> }></Route>
        <Route exact path='/'  element={<News  key="general"pageSize="9" category="general"/> }></Route>
        <Route exact path='/science'  element={<News key="science"pageSize="9" category="science"/> }></Route>
        <Route exact path='/technology'  element={<News key="technology"pageSize="9" category="technology"/> }></Route>
        <Route exact path='/entertainment'  element={<News key="entertainment" pageSize="9" category="entertainment"/> }> </Route>
     
      </Routes>
      </Router>
     
    

    </div>
  )
}

export default App
