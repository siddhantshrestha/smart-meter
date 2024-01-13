import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"

interface ILogin {
  username: string
  password: string
}

const schema = yup
  .object({
    username: yup.string().required("username is required."),
    password: yup
      .string()
      .min(8, "Password must be 8 character long")
      .required("Password is required."),
  })
  .required()

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  })

  const handleLogin: SubmitHandler<ILogin> = (data: ILogin) => {
    console.log(data)
  }

  return (
    <div className='flex items-center justify-center text-white bg-core-bac w-screen h-screen'>
      <form
        className='flex flex-col items-center w-fit bg-core-pri p-8 max-h-[calc(100vh-300px)] rounded-md shadow-xl'
        onSubmit={handleSubmit(handleLogin)}>
        <div className='w-[380px] text-white  '>
          <h2 className='text-white text-2xl font-bold text-center mb-4'>
            Login
          </h2>
          <fieldset className='flex flex-col gap-2 mb-3 '>
            <label htmlFor='email' className='label font-semibold'>
              username
            </label>
            <input
              {...register("username")}
              type='text'
              id='username'
              placeholder='username'
              className='p-2.5 bg-slate-200 text-black rounded-lg  outline-none'
            />
            {errors.username && (
              <p className='mt-2 text-sm text-red-500'>
                {errors.username.message}
              </p>
            )}
          </fieldset>
          <div className='flex flex-col gap-2 mb-3'>
            <label htmlFor='username'> Password</label>
            <input
              {...register("password")}
              type='password'
              className='input p-2.5 bg-slate-200 text-black rounded-lg outline-none'
              id='password'
              placeholder='Enter your password'
            />
            {errors.password && (
              <p className='mt-2 text-sm text-red-500'>
                {errors.password.message}
              </p>
            )}
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className=' mt-2 px-6 py-2 rounded-lg  text-core-pri bg-slate-100 '>
              Log In
            </button>
          </div>
        </div>
        <p className='my-3 text-neutral-800'>Forgot password?</p>
        <div className='flex '>
          <p className='mr-2'>New User?</p>
          <Link to='/signup' className='text-neutral-800'>
            Create an account.
          </Link>
        </div>
      </form>
    </div>
  )
}
