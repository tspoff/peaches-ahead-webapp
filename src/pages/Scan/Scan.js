import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Scan.css';

import { QRScanner } from '../../components/QRScanner/QRScanner';

class Scan extends Component {
  onScan = (productMetadata) => {
    console.log(productMetadata);
    this.props.history.push(`/data/${productMetadata.hash}`);
  }

  render() {
    return (
        <div className="peach-qrscanner-container">
            <QRScanner onScan={this.onScan} />
        </div>
    );
  }
}

const connectedScan = withRouter(Scan);
export { connectedScan as Scan };
