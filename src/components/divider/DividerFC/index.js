import PropTypes from 'prop-types';
import React from 'react';
import { HorizontalDivider, VerticalDivider } from '../styled';

export const DividerFC = ({ vertical }) => {
    return (
        vertical
            ? <VerticalDivider />
            : <HorizontalDivider />
    );
};

DividerFC.defaultProps = {
    vertical: false,
}

DividerFC.propTypes = {
    vertical: PropTypes.bool,
};

export const Divider = DividerFC;