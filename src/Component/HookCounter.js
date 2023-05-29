import React, {useState} from 'react'

function HookCounter() {
    const [count , setcount] = useState(0)
  return (
   <button onClick={()=>setcount(count+1)}>Click{count}</button>
)
}

export default HookCounter