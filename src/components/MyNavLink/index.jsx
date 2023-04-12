import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class MyVavLink extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavLink activeClassName='txt' {...this.props} />
      </div>
    );
  }
}

export default MyVavLink;
