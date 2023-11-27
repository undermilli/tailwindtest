import { useState } from "react";
import "../index.css";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function Main() {
  return (
    <div className="m-10">
      <div className="m-10">
        <button
          type="button"
          className="font-sans rounded-full bg-teal-800 px-20 py-3 text-base text-white shadow-sm hover:bg-teal-700"
        >
          Primary button
        </button>
      </div>
      <div className="m-10">
        <button
          type="button"
          className="font-sans rounded-full bg-teal-400 px-20 py-3 text-base text-white shadow-sm hover:bg-teal-300"
        >
          Secondary button
        </button>
      </div>
      <div>
        <div className="m-10">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-teal-500"
          >
            Email
          </label>
          <div className="mt-0">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
      <div className="m-10">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-teal-500"
        >
          Email
        </label>
        <div className="relative mt-0 rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 px-1.5 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-teal-500 placeholder:text-red-300 focus:ring-1 focus:ring-inset focus:ring-teal-500"
            placeholder="you@example.com"
            defaultValue="adamwathan"
            aria-invalid="true"
            aria-describedby="email-error"
          />
        </div>
        <p className="mt-0 text-sm underline text-red-500" id="email-error">
          Not a valid email address.
        </p>
      </div>
      <div className="m-10">
        <label
          htmlFor="email"
          className="flex text-sm justify-between font-medium leading-6 text-teal-500"
        >
          <p>Password</p>
          <div className="flex items-center">
            <EyeSlashIcon className="h-4 w-4 mx-1 text-gray-500" />
            <p className="mx-1 text-gray-500">hi</p>
          </div>
        </label>
        <div className="relative mt-0 rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-500"
            placeholder="you@example.com"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <EyeIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="m-10">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-4 w-4 rounded border-teal-500 text-teal-500 focus:ring-teal-500"
        />
      </div>
    </div>
  );
}

export default Main;
