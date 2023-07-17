import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AboutMe = () => {
  return (
    <div className="page-heading">
      <h2 className='page-title'>About ME</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Certificate & Achivements</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Bootcamp for Fullstack web development</li>

              <li>Masters of Science in Accounting with a Concentration in Controllership; Strayer University</li>
              <li>Bachelor of Business Administration in Management; Texas State University</li>

            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>My History</Accordion.Header>
          <Accordion.Body>
            I am a junior software engineer seeking employment with a reputable firm
            to enhance my career path as a software engineer while utilizing my vast Finance and Business
            background.
            My 25 years of work experience in Finance and Accounting has been an invaluable experience
            and I would like to develop programs to help enhance and stream line new business processes..
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default AboutMe;


