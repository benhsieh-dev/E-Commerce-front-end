import React from 'react'

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-20 justify-between">
      <div className="flex items-center gap-20">
        {/* logo */}
        <a className="text-3xl text-black gap-20" href='/'>New Fully Bakery, Inc.</a>
      </div>
      <div className="flex flex-wrap items-center gap-20 flex-1">
        <ul className="flex gap-14">
          <li className='text-gray-600 hover:text-black'>
            <a href="/breads">breads</a>
          </li>
          <li>
            <a href="/cakes">cakes</a>
          </li>
          <li>
            <a href="/cookies">cookies</a>
          </li>
          <li>
            <a href="/mooncakes">mooncakes</a>
          </li>
          <li>
            <a href="/specialized_cakes">specialized cakes</a>
          </li>
        </ul>
      </div>
      <div>
        {/* Search bar*/}
      </div>
      <div>
        {/* Action items */}
      </div>
    </nav>
  );
}

export default Navigation
