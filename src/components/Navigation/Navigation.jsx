import React from 'react'

const Navigation = () => {
  return (
    <nav className="flex items-center font-bold py-6 px-20 justify-between gap-40">
      <div className="flex items-center gap-20">
        {/* logo */}
        <a className="text-3xl text-black gap-20" href="/">
          New Fully Bakery, Inc.
        </a>
      </div>
      <div className="flex flex-wrap items-center gap-20 flex-1">
        <ul className="flex gap-14 text-gray-600 hover:text-black">
          <li className="text-gray-600 hover:text-black">
            <a href="/breads">breads</a>
          </li>
          <li className="text-gray-600 hover:text-black">
            <a href="/cakes">cakes</a>
          </li>
          <li className="text-gray-600 hover:text-black">
            <a href="/cookies">cookies</a>
          </li>
          <li className="text-gray-600 hover:text-black">
            <a href="/mooncakes">mooncakes</a>
          </li>
          <li className="text-gray-600 hover:text-black">
            <a href="/specialized_cakes">specialized cakes</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">{/* Search bar*/}
        <div className='border rounded flex overflow-hidden'>
            <button className='flex items-center justify-center px-4 border-1'>
                <svg className="h-4 w-4 text-grey-dark" fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' />
            </button>
        </div>
      </div>
      <div>{/* Action items */}</div>
    </nav>
  );
}

export default Navigation
