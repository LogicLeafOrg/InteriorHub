import React from 'react'

export default function Contact_Form() {
  return (
    <form action="">
      <div className="row">
        <div className="col-md-12">
          <div className="input-group1">
            <input type="text" id='name' />
            <label className="label-slide" htmlFor="name">Full Name</label>

          </div>

        </div>
        <div className="col-md-6">
          <div className="input-group1">
            <input type="email" id='email' required />
            <label className="label-slide" htmlFor="email">Email Address</label>

          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group1">
            <input type="number" id='phone' required />
            <label className="label-slide" htmlFor="phone">Phone Number</label>

          </div>
        </div>

        <div className="col-md-12">
          <div className="input-group1">
            <input type="textarea" id='mas' className='yourmasinp' />
            <label className="label-slide" htmlFor="mas">Your Message</label>

          </div>

        </div>
        <div className="col-md-12">
          <div className="submit-btn-wrapper">
            <div className="nav-contact">
              <a href="#">SUBMIT YOUR MESSAGE</a>
            </div>

          </div>

        </div>


      </div>

    </form>
  )
}
