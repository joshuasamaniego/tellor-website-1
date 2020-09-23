import React, { Component } from 'react';
import './Medium.scss';
import Logosmall from '../../imgs/Swoosh_Green_small.png';

const urlForFeedToJson = feed => `https://api.rss2json.com/v1/api.json?rss_url=${feed}`;

class Medium extends Component {
    constructor(props) {
      super(props)
      this.state = {
        requestFailed: false,
        active: 0,
        mediumPosts: [],
        latestPost: [],
        date: null
    }
    }
    componentDidMount() {
        fetch(urlForFeedToJson(this.props.mediumRSSFeedLink))
          .then(response => {
            if (!response.ok) {
              throw Error("Network request failed")
            }
            return response
          })
          .then(data => data.json())
          .then(data => {   
            const dataItems = data.items
            const mediumPosts = dataItems.filter(item => item.categories.length > 0)
            const latestPost = mediumPosts[0];
            const date = latestPost.pubDate;
            this.setState({
              mediumPosts: mediumPosts,
              latestPost: latestPost,
              date: date
            })
          }, () => {
            this.setState({
              requestFailed: true
            })
          })
      }

    render (){
        const post = this.state.latestPost;
        const humDate = this.state.date;
      return(
        <div className="MediumPost">
            <div className="top">
                <div className="topavatar">
                <img src={Logosmall} alt="Medium Tellor avatar"/>
                </div>
                <div className="toptxt">
                    <h4>{post.author}</h4>
                    <p>{humDate}</p>
                </div>
            </div>
            <div className="middle">
            {post !== [] ? 
            <a href={post.link} alt="link">
                <img src={post.thumbnail} alt="Medium article thumbnail"/>
            </a>
            :
            <p>{post.thumbnail}</p>
            }
            </div>
            <div className="bottom">
                <a href={post.link} alt="link">{post.title}</a>
            </div>
        </div>
      )
    }
  }
  export default Medium;