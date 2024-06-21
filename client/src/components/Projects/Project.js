import React from 'react';

function Card() {
  return (
    
    <div className="grid grid-cols-2 mx-auto md:grid-cols-3 rounded-lg  max-w-3xl  dark:bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">

      <img
        className="col-span-1 h-96 w-full rounded-t-lg object-cover md:h-auto md:rounded-none md:rounded-l-lg"
        src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
        alt=""
      />
      <div className="col-span-1 md:col-span-2 flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
    <h2 className="pb-10 text-4xl font-semibold text-center text-bold-800  text-white  dark:bg-gray-900">Projects</h2>
    <div className="grid gap-10 mx-auto p-5 md:grid-cols-1 lg:grid-cols-2 dark:bg-gray-900">
      <Card />
      <Card />
      <Card />
      <Card />

    </div>
    </>
  );
}
