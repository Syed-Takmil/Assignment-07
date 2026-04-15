import React from 'react';


import Logo from '../../assets/logo-xl.png'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import X from '../../assets/twitter.png'


const Footer = () => {
    return (
            

//  <div className=' md:w-full w-fit '>
               <footer className="footer   grid gap-4 footer-horizontal footer-center bg-[#244D3F] text-white rounded py-15 px-10">
                <img className='max-w-[400px]' src={Logo} alt="Logo" />
<p className='text-[16px] text-[#FFFF]/80'>
Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
</p>
<p className='font-medium text-[20px]'>Social Links</p>
  <nav>
    <div className="grid grid-flow-col gap-4">
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={X} alt="X" />
    </div>
  </nav>
  <aside className='flex   justify-between gap-60 text-[#FFFF]/50'>

    <p >Copyright ©2026 KeenKeeper - All right reserved</p>
      <ul className='flex gap-3'>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookies</li>
    </ul>
 

  </aside>
</footer>

       
    );
};

export default Footer;