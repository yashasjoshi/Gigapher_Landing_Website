import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section illustration-star',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split section-inner illustration-thumb',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap illustration-brackets',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Features',
    paragraph: 'With a state-of-the-art tech stack, Gigapher is equipped with many great features to facilitate smooth, secure, reliable, and efficient property transfer within minutes.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container illustration-planet-waves ">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" data-reveal-delay="10" />
          <div className={splitClasses}>

            <div className="split-item ">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" data-reveal-delay="600">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8 ">
                  Minting new NFTs
                  </div>
                <h3 className="mt-0 mb-12">
                  Mint your own Real Estate NFTs
                  </h3>
                <p className="m-0">
                  Turn your traditional property contract from a lengthy binder to an NFT. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )} data-reveal-delay="200"
                data-reveal-container=".split-item" >
                <Image
                  src={require('./../../assets/images/splits/mint.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item" data-reveal-delay="600">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Multiple selling options
                  </div>
                <h3 className="mt-0 mb-12">
                  Timed / Untimed Auctions
                  </h3>
                <p className="m-0">
                  Real estate NFTs work just like any other NFT. They're purchased using a cryptocurrency of the seller's choosing, held in a digital wallet, and, if speculative, are sold again for a profit to a buyer with the right amount of money.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item" data-reveal-delay="200">
                <Image
                  src={require('./../../assets/images/splits/auction.svg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item ">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" data-reveal-delay="600">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8 ">
                  Catching red-flags
                  </div>
                <h3 className="mt-0 mb-12">
                  Fraud-free transactions
                  </h3>
                <p className="m-0">
                  A thorough examination of each property and its legal documents is performed by our experts so that our customers can trade without a worry.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )} data-reveal-delay="200"
                data-reveal-container=".split-item" >
                <Image
                  src={require('./../../assets/images/splits/fraud.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" data-reveal-delay="600">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Behind the scenes
                  </div>
                <h3 className="mt-0 mb-12">
                  Token standards
                  </h3>
                <p className="m-0">
                  Our smart contracts are develped in Solidity and deployed on various blockchains after rigorous manual and automated testing. They enable exclusive collection and creation of ERC721 and ERC1155 real estate tokens.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item" data-reveal-delay="200">
                <Image
                  src={require('./../../assets/images/splits/token-standards.svg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;