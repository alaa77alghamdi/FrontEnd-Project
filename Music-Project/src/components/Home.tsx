import React from 'react';
import { useNavigate } from 'react-router-dom';

import bookMusician from '../assets/bookMusician.jpeg'
import musicalInstruments from '../assets/musicalInstruments.jpeg'
import musicEducation from '../assets/musicEducation.jpeg'

import About from './About&Con/About';

export default function Home() {
  const navigate = useNavigate()
  const SignUp =()=>{
    navigate("/signUp")    
  }
  const About =()=>{
    navigate("/about")    
  }
  const MusicEducation =()=>{
    navigate("/musicEducation")    
  }
  const BookMusician =()=>{
    navigate("/bookMusician")    
  }
  const MusicalInstruments =()=>{
    navigate("/musicalInstruments")    
  }
  return (
    <div>
      {/*----------HEADER----------*/}
      <header className='headerBg'>
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
            <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
            </p>
            <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
              No matter what culture we're from, everyone loves music.
            </p>
            <button onClick={About}>READ MORE</button>
          </div>   
        </section>

        {/*----------service divs----------*/}   
        <section className='serviceSectionContainer'>

          <div className='serviceSection'>
            <img src={musicEducation} alt="" />
            <div className='serviceContent'>
              <h2>Music Education</h2>
              <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <button onClick={MusicEducation}>READ MORE</button>
            </div>
          </div>

          <div className='serviceSection'>
            <div className='serviceContent right'>
              <h2>Book A Musician</h2>
              <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <button onClick={BookMusician}>READ MORE</button>
            </div>
            <img src={bookMusician} alt="" />
          </div>

          <div className='serviceSection'>
            <img src={musicalInstruments} alt="" />
            <div className='serviceContent'>
              <h2>Musical Instruments</h2>
              <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
                No matter what culture we're from, everyone loves music.
              </p>
              <p>I think music in itself is healing. It's an explosive expression of humanity. It's something we are all touched by. 
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
            <input type='email' placeholder='Enter Your Email..' ></input>
            <button>SUBSCRIBE</button>
          </div> 
        </section>

      </main>
    </div>
  )
}