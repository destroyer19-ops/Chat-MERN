import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
    const noChatSelected = true;
  return (
    <div className='flex flex-col md:min-w-[450px]'>
        {noChatSelected ? (<NoChatSelected /> ) : (
            <>
            <div className="px-4 py-2 mb-2 bg-slate-500">
                <span className="label-text">To:</span><span className="text-gray-900 font-bold">John Doe</span>
            </div>
            <Messages/>
            <MessageInput/>
        </>

        )}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col gap-2 items-center">
                <p>Welcome John Doe</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}