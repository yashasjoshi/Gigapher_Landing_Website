import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'How are we different?',
    paragraph: "Gigapher NFTs work just like any other NFTs for most of the times. They're purchased using a cryptocurrency of the seller's choice, held in a digital wallet, and sold for a profit. However, our NFTs do come with some additional security measures."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container section-inner has-top-divider">
        <SectionHeader data={sectionHeader} className="center-content reveal-from-top" data-reveal-delay="200"/>
        <div className={tilesClasses}>

          <div className="tiles-item reveal-from-right" data-reveal-delay="400">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
            
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: '344px', height: '380px' }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: '#25282C',
                }}
              > 
                <div className="center-content">
                  <h3>RESPONSIBLE</h3>
                    <Image
                      src={require('./../../assets/images/Cards/responsibility.svg')}
                      alt="Features tile icon 02"
                      width={200}
                      height={200} />
                  <h6><span>❅ &nbsp;&nbsp;&nbsp; I filp on hover  &nbsp;&nbsp;&nbsp; ❅</span></h6>
                </div>
              </FrontSide>
              <BackSide
                className="invert-color"
                style={{ backgroundColor: '#222355'}}>
                  <div className="testimonial-item-footer text-xs mt-12 mb-50 has-top-divider"></div>
                  <font face="sans-serif" size="1rem" color="#9CA9B3">
                    As Gigapher deals with tangible assets, owning a real estate NFT requires a level of responsibility unlike a regular NFT ownership. With this in mind, Gigapher NFTs come with additional security features to help keep them in the right hands in the event of unforeseen circumstances.
                  </font>
                  <div className="testimonial-item-footer text-xs mt-24 mb-50 has-top-divider"></div>
              </BackSide>
            </Flippy>
          </div>

          <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical              
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: '344px', height: '380px' }} /// these are optional style, it is not necessary
            >
              <FrontSide
                className="has-bg-color center-content"
                style={{
                  backgroundColor: '#25282C',
                }}
              >
                <div className="center-content">
                  <h3>BENEFICIARY</h3>
                    <Image
                      src={require('./../../assets/images/Cards/beneficiaries.svg')}
                      alt="Features tile icon 02"
                      width={235}
                      height={235} />
                  <h6><span>❅ &nbsp;&nbsp;&nbsp; I filp on hover  &nbsp;&nbsp;&nbsp; ❅</span></h6>
                </div>
              </FrontSide>
              <BackSide
                className="invert-color"
                style={{ backgroundColor: '#222355'}}>
                  <div className="testimonial-item-footer text-xs mt-12 mb-50 has-top-divider"></div>
                  <font face="Arial" size="1rem" color="#9CA9B3">
                    "Beneficiaries" is a feature intended to work much like a last will. However, it does not require any third party to authorize the transfer. It is applied to all Gigapher NFTs and the holders are required to confirm wallet access periodically by calling a function in the smart contract.
                  </font>
                  <div className="testimonial-item-footer text-xs mt-24 mb-50 has-top-divider"></div>
              </BackSide>
            </Flippy>
          </div>

          <div className="tiles-item reveal-from-left" data-reveal-delay="400">
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: '344px', height: '380px' }} /// these are optional style, it is not necessary
            >
              <FrontSide
                className="has-bg-color center-content"
                style={{
                  backgroundColor: '#25282C',
                }}
              >
                <div className="center-content">
                  <h3>TRUSTWORTHY</h3>
                    <Image
                      src={require('./../../assets/images/Cards/trustees.svg')}
                      alt="Features tile icon 02"
                      width={87}
                      height={87} />
                  <h6><span>❅ &nbsp;&nbsp;&nbsp; I filp on hover  &nbsp;&nbsp;&nbsp; ❅</span></h6>
                </div>
              </FrontSide>
              <BackSide
                className="invert-color"
                style={{ backgroundColor: '#222355'}}>
                <div className="testimonial-item-footer text-xs mt-12 mb-50 has-top-divider"></div>
                  <font face="Arial" size="1rem" color="#9CA9B3">
                    Another Gigapher NFT feature is "Trustees". This works by allowing the holder to nominate up to three addresses to act as co-signers, protecting users against unauthorized transactions. It is an optional security measure that ensures the safety of assets in case the wallet is compromised.
                  </font>
                  <div className="testimonial-item-footer text-xs mt-24 mb-50 has-top-divider"></div>
              </BackSide>
            </Flippy>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;