"use client";
import Image from "next/image";
// import { getCsrfToken, signIn } from "next-auth/react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [csrfToken, setCsrfToken] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const fetchCsrfToken = async () => {
  //     // const token = await getCsrfToken();
  //     setCsrfToken(token || '');
  //   };

  //   fetchCsrfToken();
  // }, []);

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const result = await signIn('credentials', {
    //   redirect: false,
    //   email,
    //   password,
    // });

    // if (result?.error) {
    //   setErrorMessage(result.error);
    // } else {
    //   router.push('/');
    // }
  };

  return (
    <div>
      <div
        className="w-full p-10"
        style={{
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h3 className="font-estiem text-center text-estiem lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-black">
          Welcome Back!
        </h3>

        <div className="flex justify-center">
          <div
            className="my-[3rem] w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-700"
            style={{
              boxShadow: `0px 216px 60px 0px rgba(0, 0, 0, 0%),
              0px 138px 55px 0px rgba(0, 0, 0, 1%),
              0px 78px 47px 0px rgba(0, 0, 0, 5%),
              0px 35px 35px 0px rgba(0, 0, 0, 9%),
              0px 9px 19px 0px rgba(0, 0, 0, 10%)`,
              borderRadius: `20px`,
              border: "1px solid #ccc",
            }}
          >
            {errorMessage && (
              <h5 className="text-blue-500 mb-5">{errorMessage}</h5>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-estiem">
                Sign in to our platform
              </h5>
              <div>
                <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Capture email
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="name@estiem.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Capture password
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-black"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgotten-password"
                  className="ms-auto text-sm text-estiem hover:underline dark:text-estiem"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="link-login w-full text-white font-medium rounded-lg text-sm text-center"
              >
                Login
              </button>
              <div className="text-sm font-medium text-black">
                Not registered?{" "}
                <a
                  href="/register"
                  className="text-estiem hover:underline dark:text-estiem"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Login;