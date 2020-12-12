import React, { useState } from "react";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";


const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      <div>
      {
        submittedForm ? (
          <div className={styles.text}>
            <h2 className={styles.text}>Please review your shipping details below</h2><br />
            Your First name: <b className={styles.reviewtext}>{submittedForm.get("myFirstName")}</b>.<br /><br />
            Your Last Name: <b className={styles.reviewtext}>{submittedForm.get("myLastName")}</b>.<br /><br />
            Your email ID: <b className={styles.reviewtext}>{submittedForm.get("myEmailID")}</b>.<br /><br />
            Your Phone Number:<b className={styles.reviewtext}>{submittedForm.get("myPhone")}</b>.<br /><br />
            Shipping Address Line 1: <b className={styles.reviewtext}>{submittedForm.get("myAddressLine1")}</b>.<br /><br />
            Shipping Address Line 2: <b className={styles.reviewtext}>{submittedForm.get("myAddressLine2")}</b>.<br /><br />
            City of the Shipping Address: <b className={styles.reviewtext}>{submittedForm.get("myCity")}</b>.<br /><br />
            State of the Shipping Address:<b className={styles.reviewtext}>{submittedForm.get("myState")}</b>.<br /><br />
            
            <Link to="/thankyou"> 
            <button className={styles.button} type="button">Submit</button><br /><br />
            </Link>
          </div>
        ) : (
         <div className={styles.formdetails}>
            <form onSubmit={onSubmit} className={styles.text}>
            <br /><label htmlFor="name">Your First Name: </label><br />
            <input  className={styles.space} type="text" name="myFirstName" id="myFirstName" required/><br /><br />

            <label htmlFor="myTextId">Your Last Name:  </label><br />
            <input className={styles.space} type="text" name="myLastName" id="myLastName" required/><br /><br />

            <label htmlFor="myTextId">Your Email ID :  </label><br />
            <input className={styles.space} type="email" name="myEmailID" id="myEmailID" placeholder="sou@example.com" required/><br /><br />

            <label htmlFor="myTextId">Your Phone No : </label><br />
            <input className={styles.space} type="tel" name="myPhone" id="myPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder= "123-345-6785" required/><br /><br />

            <label htmlFor="myTextId">Address Line 1 (required, 500 characters max): </label>
            <input  type="text" name="myAddressLine1" id="myAddressLine1" className={styles.details} maxLength="500" required/><br /><br />

            <label htmlFor="myTextId">Address Line 2 (500 characters max): </label>
            <input type="text" name="myAddressLine2" id="myAddressLine2" className={styles.details} maxLength="500"/><br /><br />

            <label htmlFor="myTextId">City where the address is located :  </label>
            <select className={styles.dropdown} name="myCity" id="myCity">
              <option value="San Francisco">San Francisco</option>
              <option value="Boston">Boston</option>
              <option value="Seattle">Seattle</option>
              <option value="Charlotte">Charlotte</option>
            </select><br /><br />

            <label htmlFor="myTextId">State where the address is located:  </label>
            <select className={styles.dropdown} name="myState" id="myState">
              <option value="CA">California</option>
              <option value="MA">Massachusetts</option>
              <option value="WA">Washington</option>
              <option value="NC">North Carolina</option>
            </select><br /><br />
            <input className={styles.button} type="submit" value="Checkout" /><br /><br />
          </form>
        </div>
        )
      }
    </div>
    </div>
  )
}

export default Form
