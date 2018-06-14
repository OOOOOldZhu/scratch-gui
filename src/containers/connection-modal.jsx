import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import ConnectionModalComponent from '../components/connection-modal/connection-modal.jsx';

class ConnectionModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel',
            'handleSearch'
        ]);
        this.state = {
            phase: 'scanning'
        };
    }
    handleCancel () {
        this.props.onCancel();
    }
    handleSearch () {
        this.props.onSearch();
    }
    render () {
        return (
            <ConnectionModalComponent
                title={this.props.id}
                onCancel={this.handleCancel}
                onSearch={this.handleSearch}
                phase={this.state.phase}
            />
        );
    }
}

ConnectionModal.propTypes = {
    id: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};

export default ConnectionModal;
