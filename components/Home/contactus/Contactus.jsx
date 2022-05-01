
import { ButtonDark } from "../../../theme/button";
import React from "react";
import { Section } from "./Style";
import { useQuery, gql } from "@apollo/client";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import services from '../../../json/services.json'
import solutions from '../../../json/solutions.json'
function Contactus() {
  const notify = () => toast("Thanks for submission");



  
  return (
    <Section>
      <ToastContainer
       position="bottom-right"
      />
      <div className="flex">
        <div className="flex-left">
          <div className="top">
            <span>How Can We Help You?</span>

            <h2>Let’s Work Together</h2>
          </div>
        </div>

        <div className="flex-right">
          <form>
            <h2>Contact Us</h2>

            <input placeholder="Name*"></input>

            <input placeholder="Email*"></input>
            <input placeholder="Phone*"></input>
            <input placeholder="Organization*"></input>

            <select name="cars" id="cars">
             <option>Solutions</option>
              {services.map(t =>
              <option  key={t.id} value="volvo">{t.servicesName}</option>
              )

          }
 
</select>

<select name="cars" id="cars">
             <option>Services</option>
              {solutions.map(t =>
              <option  key={t.id} value="volvo">{t.solutionsName}</option>
              )

          }
 
</select>
      
      



            <textarea placeholder="Message*"></textarea>
            <ButtonDark  type="button"  onClick={ ()  => notify ()} >Send</ButtonDark>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default  Contactus
