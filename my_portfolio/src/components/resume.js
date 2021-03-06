import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                />
            </div>

            <h2 style={{paddingTop: '2em'}}>Xinru Chen</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: "50%"}}/>
              <p> type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta</p>
            <hr style={{borderTop: '3px solid #833fb2', width: "50%"}}/>
            <h5>Address</h5>
            <p>114 Dunedas Street, Dunedin </p>
            <h5>Phone</h5>
            <p> (64) 275926380</p>
            <h5>Email</h5>
            <p> someone@example.com</p>
            <h5>Web</h5>
            <p> mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: "50%"}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>



            <Education
              startYear={2016}
              endYear={2018}
              schoolName="University of Otago"
              schoolDescription="The University of Otago (Māori: Te Whare Wānanga o Otāgo) is a collegiate university located in Dunedin, Otago, New Zealand. It scores highly for average research quality, and in 2006[needs update] was second in New Zealand only to the University of Auckland in the number of A-rated academic researchers it employs.[3] In the past it has topped the New Zealand Performance Based Research Fund evaluation."
            />


            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="fhsuifsiehfisheifhsiefhiseuhfi"
              />
              /* this can also be copied */
              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
              />
              <Skills
                skill="HTML/CSS"
                progress={80}
              />
              <Skills
                skill="NodeJS"
                progress={50}
              />
              <Skills
                skill="React"
                progress={65}
              />
              


          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Resume;
