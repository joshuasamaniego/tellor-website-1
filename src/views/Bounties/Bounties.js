import React, { useState, useEffect } from "react";
import "./Bounties.scss";
import Icons from "../../Icons";
//Ant D imports
import { Button, Table,Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
//Component Imports
import BountiesHeader from "./BountiesHeader.js";
import ClaimModal from "./ClaimModal.js";

const { Panel } = Collapse;

function Bounties() {
  let initialJobForm = {
    jobTitle: "",
    jobType: "",
  };

  const [rawData, setRawData] = useState();
  const [bountiesData, setBountiesData] = useState();
  const [jobForm, setJobForm] = useState(initialJobForm);
  const [claimerPanels, setPanelsArr] = useState([]);

  //useEffect to populate the table with data from the Sheety API
  useEffect(() => {
    const bountiesUrl =
      "https://api.sheety.co/ed9240fc3b351479d6da738838e4133d/tellorBountiesProgram/bounties";
    fetch(bountiesUrl)
      .then((response) => response.json())
      .then((result) => {
        setRawData(result.bounties);
        dataHelper(result.bounties);
      });
  }, []);

  //DataHelper function to get Sheety API data into proper form for the AntD Table
  const dataHelper = (unformattedData) => {
    let dataArray = [];
    let randomBountyObj = {
      key: 100,
      title: "Suggest A Bounty",
      jobType: "Various",
      tributes: "Various",
      available: "Available",
      description:
        "Have a suggestion? After you claim this bounty, let us know about your idea on how to expand Tellor in the comments section!",
    };
    unformattedData.forEach((data) => {
      let obj = {
        key: data.id,
        title: data.bountiesTitle ? data.bountiesTitle : null,
        jobType: data.bountiesType ? data.bountiesType : null,
        tributes: data.tributes ? data.tributes : null,
        available: data.available ? data.available : null,
        description: data.description ? data.description : null,
        skills: data.skills ? data.skills : null,
        notes: data.notes ? data.notes : null,
      };
      if (obj.title && obj.jobType) {
        dataArray.push(obj);
      }
    });
    dataArray.push(randomBountyObj);
    setBountiesData(dataArray);
  };

  //AntD Column Logic
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: '40%',
    },
    {
      title: "Type",
      dataIndex: "jobType",
      sorter:
      {
        compare: (a, b) => a.jobType.localeCompare(b.jobType),
        multiple: 1,
      },
      width: '25%',
    },
    {
      title: "Availability",
      dataIndex: "available",
      width: '15%',
    },
    {
      title: "Reward",
      dataIndex: "tributes",
      width: '15%',
      sorter:
      {
        compare: (a, b) => a.tributes - b.tributes,
        multiple: 1,
      },
    },
  ];

  //Claim Modal Function
  // const openClaimModal = () => {
  //   const claimModal = document.getElementById("claimModal");
  //   claimModal.style.display = "block";
  // };
  //Window function to help close modals
  // window.onclick = (event) => {
  //   const claimModal = document.getElementById("claimModal");
  //   const modal = document.getElementById("Modal");
  //   if (event.target === claimModal) {
  //     claimModal.style.display = "none";
  //   } else if (event.target === modal) {
  //     modal.style.display = "none";
  //   }
  // };

  const addtoClaimerPanels = (e) => {
    const arr = [...claimerPanels];
    if(arr.includes(e)){
        const index = arr.indexOf(e);
        if (index > -1) {
            arr.splice(index, 1);
        }
    } else {
        arr.push(e);
    }
    setPanelsArr(arr);
}

  return (
    <div className="Bounties">
      <section className="contentSection">
        <BountiesHeader rawData={rawData} />
        <Table
          pagination={false}
          columns={columns}
          onRow={(record) => {
            return {
              onClick: () => {
                setJobForm({
                  jobTitle: record.title,
                  jobType: record.jobType,
                });
              },
            };
          }}
          expandable={{
            expandedRowRender: (record,i) => (
              <div className="bountieExpanded">
                <div className="firstRow">
                  <div>
                    <p style={{ margin: 0 }}>
                      {record.description ? record.description : "N/A"}
                    </p>
                    <div className="smallestMargin"></div>
                    <p style={{ margin: 0 }}>
                      <span className="bold">Necessary Skill(s):</span> {record.skills ? record.skills : "N/A"}
                    </p>
                    {record.notes ? (
                      <p style={{ margin: 0 }}>
                        {" "}
                        <span className="bold">Notes:{" "}</span>
                        <a style={{ marginLeft: "5px" }} href={record.notes}>
                          {record.notes}
                        </a>
                      </p>
                    ) : null}
                  </div>
                  <Button id="claimModalButton" onClick={() => addtoClaimerPanels(i)}>
                    Claim this bounty
                  </Button>
                </div>

                <div>
                <Collapse
                defaultActiveKey={["0"]}
                activeKey={claimerPanels}>
                <Panel header="Bracket panel" key={i}>
                    <p>hehhe {i}</p>
                    </Panel>
                  </Collapse>
                </div>

              </div>
            ),
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <MinusCircleOutlined onClick={(e) => onExpand(record, e)} />
              ) : (
                <PlusCircleOutlined onClick={(e) => onExpand(record, e)} />
              ),
            rowExpandable: (record) => record.builds !== "Not Expandable",
          }}
          expandIconColumnIndex={4}
          dataSource={bountiesData}
        />

      </section>
      <div id="claimModal" className="Claim__Modal">
        <ClaimModal jobForm={jobForm} />
      </div>
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

export default Bounties;
