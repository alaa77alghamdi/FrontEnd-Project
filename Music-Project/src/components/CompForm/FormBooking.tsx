import React from 'react'
import  './Confierm.css'
import  './forms.css'
import { useNavigate } from 'react-router-dom'
function FormBooking() {
	const[location,setLocation]=React. useState('')
	const[event,setEvent]=React. useState('')
	const[time,setTime]=React. useState('')
	const[note,setnote]=React. useState('')
	const navigate = useNavigate()
	const confirmBooking=()=>{
		localStorage.setItem('location',location)
		localStorage.setItem('event',event)
		localStorage.setItem('time',time)
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
								<h2>BOOKING a MUSIC</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
							</div>
						</div>
						<form>
              {/* start1 */}
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Location</span>
										<input className="form-control" required  onChange={e=> setLocation(e.target.value)}/>
									</div>
								</div>
							</div>
              {/* end 1 */}

              {/* start2 */}
              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Event </span>
										<input className="form-control"  required onChange={e=> setEvent(e.target.value)}/>
									</div>
								</div>
							</div>

              {/* end2 */}

              {/* start3 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Time</span>
										<input className="form-control" type="date" required  onChange={e=> setTime(e.target.value)}/>
									</div>
								</div>
							</div>

              {/* end3 */}

              {/* start4 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Note</span>
										<input className="form-control" onChange={e=> setnote(e.target.value)} />
									</div>
								</div>
							</div>

              {/* end4 */}

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