import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className='container'>
        <div className="flex w-fit mx-auto gap-10 py-4 font-medium text-blakish">
            <div>PRODUCTS</div>
            <div>CATEGORIES</div>
            <div>{`ACESSORIES`}</div>
            <div>{`COMPUTERS`}</div>
            <div>ABOUT US</div>
            <div>CONTACT US</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
