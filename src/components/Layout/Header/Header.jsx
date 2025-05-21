import React from 'react';
import './Header.scss';
import config from '../../../config';

import goi_logo from '../../../assets/goi_logo.svg';
import clapLogo from '../../../assets/clapLogo.svg';
import pmfby_header_logo from '../../../assets/pmfby_header_logo.svg';
const baseUrl = config.baseURL;

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="row headerContent">
        <div className="col-lg-10">
          <div className="col-lg-6 d-flex gap-3">
            <img src={goi_logo} alt="GOI Logo" />
            <div className="verticalLine"></div>
            <img src={clapLogo} alt="CLAP Logo" />
          </div>
        </div>
        <div className="col-lg-2">
          <img
            src={pmfby_header_logo}
            alt="pmfby_header_logo"
            onClick={() => window.open(baseUrl)}
            className="pmfby_logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
