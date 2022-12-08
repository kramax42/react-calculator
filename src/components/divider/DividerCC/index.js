import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalDivider, VerticalDivider } from '../styled';

class DividerCC extends Component {
    render() {
        return (
            this.props.vertical
                ? <VerticalDivider />
                : <HorizontalDivider />
        );
    }
};

DividerCC.defaultProps = {
    vertical: false,
}

DividerCC.propTypes = {
    vertical: PropTypes.bool,
};

export const Divider = DividerCC;