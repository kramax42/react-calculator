import React from "react";
import { ErrorBoundaryStyled } from './styled';

// Component for testing Error Boundary
export function ThrowErrorComponent({ error }) {
  throw new Error(error || '💥 BOOM-KABOOM 💥')
}

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <ErrorBoundaryStyled>
          <h2>💥An Error Has Occurred!💥</h2>
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
