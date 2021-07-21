import React from 'react';
import { Button } from "antd";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from 'react-twitter-embed';


import './Home.scss';
import Icons from '../../Icons';
import Socials from '../../components/Socials/Socials';
import Medium from '../../components/Medium/Medium';
import { useMediaQuery } from 'react-responsive';

import voters from '../../imgs/tellor_voters.png';
import dataproviders from '../../imgs/tellor_dataproviders.png';
import trbholders from '../../imgs/tellor_trbholders.png';
import productscreens from '../../imgs/tellor_productscreens.png';


function Home() {
  const isMobile = useMediaQuery({query: '(max-device-width: 1224px)'})
  const isTablet = useMediaQuery({query: '(min-device-width: 430px) and (max-device-width: 930px)'})
  const isDesktopXL = useMediaQuery({query: '(min-device-width: 1500px'})

  return (
    <div className="Home">
       <section className="HeroSection">
         <h1>we are tellor</h1>
         <p>A decentralized oracle network.</p>
          <Socials />
       </section>
       <section className="HowSection">
         <div className="Illus">
          <img src={trbholders} alt="trbholders" />
          <img src={dataproviders} alt="dataproviders" />
          <img src={voters} alt="voters" />
         </div>
        <h2>Tellor is a <strong>permissionless community</strong> of token holders, {isMobile ? null : <br />}data providers, and validators. Together, we cryptographically secure putting <strong>real world data on-chain</strong>.</h2>
         <Link to="/howitworks">
          <Button
              shape="round"
              size="large"
              className="greenbtn"
            >
            See how it works
            </Button>
          </Link>
       </section>

       <section className="IntegrateSection">
         <div className="boxinbox">
           <p>It takes 3 lines of code to integrate with Tellor for reliable, trustless data in your smart contracts.</p>
           <div className="code">
           <pre>
            <code>
              <p>{'import ‘./UsingTellor.sol’;'}</p>
              <br />
              <p>{'contract YourContract is UsingTellor{'}</p>
              <div className="indented">
                <p>{'constructor(address _userContract) UsingTellor(_userContract) public{'}</p>
                <p>{'}'}</p>
                <p>{'function getLastValue(uint256 _requestId) public view returns (bool ifRetrieve,'}</p>
                <p>{'uint256 value, uint256 _timestampRetrieved) {'}</p>
                <div className="indented">
                  <p>{'return getCurrentValue(_requestId);'}</p>
                </div>
                <p>{'}'}</p>
              </div>
              <p>{'}'}</p>
            </code>
           </pre>
           </div>
          <a href="https://docs.tellor.io/dev-documentation/quick-start" alt="link to documentation" target="_blank" rel="noopener noreferrer">
            <Button
              shape="round"
              size="large"
              className="whitebtn"
              >
              Developer documentation
            </Button>
          </a>
         </div>
       </section>
       <section className="ProductsSection">
         <h2>See the <strong>network in action</strong> in our Data Feed and Dispute Center.</h2>
         <img src={productscreens} alt="productscreens" />
         <p>Displaying live data, these apps visualise some of the essential concepts of the Tellor network.</p>
         <div className="two_btns">
         <a href="https://prices.tellorscan.com/" alt="link to Data Feed" target="_blank" rel="noopener noreferrer">
            <Button
              shape="round"
              size="large"
              className="greybtn"
              >
              visit Data Feed
            </Button>
          </a>
          <a href="https://disputes.tellorscan.com/" alt="link to Dispute center" target="_blank" rel="noopener noreferrer">
            <Button
              shape="round"
              size="large"
              className="greybtn"
              >
              visit Dispute Center
            </Button>
          </a>
         </div>
         <a className="txtlink" href="http://docs.tellor.io" alt="Tellor documentation" target="_blank" rel="noopener noreferrer">Learn more about these concepts</a>
       </section>
       <section className="FindUsSection">
       <h2>Find us out there.</h2>
        <div className="socialmedia">
          <Medium mediumRSSFeedLink={"https://medium.com/feed/@tellor"} />
          {isTablet ?
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="WeAreTellor"
            options={{height: 350}}
          />
          :
          <>
          {isDesktopXL ?
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="WeAreTellor"
            options={{height: 480}}
          />
          :
          
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="WeAreTellor"
            options={{height: 450}}
          />
          }
          </>
          }
        </div>
         <div className="two_btns">
         <a href="https://medium.com/tellor" alt="Tellor on Medium" target="_blank" rel="noopener noreferrer">
            <Button
              shape="round"
              size="large"
              className="whitebtn"
              ><Icons.Medium fill="#555555" />
              Tellor on Medium
            </Button>
          </a>
          <a href="https://twitter.com/WeAreTellor" alt="Tellor on Twitter" target="_blank" rel="noopener noreferrer">
            <Button
              shape="round"
              size="large"
              className="whitebtn"
              >            
              <Icons.Twitter fill="#555555" />
              Tellor on Twitter
            </Button>
          </a>
         </div>
         <a className="txtlink" href="https://discord.gg/n7drGjh" alt="Tellor on Discord" target="_blank" rel="noopener noreferrer"><Icons.Discord fill="#20F092" />Talk to us on Discord</a>
       </section>
    </div>
  );
}

export default Home;