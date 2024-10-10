import React from 'react'
import{browserRouter as Router,Routes,Route}
const App = () => {
  return (
    <div>
    <router>
    <div>Navbar</div>
    </router>
     <routes>
     <Route path="/" element={<home/>}/>
     <Route path="/Work" element={<work/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     </routes>
    
  )
}

export default App