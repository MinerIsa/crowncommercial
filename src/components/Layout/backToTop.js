import React from 'react';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

const BackToTop = () => {
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    backToTopButton();
  };

  function backToTopButton() {
    var ele = document.getElementById('back-to-top');
    if (ele) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        ele.style.display = 'block';
      } else {
        ele.style.display = 'none';
      }
    }
  }
  return (
    <React.Fragment>
      <Link
        to="#"
        onClick={() => toTop()}
        id="back-to-top"
        className="btn btn-icon back-to-top"
        style={{ display: 'none', backgroundColor: '#2f55d4' }}
      >
        <FeatherIcon icon="arrow-up-circle" className="icons" />
      </Link>
    </React.Fragment>
  );
};

export default BackToTop;
