import React , {useState} from 'react'

function Hookform() {
    const [name , setname]= useState({firstname:'' ,lastname:''})
  return (
<form >
    <input type="text" value={name.firstname} onChange={e =>setname({...name,firstname: e.target.value})} />
    <input type="text" value={name.lastname} onChange={e =>setname({...name,lastname: e.target.value})}/>
    <h1>My first name is {name.firstname}</h1>
    <h1>My first name is {name.lastname}</h1>
</form>
  )
}

export default Hookform