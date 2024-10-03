import React from 'react'

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between">
      <div className="flex items-center gap-6">
        {/* logo */}
        <a className="text-3xl text-black gap-8" href='/'>New Fully Bakery, Inc.</a>
      </div>
      <div className="flex flex-wrap items-center gap-10 flex-1">
        <ul className="flex">
          <li>
            <a href="/">breads</a>
          </li>
          <li>
            <a href="/">cakes</a>
          </li>
          <li>
            <a href="/">cookies</a>
          </li>
          <li>
            <a href="/">mooncakes</a>
          </li>
          <li>
            <a href="/">specialized cakes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation
