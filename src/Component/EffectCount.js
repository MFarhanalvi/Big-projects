import React, { useState , useEffect} from 'react'

function HookCounter() {
    const [count , setcount] = useState(0)
    const[name , setname]=useState('')

    useEffect(() =>{
        document.title=`you click ${count} time`
    })

  return (
    <div>
    <input type="text" value={name} onChange={e=>setname(e.target.value)} />
   <button onClick={()=>setcount(count+1)}>Click{count} times</button>
    </div>
)
}

export default HookCounter