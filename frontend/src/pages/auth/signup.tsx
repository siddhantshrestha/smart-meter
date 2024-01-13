import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className='flex items-center justify-center text-white bg-core-bac w-screen h-screen  '>
      <form className=' bg-core-pri  p-12 max-h-[calc(100vh-150px)]  rounded-xl shadow-lg'>
        <div className='w-[500px] '>
          <h2 className='text-white text-2xl font-bold text-center mb-6'>
            Create an account
          </h2>
          <div className='grid grid-cols-2 gap-x-8 mb-3 '>
            <div className='flex flex-col'>
              <label className='font-semibold' htmlFor='fullname'>
                {" "}
                Full Name
              </label>
              <input
                type='text'
                id='fullname'
                placeholder='Fullname'
                className='p-2.5 outline-none  my-1.5 bg-slate-200 text-black rounded-lg'
              />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold' htmlFor='middlename'>
                {" "}
                Middle Name
              </label>
              <input
                type='text'
                id='middlename'
                placeholder='Middle name'
                className='p-2.5 outline-none  my-1.5 bg-slate-200 text-black rounded-lg'
              />
            </div>

            <div className='flex flex-col'>
              <label className='font-semibold' htmlFor='lastname'>
                {" "}
                Last Name
              </label>
              <input
                type='text'
                id='lastname'
                placeholder='Last Name'
                className='p-2.5 outline-none  my-1.5 bg-slate-200 text-black rounded-lg'
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-semibold' htmlFor='customerid'>
                {" "}
                Customer ID
              </label>
              <input
                type='number'
                id='customerid'
                placeholder='Customer ID'
                className='p-2.5 outline-none  my-1.5 bg-slate-200 text-black rounded-lg'
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-semibold' htmlFor='address'>
                {" "}
                Address
              </label>
              <input
                type='text'
                id='address'
                placeholder='Address'
                className='p-2.5 outline-none  mt-1.5 bg-slate-200 text-black rounded-lg'
              />
            </div>
            <div className='flex flex-col'>
              <label className='font-semibold' htmlFor='contact'>
                {" "}
                Phone Number
              </label>
              <input
                type='number'
                id='contact'
                placeholder='Phone number'
                className='p-2.5 outline-none  mt-1.5 bg-slate-200 text-black rounded-lg'
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold' htmlFor='email'>
              {" "}
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='p-2.5 outline-none  mb-1.5 bg-slate-200 text-black rounded-lg'
            />
          </div>
          <div className='flex flex-col  mb-3'>
            <label className='font-semibold' htmlFor='password'>
              {" "}
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='p-2.5 outline-none  my-1.5 bg-slate-200 text-black rounded-lg'
            />
          </div>
          <div className='flex justify-center'>
            <button className=' mb-4 px-8 py-3 rounded-lg text-core-pri bg-slate-100'>
              Create
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='mr-2  '>Already have an account?</p>
          <Link className='text-neutral-800' to='/login'>
            Log In
          </Link>
        </div>
      </form>
    </div>
  )
}
