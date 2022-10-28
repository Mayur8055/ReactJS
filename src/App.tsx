import React from 'react';
import logo from './amazon.png';
import ColorComponents from './stylebinding'
import './App.css';

let C1 = () => { return (<p>© CopyRight All Rights Reserved</p>)}
let user: any = {username:'admin',pwd:'nimda'}
let C2 =() => { return (<p>Username :{user.username} |  Password : {user.pwd}</p>)}

let C3 =() => { return (<img src={logo}/>)}

let C4 =() => {return (
  <div>
    <input type ='text' value={user.username} placeholder="Username"/>
    <br />
    <input type="password" value={user.pwd} placeholder="Password" />
    <br />
    <button>Login</button>
  </div>
)
}

function App(){
  return (
    <>
    <C3/>
    <hr />
    <h1>Welcome To Amazon</h1>
   <a href='https://www.amazon.in/'>Home | </a>
   <a href='https://www.amazon.in/'>Contact us</a>
    
    <hr />
    <C4/>
    <br />
     <ColorComponents/>
     <C1/>
     
        </>
  )
}

export default App


