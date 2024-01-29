import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import logo from "../Assets/logo.jpeg";
import * as rev from 'react-reveal';

function Footer() {

const [successResponce, setSuccessResponce] = useState("");
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wtcq0xt', 'template_uvekgoa', form.current, 'GLJHLD4VjfTBI3MPl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    setSuccessResponce("Message sent successfully");
    setTimeout(() => {
      setSuccessResponce("");
    }, 4000);
  };
  return (
    <div className='max-w-[1240px] mx-auto py-10 grid md:grid-cols-3 gap-8 text-gray-300'>
    <div
    style={{
      marginLeft: "70%",
      marginTop: "18%",
      position: "fixed",
      zIndex: "2",
    }}
  >
    {successResponce && (
      <div
        style={{
          color: "white",
          fontSize: "16px",
          width: "120%",
          background: "#28a745",
          borderRadius: "15px",
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingLeft: "6%",
          border: "1px solid lightgray",
          opacity: "0.8",
          transition: "0.5",
        }}
      >
        {successResponce}
      </div>
    )}
  </div> 
    
    <div>
        <a id='Contact'></a>
            <div className='flex'>
                <img src={logo} alt='/'  className='w-20 rounded-full mx-2'/>
                <rev.Zoom delay={200}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Optimal Audit Advissors</h1>
                </rev.Zoom>
                </div> 
            <p className='my-4'>
            <rev.Zoom delay={300}>
            Navigating Finances, Ensuring Compliance:
             Your Success, Our Assurance Optimal Audit Advisors at Your Service!
            </rev.Zoom>
             </p>
            <form ref={form} onSubmit={sendEmail} className='mt-9'>
            <rev.Zoom delay={300}>
            <input placeholder='Email adress' type='email' name="user_email" required className='px-2 py-1 rounded-lg text-black mb-2 w-[360px] '/>
            </rev.Zoom>
            <rev.Zoom delay={400}>
            <textarea placeholder='Your Message' name="message" required rows={4} className='text-black w-[360px] rounded-lg px-2 py-1 mb-3' />
            </rev.Zoom>
            <rev.Zoom delay={500}>
            <input type="submit" value="Send Message" className='bg-[#e4c131] w-[180px] rounded-md  my-3  p-2 text-black font-bold focus:ring-1' />
            </rev.Zoom>
            </form>
        
        </div>





        <div className='mx-2 md:col-span-2 flex justify-between'>
            <div>
            <rev.Zoom delay={200}>
                <h2 className='text-[#e4c131] font-bold text-lg'>Servises</h2>
                </rev.Zoom>
                <ul >
                <rev.Zoom delay={200}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Payroll Services</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={300}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Bookkeeping</li></a> 
                 </rev.Zoom>
                 <rev.Zoom delay={300}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Tax compliance certificate application</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={400}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Financial Reporting and forecasting</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={400}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>NSSF, NHIF and  PAYE filing</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={500}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Vat filing</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={500}>
                    <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Audit and accounting consultancy</li></a> 
                </rev.Zoom>
                </ul>
            </div>

            <div>
            <rev.Zoom delay={200}>
                <h2 className='text-[#e4c131] font-bold text-lg'>Quick Access</h2>
            </rev.Zoom>
                <ul>
                <rev.Zoom delay={300}>
                <a href='/'><li className='py-1 text-sm hover:text-[#00df9a]'>Home</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={400}>
                <a href='/Services'><li className='py-1 text-sm hover:text-[#00df9a]'>Services</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={500}>
                <a href='/About'><li className='py-1 text-sm hover:text-[#00df9a]'>About</li></a> 
                </rev.Zoom>
                <rev.Zoom delay={600}>
                <a href='#Contact'><li className='py-1 text-sm hover:text-[#00df9a]'>Contact</li></a> 
                </rev.Zoom>  
                </ul>
            </div>
            <div>
            <rev.Zoom delay={200}>
                <h2 className='text-[#e4c131] font-bold text-lg'>Company</h2>
                </rev.Zoom>
                <ul>
                <rev.Zoom delay={300}>
                    <li className='py-1 text-sm'>+254720565289</li>
                    </rev.Zoom>
                    <rev.Zoom delay={400}>
                    <li className='py-1 text-sm'>+254734565289</li>
                    </rev.Zoom>
                    <rev.Zoom delay={500}>
                    <li className='py-1 text-sm'>Upperhill, Nairobi.</li>
                    </rev.Zoom>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer