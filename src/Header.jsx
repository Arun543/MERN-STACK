import React from "react";
import { NotificationContext } from "./App";

const Header = () => {
  return (
    <NotificationContext.Consumer>
    {(nCtx)=>{
        return(
    <div className="bordered">
      Header
      <span style={{color: "red"}}>Notification count: {nCtx.list.length}</span>
    </div>
  );
}}
</NotificationContext.Consumer>
  );
};
export default Header;
