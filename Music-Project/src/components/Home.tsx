import React from 'react';
import { useNavigate } from 'react-router-dom';
import bookMusician from '../assets/bookMusician.jpeg'
import musicalInstruments from '../assets/musicalInstruments.jpeg'
import musicEducation from '../assets/musicEducation.jpeg'

export default function Home() {
  const navigate = useNavigate()
  const SignUp =()=>{
    navigate("/signUp")    
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
  return (
    <div>
      {/*----------header----------*/}
        <header className='headerBg'>
          <div className='headerContent'>
            <div>Music <i>for</i> 
            <br/> Everyone</div> 
            <button onClick={SignUp}> JOIN US</button>
          </div>    
        </header>
      
      {/*----------service section----------*/}
        <main>
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

        </main>

        <section>

        </section>

    </div>
  )
}