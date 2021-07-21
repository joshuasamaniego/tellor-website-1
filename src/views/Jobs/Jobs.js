import React from 'react';
import './Jobs.scss';
import { Button } from "antd";

import Icons from '../../Icons';


const Jobs = () => {

  const activeJobs = [
    {
      title: "Golang Developer",
      blurb: "Are you interested in building bleeding edge products in the crypto/web3 space?  Are you excited by the prospect of growing with a small tight-knit team? Tellor is looking for a developer to join the team and help us maintain and develop the backbone of our oracle protocol - Telliot (https://github.com/tellor-io/telliot). The ideal candidate for this role at Tellor will be a Golang developer of moderate experience level who's ready to leave the rat race and take the leap into the crypto industry.",
      responsibilities: [
        "Maintaining and further development of the Telliot"
      ],
      qualifications: [
        "Prior experience in web3 is a plus but not at all required.  We want someone that knows Go well but is excited and willing to learn the rest. ",
        "1+ years experience developing in Golang",
        "Loves documentation",
        "Works well with a team",
        "Flexible and willing to step in where needed"
      ]
    },
    {
      title: "Solidity Developer",
      blurb: "Are you interested in building bleeding edge products in the crypto/web3 space?  Are you excited by the prospect of growing with a small tight-knit team? Tellor is growing and looking for another Solidity developer to fill out the team.  We are open to both junior and more experienced candidates.  Ultimately, we are looking for someone passionate and excited about web3 and willing to learn and grow along with us as we make Tellor the best oracle in crypto.",
      responsibilities: [
        "Help develop the next iteration of the Tellor - Tellor X.",
        "Assist user integrations",
        "Assist/lead layer 2 contract deployments"
      ],
      qualifications: [
        "1+ years experience developing in Solidity",
        "Loves documentation",
        "Works well with a team",
        "Flexible and willing to step in where needed",
        "comfortable providing technical support to users",
        "Able to automate and monitor tasks"
      ]
    },

  ]

  window.scrollTo(0, 0);
  return (
    <div className="Jobs">
      <section className="contentSection">
        <div className="contentTxt">
          <h2>Jobs</h2>
          <p>Tellor is growing, and this wagon needs more wheels!<br /><br />
          Tellor is a decentralized data provider built on Ethereum.  We help power smart contract applications in a completely decentralized fashion and are looking for the right people to expand the capabilities of the team. 
          <br /><br />We're looking for individuals with:
          <ul>
            <li>Solid work ethic - you are motivated to learn and work independently</li>
            <li>Dependability - you meet deadlines and articulate roadblocks</li>
            <li>Problem solver - you can debug and troubleshoot code</li>
            <li>Passion - you enjoy what you do and working with new technologies and building the new economy</li>
            <li>Flexibility - you want to learn new things and jump on any task that needs to be done</li>
          </ul>
          </p>
          <div className="extrawhitespace"></div>

          {activeJobs.map((job) => {
            return(
              <div className="jobItem">
                {job.title?
                <p>{job.title}</p> : null }
                {job.title === "Golang Developer"?
                <p>Are you interested in building bleeding edge products in the crypto/web3 space?  Are you excited by the prospect of growing with a small tight-knit team? <br />
                Tellor is looking for a developer to join the team and help us maintain and develop the backbone of our oracle protocol - Telliot (<a alt="https://github.com/tellor-io/telliot" target="_blank" rel="noopener noreferrer" href="https://github.com/tellor-io/telliot">https://github.com/tellor-io/telliot</a>). <br /> 
                The ideal candidate for this role at Tellor will be a Golang developer of moderate experience level who's ready to leave the rat race and take the leap into the crypto industry.
                </p>
                :
                <>
                {job.blurb ?
                <p> {job.blurb} </p>: null}
                </>
                }

                {job.skills ?
                <p>Desired Skillset:
                <ul>
                {job.skills.map(skill => {
                  return(<li>{skill}</li>)
                })}
                </ul>
                </p>
                : null}

                {job.responsibilities ?
                <p>Responsibilities:
                <ul>
                {job.responsibilities.map(responsibility => {
                  return(<li>{responsibility}</li>)
                })}
                </ul>
                </p>
                : null}

                {job.qualifications ?
                <p>Qualifications:
                <ul>
                {job.qualifications.map(qualification => {
                  return(<li>{qualification}</li>)
                })}
                </ul>
                </p>
                : null}

                {job.bonus ?
                <p>Bonus Points:
                <ul>
                {job.bonus.map(skill => {
                  return(<li>{skill}</li>)
                })}
                </ul>
                </p>
                : null}
                <p>If you are interesting in applying please send an email with your resume/cover letter to <a href={"mailto:jobs@tellor.io?subject=Application "+job.title}>jobs@tellor.io</a></p>
                <Icons.Line />
              </div>
              )
          })}


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

export default Jobs;