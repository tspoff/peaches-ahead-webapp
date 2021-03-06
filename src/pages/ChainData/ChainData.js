// src/components/App/index.js
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { productBlockchainActions } from '../../redux/actions';
import { ORCHARDS } from '../../constants';

import config from '../../../server/config';

import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import Loading from '../../components/Loading/Loading';

import './ChainData.css';

class ChainData extends Component {
  static propTypes = {
    productBlockchain: PropTypes.object,
    productMetadata: PropTypes.object,
    getMultichain: PropTypes.func
  };

  componentDidMount() {
    const { multiChainHash } = this.props.match.params;
    this.props.getMultichain(multiChainHash);
  }

  onDone = () => {
    this.props.history.push('/scan');
  }

  render() {
    const { isMultichainLoading } = this.props.productBlockchain;
    const { productOrigin, hash } = this.props.productMetadata;
    const { multiChainHash } = this.props.match.params;
    return (
      <div className="peach-blockchain-container peach-container peach-full-height peach-h-center">{
        isMultichainLoading ? <Loading /> :
        (
          <div className="peach-bc-card-container">
            <div className="peach-chain-overlay"></div>
            <Card className="peach-full-width peach-bc-card">
              <div className="peach-bc-title-section">
                <p className="peach-bc-title">Natural Foods</p>
                <p className="peach-bc-subtitle">8609 Campbell Drive</p>
                <p className="peach-bc-city-state">Austin, TX</p>
              </div>
              <div className="peach-bc-data-section">
                <div className="peach-bc-lineitems-title">Peach</div>
                <div className="peach-bc-lineitem">
                  <span className="peach-bc-lineitem-left">Date Arrived</span><span className="peach-bc-lineitem-right">03.27.2018</span>
                </div>
                <div className="peach-bc-lineitem">
                  <span className="peach-bc-lineitem-left">Date Harvested</span><span className="peach-bc-lineitem-right">03.24.2018</span>
                </div>
                <div className="peach-bc-lineitem">
                  <span className="peach-bc-lineitem-left">Date Packaged</span><span className="peach-bc-lineitem-right">03.25.2018</span>
                </div>
                <div className="peach-bc-lineitem">
                  <span className="peach-bc-lineitem-left">Estimated Freshness Left</span><span className="peach-bc-lineitem-right">3 days</span>
                </div>
              </div>
              <div className="peach-bc-meta-section">
                <div className="peach-bc-meta-origin">
                  <span className="peach-bc-origin-left">Origin</span>
                  <span className="peach-bc-origin-right">
                    <span>{ORCHARDS[productOrigin] || 'Tarim Produce'}</span>
                    <span>Austin, TX</span>
                  </span>
                </div>
                <div className="peach-bc-meta-hash">
                  <span className="peach-bc-hash-title">Hash</span>
                    {/* <span className="peach-bc-hash"><a href={`https://explorer-sandbox-testnet.factom.com/chains/${config.factom.chainHash}/entries/5c5def1ee233808e6f3123556ae21abfba2f8693aaaaaf423b9d6894713079b6`}>{hash || multiChainHash || '5c5def1ee233808e6f3123556ae21abfba2f8693aaaaaf423b9d6894713079b6'}</a></span> */}
                    <span className="peach-bc-hash"><a href={`https://explorer-sandbox-testnet.factom.com/chains/${config.factom.chainHash}/entries/5c5def1ee233808e6f3123556ae21abfba2f8693aaaaaf423b9d6894713079b6`}>{'5c5def1ee233808e6f3123556ae21abfba2f8693aaaaaf423b9d6894713079b6'}</a></span>
                </div>
              </div>
              <div className="peach-info-done">
                <RaisedButton label="Back" backgroundColor="#FFAD63" labelColor="#FFF" className="peach-info-done-button" fullWidth={true} onClick={this.onDone} />
              </div>
            </Card>
          </div>
        )
      }</div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators( {
  getMultichain: productBlockchainActions.getMultichain
}, dispatch );

function mapStateToProps(state) {
  const { productBlockchain, productMetadata } = state;
  return {
    productBlockchain,
    productMetadata
  };
}

const connectedChainData = withRouter(connect(mapStateToProps, mapDispatchToProps)(ChainData));
export { connectedChainData as ChainData };
