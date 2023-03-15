import  './navbar.css'

const Navbar = () => {
  return (
    <> 
   <div className='navbar'>
 <a href="" className='medicaretab'>Medicare</a>
  <a href="" className='contacttab'>Contact</a>
  <a href="" className='newstab'>News</a>
  <a href="" className='aboutustab'>About Us</a>
  <a href="/signin" className='sigintab'>signin</a>
  <a href="" className="helptab">Help?</a>
  </div>
    </>
  )
}

export default Navbar
