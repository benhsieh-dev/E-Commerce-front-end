import React from 'react'

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between">
      <div className="flex items-center gap-6">
        {/* logo */}
        <h2 className="text-3xl text-black">New Fully Bakery, Inc.</h2>
      </div>
      <div className="flex flex-wrap items-center gap-8">
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
