import React, { useEffect } from 'react';
import {EditUserProfile, ChangePasswordForm} from './components/LoginForm/LoginForm'

const fakeRequest = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {message: 'success'};
};

function App() {

  useEffect(() => {
    console.log("useEffect")
    const request = async () => {
      const {message} = await fakeRequest()
      console.log(message)
    }
    request()
  })
  return (
    <div className="App">
      {/* <EditUserProfile></EditUserProfile> */}
      <ChangePasswordForm></ChangePasswordForm>
    </div>
  );
}

export default App;
