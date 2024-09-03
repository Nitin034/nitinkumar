import React from "react";
import { FaUserCircle } from "react-icons/fa";
// PhotoIcon

const EditProfile = () => {
  return (
    <form className="px-32 py-5 lg:px-10 lg-py-4 ">
      <div className="space-y-12 bg-dark/25 p-5 dark:bg-light/25 shadow-dark/60 dark:shadow-light shadow-xl">
        <div className="border-b border-dark pb-12">
          <div className="mt-10 grid xs:grid-cols-1 gap-x-6 gap-y-8 grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-light"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <FaUserCircle
                  className="h-12 w-12 text-dark"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-light px-2.5 py-1.5 text-sm font-semibold text-dark shadow-sm ring-1 ring-inset ring-dark hover:bg-dark/50"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-dark/50 pb-12">
          <h2 className="text-4xl font-bold leading-7 text-dark">
            Personal Information
          </h2>

          <div className="mt-10 grid xs:grid-cols-1 gap-x-6 gap-y-8  grid-cols-6">
            <div className="col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-dark"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-dark/40 focus:ring-2 focus:ring-inset focus:ring-primaryDark text-sm leading-6"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-dark"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-dark/40 focus:ring-2 focus:ring-inset focus:ring-primaryDark text-sm leading-6"
                />
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-dark"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-dark/40 focus:ring-2 focus:ring-inset focus:ring-primaryDark text-sm leading-6"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-dark"
              >
                Company name
              </label>
              <div className="mt-2">
                <select
                  id="company"
                  name="company"
                  autoComplete="company-name"
                  className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark focus:ring-2 focus:ring-inset focus:ring-primaryDark max-w-xs text-sm leading-6"
                >
                  <option>Unite</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-dark"
              >
                Designation
              </label>
              <div className="mt-2">
                <select
                  id="company"
                  name="company"
                  autoComplete="company-name"
                  className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark focus:ring-2 focus:ring-inset focus:ring-primaryDark max-w-xs text-sm leading-6"
                >
                  <option>Recruiter</option>
                  <option>Interviewer</option>
                  <option>Freelincer</option>
                </select>
              </div>
            </div>

            <div className="col-span-2 col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-dark"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className=" block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark focus:ring-2 focus:ring-inset focus:ring-primaryDark max-w-xs text-sm leading-6"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-dark"
              >
                Country
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark focus:ring-2 focus:ring-inset focus:ring-primaryDark max-w-xs text-sm leading-6"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className=" rounded-md bg-primaryback/25 px-3 py-2 text-sm font-semibold text-dark dark:text-light shadow-sm hover:bg-primaryback focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-dark dark:text-light shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDark"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
