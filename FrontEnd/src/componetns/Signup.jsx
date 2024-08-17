import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <div id="my_modal_3" className='border-[2px] shadow-md p-5 rounded-md'>
          <div>
            <div className='flex justify-between'>
              <h3 className="font-bold text-lg">Signup!</h3>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost">✕</Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300'>
                  Signup
                </button>
                <div>
                  Already have an account?{" "}
                  <Link to="/login" className='underline text-blue-500 cursor-pointer'>
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
