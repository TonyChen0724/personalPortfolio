import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1gJrTqXMz_DO0hDOyo2cMMJ76hmIfrTMA5mCalphghLhxkTj"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">

              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | mongoDB</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/xinru-chen-98208b122/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/TonyChen0724" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* CodeAbbey */}
                <a href="https://www.codeabbey.com/index/user_profile" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-bath" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a href="https://leetcode.com/watchyourback/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-coffee" aria-hidden="true" />
                </a>


              </div>
            </div>

          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Landing;
