import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
   const[post,setpost]=useState([])

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{console.log(res.data)})
    .catch(err=>(console.log(err)))
   })

  return (
    <div>
        <ul>

        </ul>
    </div>
  )
}

export default DataFetching