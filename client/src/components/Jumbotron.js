import React from 'react';
import Clock from 'react-live-clock';

function Jumbotron() {
   return (
      <div className="Jumbotron">
         <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
               <h1 className="display-4">Welcome to Phone Book app</h1>
               <p className="lead">You can manage your partners contact here! Happy Hacking!</p>
               <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'} />
            </div>
         </div>
      </div>
   );
}

export default Jumbotron;