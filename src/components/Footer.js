import React from 'react'
import {Link} from "react-scroll"
import { Icon, InlineIcon } from '@iconify/react';
import angleDoubleUp from '@iconify-icons/fa/angle-double-up';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="backToTop">
          <Link smooth={true} offset={-125} to="home">
            <Icon className="doubleUp" icon={angleDoubleUp}/>
            <br></br>
            <h5>Back to top</h5>
          </Link>
        </div>
        <p className="bold">Copyright © 2021 All Rights Reserved. Edward Cho</p>
      </div>
    </div>
  )
}

export default Footer