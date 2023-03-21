import React from "react";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/10/800/600')" }}>
      </div>
      <div className="flex flex-col justify-center w-full p-8">
        <h2 className="text-3xl font-extrabold mb-4">Sign In</h2>
        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border border-gray-400 p-2 rounded-lg w-full"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="border border-gray-400 p-2 rounded-lg w-full"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
