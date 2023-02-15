import React from 'react';
// import  './Confierm.css'
import  './forms.css'
import { useNavigate } from 'react-router-dom'
export default function FormLearing() {

	const[location,setLocation]=React. useState('')
	const[level,setlevel]=React. useState('')
	const[time,setTime]=React. useState('')
	const[date,setDate]=React. useState('')
	const[note,setnote]=React. useState('')
	const navigate = useNavigate()
	const confirmLearning=()=>{
		localStorage.setItem('locationLearning',location)
		localStorage.setItem('levelLearning',level)
		localStorage.setItem('timeLearning',time)
		localStorage.setItem('noteLearning',note)
		 navigate('/confirmEducation')
	}


  return (
    <div>
            
    <div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="booking-form">
						<div className="booking-bg">
							<div className="form-header">
								<h2> MUSIC .. EDUCTION</h2>
								<p>Music gives a soul to the universe, wings to the mind, flight to the imagination.</p>
							</div>
						</div>
						<form>
							<br></br>
              {/* start1 */}
			  
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Location</span>
										<input className="form-control" onChange={e=> setLocation(e.target.value)}  />
									</div>
								</div>
							</div>
							<br></br>
              {/* end 1 */}

              {/* start2 */}
			  
			 
              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Level </span>
										<select className='timeoption' value ={time} onChange={e=> setTime(e.target.value)}>
											<option></option>
											<option value="BEGINNER">BEGINNER</option>
											<option value="INTERMEDIATE">INTERMEDIATE</option>
											<option value='ADVANCED'>ADVANCED</option>
										</select>
										{/* <input className="form-control" onChange={e=> setEvent(e.target.value)} required/> */}
									</div>
								</div>
				</div>
				<br></br>

              {/* end2 */}

			  				{/* ----------------- */}
								

				<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Time </span>
										<input className="form-control"   onChange={e=> setTime(e.target.value)} />
									</div>
								</div>
				</div>
 

				



				<br></br>




				{/* ----------------------- */}

              {/* start3 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label">Date</span>
										<input className="form-control" type="date" required  onChange={e=> setDate(e.target.value)}/>
									</div>
								</div>
							</div>
							
              {/* end3 */}
					<br></br>

              {/* start4 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Note</span>
										<input className="form-control"  onChange={e=> setnote(e.target.value)} required />
									</div>
								</div>
				</div>
							 
              {/* end4 */}




             
							<div className="form-btn">
								<button className="submit-btn" 
								onClick={confirmLearning}>SEND</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}