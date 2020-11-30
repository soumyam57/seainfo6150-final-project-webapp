import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div classname={styles.formStyle}>
      <div>
      {
        submittedForm ? (
          <div className={styles.text}>
            <h2 className={styles.text}>Please review your shipping details below</h2>
            Your First name: <b>{submittedForm.get("myFirstName")}</b>.<br />
            Your Last Name: <b>{submittedForm.get("myLastName")}</b>.<br />
            Your email ID: <b>{submittedForm.get("myEmailID")}</b>.<br />
            Your Phone Number:<b>{submittedForm.get("myPhone")}</b>.<br />
            Shipping Address Line 1: <b>{submittedForm.get("myAddressLine1")}</b>.<br />
            Shipping Address Line 2: <b>{submittedForm.get("myAddressLine2")}</b>.<br />
            City of the Shipping Address: <b>{submittedForm.get("myCity")}</b>.<br />
            State of the Shipping Address:<b>{submittedForm.get("myState")}</b>.<br />
            <button type="button">Submit</button><br /><br />
          </div>
        ) : (
         <div className={styles.formdetails}>
            <form onSubmit={onSubmit} className={styles.text}>
            <br /><label htmlFor="name">Your First Name: </label>
            <input className={styles.space} type="text" name="myFirstName" id="myFirstName" required/><br /><br />

            <label htmlFor="myTextId">Your Last Name:  </label>
            <input className={styles.space} type="text" name="myLastName" id="myLastName" required/><br /><br />

            <label htmlFor="myTextId">Your Email ID :  </label>
            <input className={styles.space} type="text" name="myEmailID" id="myEmailID" required placeholder="soumya@gmail.com"/><br /><br />

            <label htmlFor="myTextId">Your Phone No : </label>
            <input className={styles.space} type="text" name="myPhone" id="myPhone" required/><br /><br />

            <label htmlFor="myTextId">Address Line 1 (required, 500 characters max): </label>
            <input  type="text" name="myAddressLine1" id="myAddressLine1" className={styles.details} required/><br /><br />

            <label htmlFor="myTextId">Address Line 2 (500 characters max): </label>
            <input type="text" name="myAddressLine2" id="myAddressLine2" className={styles.details}/><br /><br />

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
