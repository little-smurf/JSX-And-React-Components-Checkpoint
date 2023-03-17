import './App.css';
import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';



// Headline message
const Headline = () => {
  return <h1>My first Root</h1>
  }
  // Component that receives parameters(props)
const Greetings = (props) => {
  return <p>You will love it {props.name}.</p>
  }
function App(){
  return (
    <div>
    <Headline />
    <p>Welcome to the React world!</p>
    <Greetings name="Mariem" />
    <ProfilePhoto />
    <FullName />
    <Address />
    </div>
    )
}
export default App;