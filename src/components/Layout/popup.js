import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { Link } from 'react-router-dom';

const Popup = () => {
  return (
    <React.Fragment>
      <UncontrolledAlert className="card cookie-popup shadow py-3 px-4">
        <p className="text-muted mb-0 fs-6">
          This website collects <span className="text-success">cookies</span> to
          deliver better user experience.
        </p>
        <div className="cookie-popup-actions text-end">
          {/* <button>
                        <i className="uil uil-times text-dark fs-4"></i>
                    </button> */}
        </div>
      </UncontrolledAlert>
    </React.Fragment>
  );
};

export default Popup;
