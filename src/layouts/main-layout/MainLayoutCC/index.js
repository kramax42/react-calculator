import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '@components/header/HeaderCC';
import { ChildrenStyled, MainLayoutStyled } from '../styled';

class MainLayoutCC extends Component {
    render() {
        const { children } = this.props;
        return (
            <MainLayoutStyled id="mainLayout">
                <Header />
                <ChildrenStyled>
                    {children}
                </ChildrenStyled>
            </MainLayoutStyled>
        )
    }
}

MainLayoutCC.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export const MainLayout = MainLayoutCC;