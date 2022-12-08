import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '@components/header/HeaderFC';
import { ChildrenStyled, MainLayoutStyled } from '../styled';

const MainLayoutFC = ({ children }) => {
    return (
        <MainLayoutStyled id="mainLayout">
            <Header />
            <ChildrenStyled>
                {children}
            </ChildrenStyled>
        </MainLayoutStyled>
    )
}

MainLayoutFC.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export const MainLayout = MainLayoutFC;