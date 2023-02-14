import React from 'react'

function ConfirmLearning() {
    const name=localStorage.getItem('name')
	const location =localStorage.getItem('location')
	const event =localStorage.getItem('event')
	const time =localStorage.getItem('time')	
	const note =localStorage.getItem('note')
		
	


  return (
    <div>
            <div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="booking-form">
						<div className="booking-bg">
							<div className="form-header">
								<h2>EDUCATION A MUSIC</h2>
								{/* <p>- Your reservation has been confirmed successfully </p> */}
							</div>
						</div>
						<form>
              {/* start1 */}
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
									<br></br> 
									<br></br>
									Dear customer <span  style={{color:'#975A16',fontSize:'25px'}}>{name}</span> , <br></br>your reservation for EDUCATION A MUSIC service has been confirmed.<br></br>
                                    
									</div>
								</div>
							</div>
              {/* end 1 */}

						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default ConfirmLearning