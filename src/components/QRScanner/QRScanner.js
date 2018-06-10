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
    onScan: PropTypes.func,
    productMetadata: PropTypes.object,
    parseQRCodeToMetadata: PropTypes.func,
    isQrCodeProcessing: PropTypes.bool
  };

  constructor(props) {
    super(props);
    console.log(this.props.productMetadata);
  }

  componentWillMount() {
    this.props.clearMetadata();
  }

  componentDidUpdate() {
    const { qrCode } = this.props.productMetadata;
    if (qrCode && this.props.onScan) {
      this.props.onScan(this.props.productMetadata);
    }
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
        <div className="peach-container peach-qrscanner">
          {
            isQrCodeProcessing ? (<div className="peach-container peach-col peach-v-center peach-processing">Processing...</div>) :
            (
              <QrReader
                delay={delay || 300}
                resolution={800}
                onError={this.handleError}
                onScan={this.handleScan}
              />
            )
          }
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators( {
  updateMetadata: productMetadataActions.updateMetadata,
  clearMetadata: productMetadataActions.clearMetadata
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
