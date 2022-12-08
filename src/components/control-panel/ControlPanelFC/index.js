import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory, toggleHistoryVisibility } from '@store/reducers/calculator.reducer';
import { Button } from "@components/button/ButtonFC";
import { ControlPanelStyled, Title } from '../styled';

const ControlPanelFC = () => {
    const dispatch = useDispatch();
    const isHistoryVisible = useSelector((state) => state.calculator.isHistoryVisible);

    const handleClearHistory = () => {
        dispatch(clearHistory());
    };

    const handleToggleHistoryVisibility = () => {
        dispatch(toggleHistoryVisibility());
    };

    return (
        <div>
            <Title>Control Panel</Title>
            <ControlPanelStyled>
                <Button
                    id="toggleHistoryVisibility"
                    onClick={handleToggleHistoryVisibility}>
                    {isHistoryVisible ? 'Hide History' : 'Show History'}
                </Button>
                <Button id="clearHistory" onClick={handleClearHistory}>
                    Clear History
                </Button>
            </ControlPanelStyled>
        </div>
    )
}

export const ControlPanel = memo(ControlPanelFC);