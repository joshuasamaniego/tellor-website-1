import React from 'react';
import { Button } from "antd";

import './Howitworks.scss';
import Icons from '../../Icons';
import { useMediaQuery } from 'react-responsive';

import infographic from '../../imgs/tellor_infographic.png';
import contract from '../../imgs/tellor_contract.png';
import query from '../../imgs/tellor_infographic_query.png';
import PoW from '../../imgs/tellor_infographic_PoW.png';
import valueoutput from '../../imgs/tellor_infographic_valueoutput.png';
import datafeed from '../../imgs/tellor_infographic_datafeed.png';
import dispute from '../../imgs/tellor_infographic_dispute.png';


function Howitworks() {
  const isMobile = useMediaQuery({query: '(max-width: 810px)'});
  window.scrollTo(0, 0);
  return (
    <div className="Howitworks">
      <section className="IlluSection">
        <div className="top">
          <h2>Here is how it works.</h2>
          {!isMobile && 
          <a href="https://docs.tellor.io/whitepaper/introduction" target="_blank" rel="noopener noreferrer">
          <Button
              shape="round"
              size="large"
              className="greenbtn"
            >
            Read the whitepaper
            </Button>
          </a>
            }
      </div>
        <img src={infographic} alt="infographic on how Tellor works"/>

      </section>
      <section className="BulletSection">

        <div className="Bullet">
          <img src={query} alt="Query-visual from infographic" />
          <div className="BulletTxt">
            <h2>Data gets queried.</h2>
            <p>Users can request specific data queries to be updated in the next block by adding a TRB tip.</p>
          </div>
        </div>

        <div className="Bullet">
          <img src={PoW} alt="PoW-visual from infographic" />
          <div className="BulletTxt">
            <h2>Queries become PoW.</h2>
            <p>Tellor’s smart contract manages the requests and issues the highest tipped queries for the data providers to mine along with a PoW challenge.</p>
          </div>
        </div>

        <div className="Bullet">
          <img src={valueoutput} alt="valueoutput-visual from infographic" />
          <div className="BulletTxt">
            <h2>Data providers turn PoW into data updates.</h2>
            <p>The network of staked data providers compete to mine the PoW challenge and submit the new data updates that were requested.</p>
          </div>
        </div>

        <div className="Bullet">
          <img src={datafeed} alt="datafeed-visual from infographic" />
          <div className="BulletTxt">
            <h2>Official data values as a readable on-chain price feed.</h2>
            <p>Out of the first 5 data providers to solve PoW and submit new data, the median value is determined by the Tellor contract as the official value and placed on-chain in a readable data feed.</p>
          </div>
        </div>

        <div className="Bullet">
          <img src={dispute} alt="dispute-visual from infographic" />
          <div className="BulletTxt">
            <h2>Submissions can be disputed.</h2>
            <p>All data submissions are subject to being disputed by token holders. The data provider’s stake is slashed if he’s successfully disputed.</p>
          </div>
        </div>

        <div className="whitepaper_btn">
          <p className="smoltxt">Want to dive deeper?</p>
          <a href="https://docs.tellor.io/whitepaper/introduction" target="_blank" rel="noopener noreferrer">
          <Button
              shape="round"
              size="large"
              className="greenbtn"
            >
            Read the whitepaper
            </Button>
          </a>
        </div>

      </section>
      <section className="ContractSection">
        <img src={contract} alt="contract-visual from infographic" />
        <h2>Tellor’s main contract arranges the query queue, provides the PoW to the miners and determines the medians: it is the heart of the network around which everything revolves.</h2>
        <a href="https://github.com/tellor-io/TellorCore/tree/master/contracts" alt="link to documentation" target="_blank" rel="noopener noreferrer">
            <Button
              shape="round"
              size="large"
              className="whitebtn"
              ><Icons.Github fill="#555555" />
              See Tellor.sol
            </Button>
          </a>
        {/* <a href="https://tellor.io" alt="Tellor contracts audit report" className="txtlink">Read the audit report</a> */}
      </section>
    </div>
  );
}

export default Howitworks;