import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-reader';
import { productMetadataActions } from '../../redux/actions';
// import Loading from '../../components/Loading/Loading';
import './Scan.css';

class Scan extends Component {
  static propTypes = {
    productMetadata: PropTypes.object,
    isQrCodeProcessing: PropTypes.bool,
    parseQRCodeToMetadata: PropTypes.func
  };

  componentWillMount() {
    this.props.clearMetadata();
  }

  componentDidUpdate() {
    const { hash } = this.props.productMetadata;
    if (hash) {
      this.props.history.push(`/data/${hash}`);
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
    const { isQrCodeProcessing } = this.props;

    return (
        <div className="peach-container peach-qrscanner">
          {
            isQrCodeProcessing ? (
              <div className="peach-container peach-col peach-v-center peach-processing">
                <span className="peach-animated-ellipsis">Loading</span>
              </div>
            ) : (
              <QrReader
                delay={300}
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

const connectedScan = withRouter(connect(mapStateToProps, mapDispatchToProps)(Scan));
export { connectedScan as Scan };

