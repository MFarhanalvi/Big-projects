import React,{useState} from 'react'

function todo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todo,setTodo]=useState('');
   console.log({todo})

  return (
    <div>
        <h2>Enter Here</h2>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        {/* <button >Add</button> */}
    </div>
  )
}

export default todo