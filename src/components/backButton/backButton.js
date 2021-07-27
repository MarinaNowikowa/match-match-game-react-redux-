import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './backButton.css';

export const BackButton = ({ history, location }) => (
  <div className="back-button">
    {
      location.pathname === '/'
        ? <></>
        : (
          <button 
          type="button" 
          onClick={() => history.goBack()}
        >
           <FontAwesomeIcon icon={faArrowLeft} color="#F4B02B" style={{ width: '40px', height: '40px' }} />
        </button>
        )
    }

  </div>
);

export default withRouter(BackButton);