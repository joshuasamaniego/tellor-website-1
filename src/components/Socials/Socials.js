import React from 'react';
import './Socials.scss';

import Icons from '../../Icons';


function Socials() {
  return (
    <div className="Socials">
           <a href="https://discord.gg/n7drGjh" alt="Tellor on Discord" target="_blank" rel="noopener noreferrer"><Icons.Discord fill="white" /></a>
           <a href="https://t.me/tellor" alt="Tellor on Telegram" target="_blank" rel="noopener noreferrer"><Icons.Telegram fill="white" /></a>
           <a href="https://github.com/tellor-io" alt="Tellor on Github" target="_blank" rel="noopener noreferrer"><Icons.Github fill="white" /></a>
           <a href="https://medium.com/tellor" alt="Tellor on Medium" target="_blank" rel="noopener noreferrer"><Icons.Medium fill="white" /></a>
           <a href="https://twitter.com/WeAreTellor" alt="Tellor on Twitter" target="_blank" rel="noopener noreferrer"><Icons.Twitter fill="white" /></a>
    </div>
  );
}

export default Socials;