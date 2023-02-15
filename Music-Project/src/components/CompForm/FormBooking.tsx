import React from 'react'
// import  './Confierm.css'
import  './forms.css'
import { useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
function FormBooking() {
	const[location,setLocation]=React. useState('')
	const[event,setEvent]=React. useState('')
	const[time,setTime]=React. useState('')
	const[date,setDate]=React. useState('')
	const[note,setnote]=React. useState('')
	const navigate = useNavigate()
	const confirmBooking=()=>{
		localStorage.setItem('location',location)
		localStorage.setItem('event',event)
		localStorage.setItem('time',time)
		localStorage.setItem('date',date)
		localStorage.setItem('note',note)
		 navigate('/confirmBooking')
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
								<h2>BOOK .. MUSICIAN</h2>
								<p>Music gives a soul to the universe, wings to the mind, flight to the imagination.</p>
							</div>
						</div>
						<form>
						<br></br>
						 
              {/* start1 */}
			  <section className='all'>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label" > Location</span>
										<input className="form-control"   onChange={e=> setLocation(e.target.value)}required/>
									</div>
								</div>
							</div>
							<br></br>
              {/* end 1 */}
			  
				
              {/* start2 */}
              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Event Type </span>
										<input className="form-control" onChange={e=> setEvent(e.target.value)} required/>
									</div>
								</div>
				</div>
				
				<br></br>
              {/* end2 */}
					
              {/* start3 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Date</span>
										<input className="form-control" type="date"onChange={e=> setDate(e.target.value)} required />
									</div>
								</div>
							</div>
							<br></br>

              {/* end3 */}
			
			  <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Time </span>
										<select className='timeoption' value ={time} onChange={e=> setTime(e.target.value)}>
											<option></option>
											<option value="From 3 to 6 PM">From 3 to 6 PM</option>
											<option value="From 6 to 8 PM">From 6 to 8 PM</option>
											<option value='From 9 to 12 PM'>From 9 to 12 PM</option>
										</select>
										{/* <input className="form-control" onChange={e=> setEvent(e.target.value)} required/> */}
									</div>
								</div>
				</div>
				<br></br>
			

              {/* start4 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Note</span>
										<input className="form-control" onChange={e=> setnote(e.target.value)} />
									</div>
								</div>
							</div>
							<br></br> 
              {/* end4 */}
			  </section>
				
              {/* button */}
							<div className="form-btn">
								<button className="submit-btn"
								 onClick={confirmBooking}>SEND</button>
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

export default FormBooking