import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Documentation = () => {
  
  const nounsdaoLink = (
    <Link
      text={<Trans>NounsDAO</Trans>}
      url="https://nouns.wtf"
      leavesPage={true}
    />
  );
  const PlaygroundLink = (
    <Link
      text={<Trans>nuPlayground</Trans>}
      url="https://www.nunoun.wtf/Playground"
      leavesPage={true}
    />
  );
  const publicDomainLink = (
    <Link
      text={<Trans>public domain</Trans>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link
      text={<Trans>Compound Governance</Trans>}
      url="https://compound.finance/governance"
      leavesPage={true}
    />
  );

  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>WTF?</Trans>
          </h1>
          <p className={classes.aboutText}>
            <Trans>
              nuNouns are just like Nouns, but nuer!
            </Trans>
            <br />
            <br />
            <Trans>
              An expansion DAO based on {nounsdaoLink}, nuNounsdao aims to broaden the nounish community by providing representational
              characters, humanising Nouns to capture the inner child within us all.
            </Trans>
            <br />
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '4rem' }}>
            <Trans>
              Learn more below, or start creating nuNouns off-chain using the {PlaygroundLink}.
            </Trans>
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Summary</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Trans>nuNouns artwork is in the {publicDomainLink}.</Trans>
                </li>
                <li>
                  <Trans>One nuNoun is trustlessly auctioned every 180 minutes, forever.</Trans>
                </li>
                <li>
                  <Trans>100% of nuNoun auction proceeds are trustlessly sent to the treasury.</Trans>
                </li>
                <li>
                  <Trans>Settlement of one auction kicks off the next.</Trans>
                </li>
                <li>
                  <Trans>All nuNouns are members of nuNouns DAO.</Trans>
                </li>
                <li>
                  <Trans>nuNouns DAO uses a fork of {compoundGovLink}.</Trans>
                </li>
                <li>
                  <Trans>One nuNoun is equal to one vote.</Trans>
                </li>
                <li>
                  <Trans>The treasury is controlled exclusively by nuNouns via governance.</Trans>
                </li>
                <li>
                  <Trans>Artwork is generative and stored directly on-chain (not IPFS).</Trans>
                </li>
                <li>
                  <Trans>
                    No explicit rules exist for attribute scarcity; all nuNouns are equally rare.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    nuNounders receive rewards in the form of nuNouns (10% of supply for first 5 years).
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Nouncubator receives rewards in the form of nuNouns (10% of supply for first 5 years).
                  </Trans>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>180 Minute Auctions</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  The nuNouns Auction Contract will act as a self-sufficient nuNoun generation and
                  distribution mechanism, auctioning one nuNoun every 180 minutes, forever. 100% of
                  auction proceeds (ETH) are automatically deposited in the nuNounsDAO treasury,
                  where they are governed by nuNoun owners.
                </Trans>
              </p>

              <p className={classes.aboutText}>
                <Trans>
                  Each time an auction is settled, the settlement transaction will also cause a new
                  nuNoun to be minted and a new 180 minutes auction to begin.{' '}
                </Trans>
              </p>
              <p>
                <Trans>
                  While settlement is most heavily incentivized for the winning bidder, it can be
                  triggered by anyone, allowing the system to trustlessly auction NuNouns as long as
                  Ethereum is operational and there are interested bidders.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Bidding and Settling Auctions</Trans>
            </Accordion.Header>
            <Accordion.Body>

              <p>
                <Trans>Bids</Trans>
                <br />
                <Trans>
                  Once an auction starts, everyone has 180 minutes to bid. Anyone can bid an amount
                  at/above 0.01 eth. The Amount bid is returned to bidder if they lose the auction
                  (minus gas spent on bid transaction).
                </Trans>
              </p>
              <p>
                <Trans>
                  Bids at the very last minute increase the auction time by 2 minutes.
                  Sometimes, multiple bids are sent at the same time. This may result in bids coming
                  in and winning an auction at the very last minute/seconds (irrespective of time
                  increase).
                </Trans>
              </p>
              <p>
                <Trans>Bid Refunds</Trans>
                <br />
                <Trans>
                  Unsuccessful bids are refunded in full. The timing of refunds may be offset by 1
                  bidder. This means that a refund is processed for an unsuccessful bid, when a
                  higher bid is submitted.
                </Trans>
              </p>
              <p>
                <Trans>Settlement</Trans>
                <br />
                <Trans>
                  When an auction ends, a gas-only transaction is required to mint the current
                  NuNoun to the winners wallet and start the next auction. Anyone can settle an auction.
                  As gas price fluctuates, the cost of settlement also fluctuates.
                </Trans>
              </p>
              <p>
                <Trans>
                  Settlement gas price of every 9th nuNoun is higher. This is due to the transaction
                  also triggering 2 free nuNoun mints: The nuNounders mint and The Nouns extensions mint.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>nuNouns DAO</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <Trans>
                nuNouns DAO utilizes a fork of {compoundGovLink} and is the main governing body of the
                nuNouns ecosystem. The nuNouns DAO treasury receives 100% of ETH proceeds from each 180 minutes
                nuNoun auctions. Each nuNoun is an irrevocable member of nuNouns DAO and entitled to one
                vote in all governance matters. nuNoun votes are non-transferable (if you sell your
                nuNoun the vote goes with it) but delegatable, which means you can assign your vote to
                someone else as long as you own your nuNoun.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Governance ‘Slow Start’</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The proposal veto right was initially envisioned as a temporary solution to the
                  problem of ‘51% attacks’ on the uNouns DAO treasury. While Nounders initially
                  believed that a healthy distribution of Nouns would be sufficient protection for
                  the DAO, a more complete understanding of the incentives and risks has led to
                  general consensus within the Nounders, the Nouns Foundation, and the wider
                  community that a more robust game-theoretic solution should be implemented before
                  the right is removed.
                </Trans>
              </p>
              <p>
                <Trans>
                  The Nouns community has undertaken a preliminary exploration of proposal veto
                  alternatives (‘rage quit’ etc.), but it is now clear that this is a difficult
                  problem that will require significantly more research, development and testing
                  before a satisfactory solution can be implemented.
                </Trans>
              </p>
              <p>
                <Trans>
                  Consequently, the Nouns Foundation anticipates being the steward of the veto power
                  until Nouns DAO or nuNounsDAO are ready to implement an alternative, and therefore wishes to
                  clarify the conditions under which it would exercise this power.
                </Trans>
              </p>
              <p>
                <Trans>
                  The nuNounsDAO considers the veto an emergency power that should not be
                  exercised in the normal course of business. nuNounsDAO will veto
                  proposals that introduce non-trivial legal or existential risks to the nuNouns DAO
                  or the nuNouns, including (but not necessarily limited to) proposals
                  that:
                </Trans>
              </p>
              <ul>
                <li>unequally withdraw the treasury for personal gain</li>
                <li>bribe voters to facilitate withdraws of the treasury for personal gain</li>
                <li>
                  attempt to alter nuNoun auction cadence for the purpose of maintaining or acquiring
                  a voting majority
                </li>
                <li>make upgrades to critical smart contracts without undergoing an audit</li>
              </ul>
              <p>
                <Trans>
                  There are unfortunately no algorithmic solutions for making these determinations
                  in advance (if there were, the veto would not be required), and proposals must be
                  considered on a case by case basis.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>nuNoun Traits</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  nuNouns are generated randomly based Ethereum block hashes. There are no 'if'
                  statements or other rules governing nuNoun trait scarcity, which makes all nuNouns
                  equally rare. As of this writing, nuNouns are made up of:
                </Trans>
              </p>
              <ul>
                <li>
                  <Trans>backgrounds (4) </Trans>
                </li>
                <li>
                  <Trans>bodies (30)</Trans>
                </li>
                <li>
                  <Trans>accessories (105) </Trans>
                </li>
                <li>
                  <Trans>heads (171) </Trans>
                </li>
                <li>
                  <Trans>glasses (26)</Trans>
                </li>
              </ul>
              <Trans>
                You can experiment with off-chain nuNoun generation at the {PlaygroundLink}.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>On-Chain Artwork</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  nuNouns are stored directly on Ethereum and do not utilize pointers to other
                  networks such as IPFS. This is possible because nuNoun parts are compressed and
                  stored on-chain using a custom run-length encoding (RLE), which is a form of
                  lossless compression.
                </Trans>
              </p>

              <p>
                <Trans>
                  The compressed parts are efficiently converted into a single base64 encoded SVG
                  image on-chain. To accomplish this, each part is decoded into an intermediate
                  format before being converted into a series of SVG rects using batched, on-chain
                  string concatenation. Once the entire SVG has been generated, it is base64
                  encoded.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>nuNoun Seeder Contract</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The nuNoun Seeder contract is used to determine nuNoun traits during the minting
                  process. The seeder contract can be replaced to allow for future trait generation
                  algorithm upgrades. Additionally, it can be locked by the nuNouns DAO to prevent any
                  future updates. Currently, nuNoun traits are determined using pseudo-random number
                  generation:
                </Trans>
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))</code>
              <br />
              <br />
              <p>
                <Trans>
                  Trait generation is not truly random. Traits can be predicted when minting a nuNoun
                  on the pending block.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>nuNounder's Reward</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  'nuNounders' are the group of builders that initiated nuNouns. Here are the
                  nuNounders:
                </Trans>
              </p>
              <ul>
                <li>
                  <Link text="@creepToad" url="https://twitter.com/creepT0ad" leavesPage={true} />
                </li>
                <li>
                  <Link text="@defnullx" url="https://twitter.com/defnullx" leavesPage={true} />
                </li>
                <li>
                  <Link text="@Streetstaker" url="https://twitter.com/streetstaker" leavesPage={true}/>
                </li>
                <li>
                  <Link text="@metadavideth" url="https://twitter.com/metadavideth" leavesPage={true}/>
                </li>
              </ul>
              <p>
                <Trans>
                  Because 100% of nuNoun auction proceeds are sent to nuNouns DAO, nuNounders have chosen
                  to compensate themselves with nuNouns. Every 10th nuNoun for the first 5 years of the
                  project (nuNoun ids #0, #10, #20, #30 and so on) will be automatically sent to the
                  nuNounder's multisig to be vested and shared among the founding members of the
                  project.
                </Trans>
              </p>
              <p>
                <Trans>
                  nuNounder distributions don't interfere with the cadence of 180 minutes auctions. nuNouns
                  are sent directly to the nuNounder's Multisig, and auctions continue on schedule
                  with the next available nuNoun ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>NounCubator Reward</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  NounCubator a team of solid nounish builders to be established by the nuNouns.
                  being passionate proliferators of cc0, nuNounders have chosen to allocate other Nouns extensions 
                  with nuNouns. Every 11th nuNoun for the first 5 years of the project (
                  nuNoun ids #1, #11, #21, #31 and so on) will be automatically sent to the Nouncubator
                  to be utilized collectively as a governance tool to push and support extension projects even further.
                </Trans>
              </p>
              <p>
                <Trans>
                  NounCubator distributions don't interfere with the cadence of 180 minutes auctions.
                  nuNouns are sent directly to the NounCubator multisig, and auctions continue on schedule
                  with the next available nuNoun ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>NounCubator</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
              <p>
                <Trans>
                NounCubator is nuNoun’s accelerator to support nounish projects and it goes beyond simple funding. Here are the details to apply to the program:
                </Trans>
              </p>
                
                <br></br>
                <h3>
                <Trans>
                Here are details around the program:
                </Trans>
              </h3>
                <li>
                  <Trans>We are looking for builders of all kinds. We deliberately have not spelled out any requirements or 
                    criteria for applicants because we are looking and value a diverse group that can help propel the nouns ecosystem. 
                    If you have an idea you would like feedback on, please join our Discord server and discuss on the #nouncubator channel. 
                    No idea is too big or small!</Trans>
                </li>
                <li>
                  <Trans>Program last approximately 6 weeks 
                    (varies from project to project; your duration will be determined upon acceptance in the program).</Trans>
                </li>
                <li>
                  <Trans>While in the program, the nounCubator will be very hands-on in providing you support to successfully get your concept off the ground. 
                    Expect frequent and regular check-ins, 
                    and occasional presentations to sharpen the concept and position it for success.</Trans>
                </li>
                <li>
                <Link text="More info on nuNotion" url="https://nounpunks.notion.site/NounCubator-785c80c8494b44f386fd4cffe6730eb7" leavesPage={true} />
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
