import React from 'react';
import './Bounties.scss';
import { Button } from "antd";

import Icons from '../../Icons';


function Bounties() {
  window.scrollTo(0, 0);
  return (
    <div>
      <section className="contentSection">
        <div className="contentTxt">
          <h2>Bounties tellor</h2>
        </div>
      </section>

      <section className="ButtonSection">  
        <p className="smoltxt">Want to reach out?</p>
        <a href="https://discord.gg/n7drGjh" alt="link to Tellor on Discord">
          <Button
            shape="round"
            size="large"
            className="whitebtn"
            ><Icons.Discord fill="#555555" />
            Talk to us on Discord
          </Button>
        </a>
      </section>
    </div>
  );
}

export default Bounties;