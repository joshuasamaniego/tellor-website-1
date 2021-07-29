import React from "react";
import "./About.scss";
import { Button } from "antd";

import Icons from "../../Icons";

function About() {
  window.scrollTo(0, 0);
  return (
    <div>
      <section className="contentSection">
        <div className="contentTxt">
          <h2>About tellor</h2>
          <div className="extramarginleft">
            <p>
              The Tellor founding team,{" "}
              <a
                href="https://www.linkedin.com/in/nicholas-fett/"
                alt="Nicholas Fett on Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nicholas Fett
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/brendaloya/"
                alt="Brenda Loya on Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brenda Loya
              </a>
              , and{" "}
              <a
                href="https://www.linkedin.com/in/zemrose/"
                alt="Mike Zemrose on Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael Zemrose
              </a>
              , began the journey of Tellor in early 2018. But, Tellor is much
              more than the team, and much more than just an oracle. It’s a
              permissionless community of data providers, validators, and token
              holders that crypto-economically secure the process of putting
              real world data on-chain. Only together do WE make Tellor what it
              is.
            </p>
            <h3>We didn’t choose oracles.</h3>
            <p>
              We got into this space because we were excited at the ability of
              this new technology to create change. You can now have a sound
              digital money, sovereignty over your data, applications that can’t
              be stopped or censored by some bureaucracy.
              <br />
              <br />
              If you didn’t know, we were originally building Tellor as a tool
              for Daxia (our former decentralized derivatives protocol). When
              the implementation was near complete though, we knew we had
              something special and decided that we would be better off running
              with Tellor than Daxia. It was probably meant to be though. Given
              our team’s background in data reporting, the regulatory status of
              our country (we all live near Washington, DC), and even the state
              of the ecosystem, oracles were/are a more pressing need; we’re
              happy it fell in our laps. Even though we originally built Tellor
              for Daxia, oracles are a broad enough field and technology to
              really encapsulate most of the building blocks when it comes to
              data and smart contracts.
              <br />
              <br />
              This means that there’s a whole lot more we can do with Tellor
              and, as stated in our ‘Future vision and beliefs’ article, we plan
              on building it all while holding true to our guiding principles:
              <br />
              <br />
              <span className="bolder">
                Build things that make sense.
                <br />
                Build things that you can build.
                <br />
                Build the system that you want to be a part of.
              </span>
            </p>
            <Icons.Line />
          </div>
        </div>
      </section>

      <section className="ButtonSection">
        <p className="smoltxt">Want to reach out?</p>
        <a href="https://discord.gg/n7drGjh" alt="link to Tellor on Discord">
          <Button shape="round" size="large" className="whitebtn">
            <Icons.Discord fill="#555555" />
            Talk to us on Discord
          </Button>
        </a>
      </section>
    </div>
  );
}

export default About;
