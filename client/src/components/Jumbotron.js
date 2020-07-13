import React from 'react';
import Clock from 'react-live-clock';

function Jumbotron() {
   return (
      <div className="Jumbotron" style={{fontFamily: "Archivo"}}>
         <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
               <h1 className="display-4">Welcome to Phone Book app</h1>
               <p className="lead">You can manage your partners contact here! Happy Hacking!</p>
               <Clock format={'MMMM Mo YYYY, HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'} 
               style={{ fontSize: '30px'  }} />
            </div>
         </div>
      </div>
   );
}

export default Jumbotron;