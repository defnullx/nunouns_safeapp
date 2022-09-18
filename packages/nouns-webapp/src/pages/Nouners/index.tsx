import React from 'react';
import classes from './NounersPage.module.css';
import Section from '../../layout/Section';
import { Col, Row, Button } from 'react-bootstrap';


const NounersPage = () => {
  return (
    <Section fullWidth={true} className={classes.nounersPage}>
      <Col lg={{ span: 6, offset: 3 }}>

        <Row className={classes.headerRow}>
          <span>nuNouners</span>
          <h1>Welcome, nuNouner!</h1>
        </Row>
     
        
        <br />
        <br />
                
        <Row className={classes.pictureCard}>
          <Col lg={8} className={classes.treasuryAmtWrapper}>
            <Row className={classes.headerRow}>
              <span>Next steps</span>
            </Row>
            <Row>
              <Col>
                So you just won a nuNoun.... Cool! Be sure to go over how everything works and head over to our discord server to verify your nuNoun!
              </Col>
            </Row>
          </Col>

          <Col className={classes.treasuryInfoText}>
            <div className={classes.verifyButtonWrapper}>
              <a href={`https://discord.gg/nounpunks`}>
            <Button className={classes.generateBtn}>Collabland Join</Button>
          </a>
            </div>
          </Col>
        </Row>
    

        <Col>
          {/* <h2> Getting Started</h2>
          <span className={classes.subheading}>
            Something about whhat this is. funding, community, etc
          </span>
        <br />
        <br /> */}

        </Col>
        <h2> Discord Channels</h2>
        {/* <Col style={{ textAlign: 'justify' }}>
          These days, there are a lot of different channels and channel groupings in the Discord.
          Here's a breakdown of what they're used for:
        </Col> */}
        <br />
          <h3>Start Here</h3>
          <Col style={{ textAlign: 'justify' }}>
            Basic information, major announcements, and user verification. If you just bought a
            nuNoun, you will need to verify your ownership in the #verify channel to get added to the
             "nuNouner" role of the server.
          </Col>
          <br />

          <h3>nuNouns DAO</h3>
          <Col style={{ textAlign: 'justify' }}>
            These are channels where only nuNouns DAO members can post. In the spirit of having an open
            and collaborative environment, all of these channels (except for #nouner-private) are
            viewable by the public.
          </Col>
          <br />
          
          <a
            href={`https://discord.com/channels/912148687193522198/1010471395186184282`}
            target="_blank"
            rel="noreferrer"
            className={classes.boldText}
          >
            #nunouner-general
          </a>
          <Col style={{ textAlign: 'justify' }}>
            This is where most communication between members occurs. Anything that doesn't fit in
            the other nuNouner channels likely goes here.
          </Col>
          <br />

          <a
            href={`https://discord.com/channels/912148687193522198/1010465197967810650`}
            target="_blank"
            rel="noreferrer"
            className={classes.boldText}
          >
            #treasury-management
          </a>
          {/* <Col style={{ textAlign: 'justify' }}>
            There has been a lot of discussion about ways to optimize and grow our considerable
            treasury. The most popular discussion has been around ways to earn yield in the most
            conservative, risk-free way. We have deposited 1 ETH into Lido, but may look to expand
            that in the future. There has also been a great deal of discussion about diversifying
            some of the treasury into other assets.
          </Col> */}
          <br />
          <br />

          <a
            href={`https://discord.com/channels/912148687193522198/1009566459434893392`}
            target="_blank"
            rel="noreferrer"
            className={classes.boldText}
          >
            #auctions
          </a>
          <Col style={{ textAlign: 'justify' }}>
            Discussion and questions about auctions.
          </Col>
          <br />

          <a
            href={`https://discord.com/channels/912148687193522198/1011439650461732874`}
            target="_blank"
            rel="noreferrer"
            className={classes.boldText}
          >
            #nunouner-private
          </a>
          <Col style={{ textAlign: 'justify' }}>
            While we generally prefer to keep everything out in the open, sometimes there are
            sensitive matters where information is only kept to members.
          </Col>
          <br />

          <h3>Projects</h3>
          <Col style={{ textAlign: 'justify' }}>
            When a project passes an on-chain vote, the creator of that proposal will often be given
            their own channel in this section to answer questions and share updates on the status of
            their work. This is a constantly expanding list - for more information on each of these,
            check out the DAO section of the nuNouns website.
          </Col>
          <br />

          <h3>Community</h3>
          <Col style={{ textAlign: 'justify' }}>
            These are channels where anyone, member or not, can post.
          </Col>
          <br />

          <a
            href={`https://discord.com/channels/912148687193522198/1010470038194622504`}
            target="_blank"
            rel="noreferrer"
            className={classes.boldText}
          >
            #dao-general
          </a>
          <Col style={{ textAlign: 'justify' }}>
            The most active channel, and the other are topic specific. Non-members often post in
            these channels asking for guidance on proposal ideas, or to share things they have made.
          </Col>
          <br />

          
          
      </Col>
    </Section>
  );
};

export default NounersPage;
