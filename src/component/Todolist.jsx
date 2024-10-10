import React, { useState } from 'react'
import './Todo.css'
import TextField from '@mui/material/TextField';
import axios from 'axios'

const Todo = () =>{
    const [todo, setTodo]= useState('');
    const [db,setDb] = useState([]);
    function datapost(){
      axios.post("http://localhost:3000/posts",{ todo })
      .then(()=>{
        alert("data has been posted")
        setTodo('')
      })
      .catch(()=>{
          alert("data has not posted")
      }) 

     }
     function getData(){
      axios.get("http://localhost:3000/posts")
      .then((response) => {
        setDb(response.data)
        alert("data has been retrived")
      })
      .catch(()=>{
        alert("data has not getted")
      })
     }
     console.log(db)
     
  return (
    <div>
        <p>
     {todo}
     </p>
   
     <TextField
     id="outline-basic"
     label="Todo" variant='outlined'
     value={todo}
     onChange={(ref) => setTodo(ref.target.value)} />
     <br></br>
     <button variant ="contained" onClick={datapost}> post</button>      
     <button variant="outlined" onClick={getData}>get </button>
     <div>
      <ul>
        {
          db.map((item)=>(
            <li key={item.id}>{item.todo}</li>
          ))
        }
      </ul>
     </div>
     </div>
  )
}

export default Todo 