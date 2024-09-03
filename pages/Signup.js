import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMounted(true);
  
    if (localStorage.getItem("token") && mounted) {
      router.push("/");
    }
  }, [mounted, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName("");
    setEmail("");
    setPassword("");
    toast.success("Your account has been created!", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Head>
        <title>Signup - Nitinkumar.in</title>
        <meta
          name="nitin Signup"
          content="Explore the professional portfolio of Nitin Kumar, a skilled web developer specializing in Next.js, React, front-end, and full-stack development. View projects, expertise in modern web technologies, and contact details."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <ToastContainer
          position="top-left"
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
                  Signup With Nitin.nsw
                </h1>
                <div className="px-10 py-20">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                    method="POST"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        className="shadow-sm shadow-dark dark:shadow-light text-dark sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30 "
                        placeholder="Name"
                        required=""
                      />
                    </div>
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
                        className="shadow-sm shadow-dark dark:shadow-light text-dark sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30 "
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
                        placeholder="Password"
                        className="shadow-sm shadow-dark dark:shadow-light text-dark sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30 "
                        required=""
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-dark bg-primaryback/80 hover:bg-primaryback focus:ring-4 focus:outline-none focus:ring-primaryDark/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign up
                    </button>
                    <p className="text-sm font-light text-gray-900">
                      You have any account?
                      <a
                        href={"/Login"}
                        className="font-medium text-primary-600 hover:underline "
                      >
                        Log in
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

export default Signup;
