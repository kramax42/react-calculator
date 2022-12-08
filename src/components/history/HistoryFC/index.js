import React, { memo } from 'react';
import { HistoryItems, HistoryWrapper, HistoryTitle, HistoryItem } from '../styled';
import { useSelector } from 'react-redux';

const HistoryFC = () => {
    const history = useSelector((state) => state.calculator.history);
    const isHistoryVisible = useSelector((state) => state.calculator.isHistoryVisible);

    if (!isHistoryVisible) {
        return null;
    }

    return (
        <HistoryWrapper open={true}>
            <HistoryTitle id='historyTitle'>History</HistoryTitle>
            <HistoryItems>
                {history.length
                    ? history.map(({ calculatedExpression }, index) => (
                        <HistoryItem
                            data-history-item-index={index}
                            key={index}>
                            {`${index + 1}) ${calculatedExpression}`}
                        </HistoryItem>
                    ))
                    : <span id="emptyHistoryText">History is empty</span>
                }
            </HistoryItems>
        </HistoryWrapper>
    )
}

export const History = memo(HistoryFC);