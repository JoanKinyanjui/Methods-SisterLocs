

function Nav() {
  return (
    <div className='flex justify-between w-11/12 md:w-10/12 mx-auto h-full items-center'>
    <div className='text-gold text-[16px] md:text-[20px]'>Methods Sisterlocs</div>

    <div className='hidden md:flex'>
      <ul className='flex gap-5'>
        <li>About</li>
        <li>Services</li>
        <li>Book</li>
      </ul>
    

   <div className='flex md:hidden text-white '>
     hamburger
   </div>

    </div>
</div>

  )}

export default Nav
