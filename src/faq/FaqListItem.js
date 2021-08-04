import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FaqListItem = (props) => {
  const [isCustomerContactOpen, setIsCustomerContactOpen] = useState(false);

  const toggleModal = () => {
    setIsCustomerContactOpen(!isCustomerContactOpen);
  };

  return (
    <div className="faq__customer-question-template" onClick={toggleModal}>
      <div className="faq__customer-contact-closed">
        <div className="faq__question-and-icon-positioning">
          <div className="faq__customer-question-text-styling">
            {props.headerText}
          </div>
          <div className="faq__customer-contact-icon">
            {isCustomerContactOpen === true ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </div>
      </div>
      {isCustomerContactOpen === true ? (
        <div className="text-positioning">
          <div className="text">{props.questionAnswear}</div>
        </div>
      ) : null}
    </div>
  );
};

export default FaqListItem;
