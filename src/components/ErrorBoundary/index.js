import React from 'react';
import PropTypes from 'prop-types';

import { ErrorBoundaryStyled } from './styled';

// Component for testing Error Boundary
export function ThrowErrorComponent({ error }) {
  throw new Error(error || 'π₯ BOOM-KABOOM π₯');
}

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <ErrorBoundaryStyled>
          <h2>π₯An Error Has Occurred!π₯</h2>
          <details>
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </details>
        </ErrorBoundaryStyled>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
