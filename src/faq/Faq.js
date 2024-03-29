import React from "react";
import "./Faq.css";
import FaqListItem from "./FaqListItem.js";

function Faq() {
  return (
    <div className="faq__background">
      <div className="faq">
        <div className="faq__headline">
          <div className="faq__headline-placement">F.A.Q</div>
        </div>
        <div className="faq__questions">
          <FaqListItem
            headerText="How to contact with Customer Service?"
            questionAnswear="Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat. We try to reply quickly, so you need not to wait too long for a response!."
          />
          <FaqListItem
            headerText="App installation failed, how to update system information?"
            questionAnswear="Please read the documentation carefully. We also have some online video tutorials regarding this issue. If the problem remains, Please Open a ticket in the support forum"
          />
          <FaqListItem
            headerText="Website reponse taking time, how to improve?"
            questionAnswear="At first, Please check your internet connection. We also have some online video tutorials regarding this issue. If the problem remains, Please Open a ticket in the support forum."
          />
          <FaqListItem
            headerText="How do I create a account?"
            questionAnswear="If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes."
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
