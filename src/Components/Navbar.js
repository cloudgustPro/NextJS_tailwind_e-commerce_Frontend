import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className='container'>
        <div className="flex w-fit mx-auto gap-10 py-4 font-medium text-blakish">
            <div className='navbar__link relative cursor-pointer'>PRODUCTS</div>
            <div className='navbar__link relative cursor-pointer'>CATEGORIES</div>
            <div className='navbar__link relative cursor-pointer'>{`ACESSORIES`}</div>
            <div className='navbar__link relative cursor-pointer'>{`COMPUTERS`}</div>
            <div className='navbar__link relative cursor-pointer'>ABOUT US</div>
            <div className='navbar__link relative cursor-pointer'>CONTACT US</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
