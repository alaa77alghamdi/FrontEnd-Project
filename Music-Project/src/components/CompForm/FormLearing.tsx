import React from 'react';
import  './Confierm.css'
import  './forms.css'
export default function FormLearing() {
  return (
    <div>
            
    <div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="booking-form">
						<div className="booking-bg">
							<div className="form-header">
								<h2>Learning a MUSIC</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
							</div>
						</div>
						<form>
              {/* start1 */}
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Location</span>
										<input className="form-control" required />
									</div>
								</div>
							</div>
              {/* end 1 */}

              {/* start2 */}
              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Event </span>
										<input className="form-control"  required />
									</div>
								</div>
							</div>

              {/* end2 */}

              {/* start3 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Time</span>
										<input className="form-control" type="date" required />
									</div>
								</div>
							</div>

              {/* end3 */}

              {/* start4 */}

              <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<span className="form-label"> Note</span>
										<input className="form-control"  />
									</div>
								</div>
							</div>

              {/* end4 */}




              {/* button */}
				{/* <div  className='logIn-fieldset'>
			  <button type='submit'>Log In</button>
				</div> */}
							<div className="form-btn">
								<button className="submit-btn">SEND</button>
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