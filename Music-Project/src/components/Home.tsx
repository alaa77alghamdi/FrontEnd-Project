import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import bookMusician from '../assets/bookMusician.jpeg'
import musicalInstruments from '../assets/musicalInstruments.jpeg'
import musicEducation from '../assets/musicEducation.jpeg'
import cello from '../assets/cello.mp4';
import About from './About&Con/About';
import swal from 'sweetalert2'


export default function Home() {
  const navigate = useNavigate()
  const SignUp =()=>{
    navigate("/signUp")    
  }
  const About =()=>{
    navigate("/about")    
  }
  const MusicEducation =()=>{
    document.documentElement.scrollTop=0;
    navigate("/musicEducation")    
  }
  const BookMusician =()=>{
    document.documentElement.scrollTop=0;
    navigate("/bookMusician")    
  }
  const MusicalInstruments =()=>{
    document.documentElement.scrollTop=0;
    navigate("/musicalInstruments")    
  }
  const [ email , setEmail ] = useState<any>()
  const HomePage =()=>{
    if(email == null) {
      // alert("Please, type an email for subscribe our news letter!")
      swal.fire({
        icon: 'info',
        text: "Please, type an email for subscribe our news letter!",
        iconColor: '#221409',
        showCloseButton: true,
        // showCancelButton: true,
        focusConfirm: false,
        background: '#f3f1e8',
        confirmButtonColor: '#221409',
        cancelButtonColor:'#221409',
        confirmButtonText: 'OK',
        // cancelButtonText:
        //   'Cancel',
      })
    } else {
      //alert("Thank You For Subscribing!")
      swal.fire({
        icon: 'success',
        text: "Thank You For Subscribing!",
        iconColor: '#221409',
        showCloseButton: true,
        focusConfirm: false,
        background: '#f3f1e8',
        confirmButtonColor: '#221409',
        confirmButtonText: 'OK',
      })
      // document.documentElement.scrollTop = 0; 
      // location.reload();
    }  
  }
  return (
    <div>
      {/*----------HEADER----------*/}
      <header className='headerBg'>
        <video autoPlay loop muted>
          <source src={cello} type='video/mp4'/>
        </video>
        <div className='headerContent'>
          <div>Music <i>for</i> 
          <br/> Everyone</div> 
          <button onClick={SignUp}> JOIN US</button>
        </div>    
      </header>

      {/*----------MAIN----------*/} 
      <main>
      
        {/*----------about section----------*/}
        <section className='aboutSectionBg'>
          <div className='aboutSection'>
            <h2> <i>Welcome to </i> The Musical Community</h2>
            <p>We are a team that worked on making a platform  that combines booking musicians for event and teaching music to everyone, 
              as well as selling used musical instruments to whomever needs them. Our goal is for our site to reach all those who are interested in music and its arts
            </p>
            <p>We think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
              No matter what culture we're from, everyone loves music.
            </p>
            <button onClick={About}>READ MORE</button>
          </div>   
        </section>

        {/*----------service divs----------*/}   
        <section className='serviceSectionContainer'>
          <h2>OUR SERVICES</h2>

          <div className='serviceSection'>
            <img src={musicEducation} alt="" />
            <div className='serviceContent'>
              <h4>Music Education</h4>
              <p>Our goal is to combine the fun of learning and the arts of music with the best teachers, so that students can benefit from a wonderful musical experience.
              </p>
              <p>We think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <button onClick={MusicEducation}>READ MORE</button>
            </div>
          </div>

          <div className='serviceSection reverseServiceSection'>
            <div className='serviceContent right'>
              <h4>Book A Musician</h4>
              <p>Hire musicians, guitarists, saxophonists, harpists, and violinists, for weddings and events. Book today our musicians for your event, party, or wedding in a few clicks!</p>
              <p>We think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <button onClick={BookMusician}>READ MORE</button>
            </div>
            <img src={bookMusician} alt="" />
          </div>

          <div className='serviceSection'>
            <img src={musicalInstruments} alt="" />
            <div className='serviceContent'>
              <h4>Musical Instruments</h4>
              <p>Here is a Musical Instruments Store where you will shop our selection of instruments, 
                musical equipment & supplies that have been used before and are still in good condition. Get the lowest prices & free shipping on most orders.
              </p>
              <p>We think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <button onClick={MusicalInstruments}>READ MORE</button>
            </div>
          </div>
        </section>   

        {/*----------news letter section----------*/}
        <section className='newsLetterSectionContainer'>
          <div className='newsLetterSection'>
            <h2>NEWS LETTER</h2>
            <p>Keep up our latest news. Subscribe our news letter </p>
            <input type='email' placeholder='Enter Your Email..' onChange={e =>{setEmail(e.target.value)}} required></input>
            <button onClick={HomePage}>SUBSCRIBE</button>
          </div> 
        </section>

      </main>
    </div>
  )
}