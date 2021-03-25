import React from "react";
import "./header.style.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class HeaderComponent extends React.Component {
    state = { active: false };
  
    handleClick = () => {
      const { active } = this.state;
      this.setState({ active: !active });
    };
  
    isActive(): boolean {
      const { active } = this.state;
      return active;
    }
    render() {
      return (
       <nav className="navbar background ">
         <div className="center navbar-brand ">
              <a className="navbar-item item-var ">item1</a>
              <a className="navbar-item item-var" >item2</a>
              <a className="navbar-item item-var">item3</a>
         </div>
       </nav>
      );
    }
  }
  
export default HeaderComponent;

interface Iuser {
    name:string;
    last_name:string
}

