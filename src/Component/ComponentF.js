import React from 'react'
import { UserContext,ChannelContext } from '../App'
function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
        {
          <ChannelContext.Consumer>
            {

          user=>{
            return <div>user name is {user} -{}</div>
          }
            }
        
          </ChannelContext.Consumer>
        }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF