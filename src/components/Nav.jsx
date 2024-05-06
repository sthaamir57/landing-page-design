const Nav = () => {
  return (
    <nav className='flex flex-row justify-between items-center text-neutral-50 bg-black px-4 py-4 text-base fixed top-0 left-0 right-0 z-50'>
        <div className="font-PPMori">D.</div>
        <ul className="flex flex-row">
            <li><a href="#" className='px-2 py-1'>Work</a></li>
            <li><a href="#" className='px-2 py-1'>Services</a></li>
            <li><a href="#" className='px-2 py-1'>Contact</a></li>
        </ul>
        <div className="">.</div>
    </nav>
  )
}

export default Nav