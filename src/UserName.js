import React, { useState, useEffect } from "react";
import SimpleForm from "./SimpleForm.js";
function UserName({ userName, submitUserNameAndConnect }) {
  if (!userName) {
    return (
      <SimpleForm
        options={{
          label: "UserName: ",
          submitText: "Set UserName",
          submitFunc: submitUserNameAndConnect,
        }}
      />
    );
  } else {
    return (
      <div>
        <h2>UserName:{userName}</h2>
      </div>
    );
  }
}

export default UserName;
