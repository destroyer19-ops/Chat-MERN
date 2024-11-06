import React from 'react'
import GenderCheck from './GenderCheck'

const SignUp = () => {
  return (
    <div className='flex flex-col  items-center min-w-96 justify-center mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center font-semibold text-gray-300">Signup</h1>

        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className="w-full input h-10 input-bordered" />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='johndoe' className="w-full input h-10 input-bordered" />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className='text-base label-text'>Password</span></label>
            <input type="password" placeholder='Enter Password' className="w-full input h-10 input-bordered" />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className='text-base label-text'>Confirm Password</span></label>
            <input type="password" placeholder='Confirm Password' className="w-full input h-10 input-bordered" />
          </div>

          {/* GENDER  */}
          <GenderCheck />
          <a href="#" className="hover:underline text-sm hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp



// Starter Code 


// import React from 'react'
// import GenderCheck from './GenderCheck'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col  items-center min-w-96 justify-center mx-auto'>
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl text-center font-semibold text-gray-300">Signup</h1>

//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className="w-full input h-10 input-bordered" />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='johndoe' className="w-full input h-10 input-bordered" />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className='text-base label-text'>Password</span></label>
//             <input type="password" placeholder='Enter Password' className="w-full input h-10 input-bordered" />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className='text-base label-text'>Confirm Password</span></label>
//             <input type="password" placeholder='Confirm Password' className="w-full input h-10 input-bordered" />
//           </div>

//           {/* GENDER  */}
//           <GenderCheck />
//           <a href="#" className="hover:underline text-sm hover:text-blue-600 mt-2 inline-block">
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Signup</button>
//           </div>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp