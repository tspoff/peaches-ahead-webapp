import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader';
import { productMetadataActions } from '../../redux/actions';
import { ORCHARDS } from '../../constants';
import './QRScanner.css';

class QRScanner extends Component {
  static propTypes = {
    delay: PropTypes.number,
    productMetadata: PropTypes.object,
    parseQRCodeToMetadata: PropTypes.func,
    isQrCodeProcessing: PropTypes.bool
  };

  constructor(props) {
    super(props);
    console.log(this.props.productMetadata);
  }

  handleScan = (qrCode) => {
    const { originalQRCode } = this.props.productMetadata;
    if (qrCode && qrCode !== originalQRCode) {
      const isQRCode = RegExp('^[0-9a-fA-F]{4}-[0-9a-fA-F]{4} [0-9a-fA-F]{64}$').test(qrCode);
      if (isQRCode) {
        this.props.updateMetadata(qrCode);
      }
    }
  }

  handleError = (err) => {
    console.error(err);
  }

  render() {
    const { delay, isQrCodeProcessing } = this.props;
    const { qrCode, productOrigin, productNumber, hash } = this.props.productMetadata;

    return (
        <div>
          {
            isQrCodeProcessing ? (<div>Processing...</div>) :
            (
              qrCode ? (<div>Scanned.</div>) :
              (<QrReader
                delay={delay || 300}
                onError={this.handleError}
                onScan={this.handleScan}
              />)
            )
          }
          <div>{
            !qrCode ? 'No Result.' :
            (
              <div>
                <div>Hash: {hash}</div>
                <div>Product Details</div>
                <ul>
                  <li>Origin: {ORCHARDS[productOrigin] || 'None'}</li>
                  <li>Number: {productNumber || 'None'}</li>
                </ul>
              </div>
            )
          }</div>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators( {
  updateMetadata: productMetadataActions.updateMetadata,
}, dispatch );

function mapStateToProps(state) {
  const { productMetadata, app } = state;
  return {
    productMetadata,
    isQrCodeProcessing: app.isQrCodeProcessing
  };
}

const connectedQRScanner = connect(mapStateToProps, mapDispatchToProps)(QRScanner);
export { connectedQRScanner as QRScanner };
