import Head from "next/head";
import Layout from "@/Components/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleChange = async (e) => {
    if (e.target.name == "password") {
      setPassword(e.target.value);
    }
    if (e.target.name == "cpassword") {
      setCpassword(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);

  const sendResetEmail = async () => {
    let data = {
      email,
      sendMail: true,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      console.log("Password reset instructions have been sent to your email");
    } else {
      console.log("error");
    }
  };

  const resetPassword = async () => {
    if (password === cpassword) {
      let data = {
        password,
        sendMail: false,
      };
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await a.json();
      if (res.success) {
        console.log("Password has been changed");
      } else {
        console.log("error");
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Forgot - ntinkumar.in</title>
        <meta
          name="Nitin Forgot"
          content="Explore the professional portfolio of Nitin Kumar, a skilled web developer specializing in Next.js, React, front-end, and full-stack development. View projects, expertise in modern web technologies, and contact details."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 pl-6 lg:pt-0 sm:pt-0">
          <div className="flex items-center justify-between w-full lg:w-full lg:flex-col">
            <div className="w-1/2 lg:w-full lg:flex lg:items-center lg:justify-center">
              <div className="w-3/4 border ml-10 rounded-xl bg-light shadow-lg dark:shadow-light shadow-dark dark:bg-dark dark:text-light bg-blend-saturation lg:w-4/6 ">
                <h1 className="mt-10 items-center justify-center flex font-sasti text-3xl font-bold dark:text-primaryback">
                  Forgot Your Password
                </h1>
                <div className="px-10 py-20">
                  {router.query.token && (
                    <div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          New Password
                        </label>
                        <input
                          value={password}
                          onChange={handleChange}
                          type="password"
                          name="password"
                          id="password"
                          className="shadow-sm shadow-dark dark:shadow-light text-black sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30"
                          placeholder="New Password"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cpassword"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Confirm New Password
                        </label>
                        <input
                          value={cpassword}
                          onChange={handleChange}
                          type="password"
                          name="cpassword"
                          id="cpassword"
                          className="shadow-sm shadow-dark dark:shadow-light text-black sm:text-sm rounded-lg focus:ring-primaryback focus:border-primaryback/40 block w-full p-2.5 placeholder:text-dark/30"
                          placeholder="Confirm New Password"
                          required=""
                        />
                      </div>

                      <button
                        onClick={resetPassword}
                        type="submit"
                        className="w-full my-10 text-black bg-primaryback/80 hover:bg-primaryback focus:ring-4 focus:outline-none focus:ring-primaryDark/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Continue
                      </button>
                      <p className="text-sm font-light text-gray-900">
                        Remember the password?{" "}
                        <a
                          href={"/Login"}
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Log in
                        </a>
                      </p>
                      {password !== cpassword && (
                        <span className="text-red-500">
                          Passwords do not match
                        </span>
                      )}
                      {password && password === cpassword && (
                        <span className="text-green-500">Passwords match</span>
                      )}
                    </div>
                  )}
                  {!router.query.token && (
                    <div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
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

                      <button
                        onClick={sendResetEmail}
                        type="submit"
                        className="w-full my-10 text-black bg-primaryback/80 hover:bg-primaryback focus:ring-4 focus:outline-none focus:ring-primaryDark/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Continue
                      </button>
                      <p className="text-sm font-light text-dark dark:text-light">
                        Remember the password?{" "}
                        <a
                          href={"/Login"}
                          className="font-medium text-primaryback hover:underline"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="images lg:hidden md:hidden sm:hidden w-1/2 h-[80%] absolute bottom-0 right-[100px]">
              <Image
                src="/Images/shape2.png"
                alt="Nsw"
                className="shape"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={800} // Adjust width as needed
                height={800}
              />
              <Image
                src="/Images/Me2.png"
                alt="Nsw"
                className="girl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={600} // Adjust width as needed
                height={600}
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Forgot;
