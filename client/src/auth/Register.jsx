const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="form flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg relative">
          {/* Title */}
          <p className="title text-3xl text-royalblue font-semibold tracking-tight text-center">
            Login
          </p>
          <p className="message text-gray-600 text-sm text-center">
            Signup now and get full access to our app.
          </p>

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-4">
            <label className="relative">
              <input
                required
                placeholder=""
                type="text"
                className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
              />
              <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
                Firstname
              </span>
            </label>

            <label className="relative">
              <input
                required
                placeholder=""
                type="text"
                className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
              />
              <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
                Lastname
              </span>
            </label>
          </div>

          <label className="relative">
            <input
              required
              placeholder=""
              type="email"
              className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
            />
            <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
              Email
            </span>
          </label>

          <label className="relative">
            <input
              required
              placeholder=""
              type="password"
              className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
            />
            <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
              Password
            </span>
          </label>

          <label className="relative">
            <input
              required
              placeholder=""
              type="password"
              className="input w-full p-3 outline-none border border-gray-300 rounded-lg focus:border-royalblue"
            />
            <span className="absolute left-3 top-3.5 text-gray-500 text-sm pointer-events-none transition-all">
              Confirm Password
            </span>
          </label>

          {/* Submit Button */}
          <button className="submit w-full bg-royalblue p-3 rounded-lg text-white font-semibold text-lg hover:bg-blue-600 transition-transform active:scale-95">
            Submit
          </button>

          {/* Sign-in Link */}
          <p className="signin text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-royalblue hover:underline">
              Signin
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
