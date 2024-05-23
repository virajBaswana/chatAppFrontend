import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import ChatUser from './chatUser'

const Chatbox = () => {
  return (
    <div className='flex flex-col basis-6/12 items-center justify-between'>
      <ChatUser/>
      <Textarea className='m-4 h-0.5'/>
    </div>
  )
}

export default Chatbox
