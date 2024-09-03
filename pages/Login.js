import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Include 'router' in the dependency array
  useEffect(() => {
    if (localStorage.getItem("myuser")) {
      router.push("/");
    }
  }, [router]); // <-- 'router' added as a dependency

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setEmail("");
    setPassword("");
    if (response.success) {
      localStorage.setItem(
        "myuser",
        JSON.stringify({ token: response.token, email: response.email })
      );
      toast.success("You are successfully logged in", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        router.push(process.env.NEXT_PUBLIC_HOST);
      }, 1000);
    } else {
      toast.error(response.error, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <Head>
        <title> Login - ntinkumar.in</title>
        <meta
          name="viewport"
          content="Fitness Coaching Professional Gym Trainer Gym Accessories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <ToastContainer
          position="bottom-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Layout className="pt-0 pl-6 lg:pt-0 sm:pt-0">
          <div className="flex items-center justify-between w-full lg:w-full lg:flex-col">
            <div className="w-1/2 lg:w-full lg:flex lg:items-center lg:justify-center">
              <div className="w-3/4 border ml-10 rounded-xl bg-light shadow-lg dark:shadow-light shadow-dark dark:bg-dark dark:text-light bg-blend-saturation lg:w-4/6 ">
                <h1
                  href="#"
                  className=" mt-10 items-center justify-center flex font-sasti text-3xl font-bold dark:text-primaryback "
                >
                  Login With Nitin.nsw
                </h1>
                <div className="px-10 py-20">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your email
                      </label>
                      <input
                        value={email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm shadow-dark dark:shadow-light text-dark sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={handleChange}
                        type="text"
                        name="password"
                        id="password"
                        placeholder=" "
                        className="shadow-sm shadow-dark dark:shadow-light text-dark sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30"
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            onChange={handleChange}
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-primaryback rounded bg-primaryback focus:ring-3 focus:ring-primaryback"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-dark/80 dark:text-light "
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <Link
                        href={"/Forgot"}
                        className="text-sm font-medium text-primaryback hover:underline  "
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-dark bg-primaryback/80 hover:bg-primaryback focus:ring-4 focus:outline-none focus:ring-primaryDark/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Log in
                    </button>
                    <p className="text-sm font-light text-gray-900">
                      Don’t have an account yet?{" "}
                      <a
                        href={"/Signup"}
                        className="font-medium text-primaryback hover:underline "
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="images lg:hidden md:hidden sm:hidden w-1/2 h-[80%] absolute bottom-0 right-[100px]">
              <Image
                src="/Images/shape2.png"
                alt="Nsw"
                className="shape "
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={800} // Adjust width as needed
                height={800} // Adjust height as needed
              />
              <Image
                src="/Images/Me2.png"
                alt="Nsw"
                className="girl"
                priority="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={600} // Adjust width as needed
                height={600} // Adjust height as needed
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Login;
