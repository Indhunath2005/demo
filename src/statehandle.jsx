import React ,{usestate} from 'react'
const statehandle = () => {
   const [like,setlike]=usestate(1000)
   function increment(){
    setlike(like+1)
   }
  return (
    <div>
      <img src="https://th.bing.com/th/id/OIP.I_06S6MYmA9xFtpa8A2lmQHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
      <p>
        {like}
      </p>
      <button onClick={increment}>like</button>
    </div>
  )
}

export default statehandle;