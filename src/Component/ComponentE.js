import React ,{ UserContext } from '../App'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from '../App'
const user=useContext(UserContext)
const us=useContext(ChannelContext)

function ComponentE() {
  return (
    <div>     
     <div>
        {user}-{us}
    </div>
    </div>
  )
}

export default ComponentE