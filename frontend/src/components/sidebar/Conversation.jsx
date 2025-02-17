import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
                <div className="online avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'> John Doe
                        </p>
                            <span className='text-xl'>e</span>
                    </div>
                </div>
            </div>
            <div className='my-0 py-0 divider h-1'/>
        </>
    )
}

export default Conversation




// Starter code

// import React from 'react'

// const Conversation = () => {
//     return (
//         <>
//             <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//                 <div className="online avatar">
//                     <div className="w-12 rounded-full">
//                         <img src="" alt="user avatar" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col flex-1">
//                     <div className='flex gap-3 justify-between'>
//                         <p className='font-bold text-gray-200'> John Doe
//                         </p>
//                             <span className='text-xl'>e</span>
//                     </div>
//                 </div>
//             </div>
//             <div className='my-0 py-0 divider h-1'/>
//         </>
//     )
// }

// export default Conversation