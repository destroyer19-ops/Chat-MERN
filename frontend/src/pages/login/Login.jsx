import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col  items-center min-w-96 justify-center mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl text-center font-semibold text-gray-300">Login</h1>

                <form action="">
                    <div>
                        <label htmlFor="" className="label p-2"><span className='text-base label-text'>Username</span></label>
                        <input type="text" placeholder='Enter Username' className="w-full input h-10 input-bordered" />
                    </div>
                    <div>
                        <label htmlFor="" className="label p-2"><span className='text-base label-text'>Password</span></label>
                        <input type="text" placeholder='Enter Password' className="w-full input h-10 input-bordered" />
                    </div>
                    <Link to='/signup'  className="hover:underline text-sm hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login


// STARTUP CODE FOR LOGIN

// const Login = () => {
//     return (
//         <div className='flex flex-col  items-center min-w-96 justify-center mx-auto'>
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl text-center font-semibold text-gray-300">Login</h1>

//                 <form action="">
//                     <div>
//                         <label htmlFor="" className="label p-2"><span className='text-base label-text'>Username</span></label>
//                         <input type="text" placeholder='Enter Username' className="w-full input h-10 input-bordered" />
//                     </div>
//                     <div>
//                         <label htmlFor="" className="label p-2"><span className='text-base label-text'>Password</span></label>
//                         <input type="text" placeholder='Enter Password' className="w-full input h-10 input-bordered" />
//                     </div>
//                     <a href="#" className="hover:underline text-sm hover:text-blue-600 mt-2 inline-block">
//                         {"Don't"} have an account?
//                     </a>
//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Login</button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Login