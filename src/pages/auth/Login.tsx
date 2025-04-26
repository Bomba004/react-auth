

export const Login = () => {
  
  function onSubmit(data: any) {
    console.log(data);
  }
  
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label htmlFor="Email" className="relative">
        <input
          type="email"
          id="Email"
          placeholder=""
          className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />

        <span
          className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
        >
          Email
        </span>
      </label>

      <label htmlFor="password" className="relative">
        <input
          type="password"
          id="password"
          placeholder=""
          className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />

        <span
          className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
        >
          Password
        </span>
      </label>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default Login;

