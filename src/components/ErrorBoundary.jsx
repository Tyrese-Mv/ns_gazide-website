import { Component } from 'react';
import { Link } from 'react-router-dom';
import './ErrorBoundary.css';

/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the
 * component tree that crashed.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error('Error caught by Error Boundary:', error, errorInfo);

    // Update state with error details
    this.state = {
      hasError: true,
      error,
      errorInfo
    };

    // TODO: Log to error reporting service (e.g., Sentry)
    // Example: logErrorToService(error, errorInfo);
  }

  handleRefresh = () => {
    // Reset error boundary and reload page
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  handleGoHome = () => {
    // Reset error boundary and navigate to home
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-page">
          <div className="error-boundary-content">
            <div className="error-icon">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#8B1538"
                  strokeWidth="4"
                  opacity="0.2"
                />
                <path
                  d="M60 30V70M60 85V90"
                  stroke="#8B1538"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h1>Oops! Something went wrong</h1>
            <p className="error-message">
              We're sorry for the inconvenience. An unexpected error has occurred.
            </p>

            <div className="error-actions">
              <button onClick={this.handleRefresh} className="cta-button cta-primary">
                Refresh Page
              </button>
              <button onClick={this.handleGoHome} className="cta-button cta-secondary">
                Go to Homepage
              </button>
            </div>

            <div className="error-contact">
              <p>If the problem persists, please contact us:</p>
              <div className="contact-links">
                <a href="tel:0761731018">076 173 1018</a>
                <span>•</span>
                <a href="mailto:nongcebogazide@gmail.com">nongcebogazide@gmail.com</a>
              </div>
            </div>

            {/* Show error details in development mode */}
            {import.meta.env.DEV && this.state.error && (
              <details className="error-details">
                <summary>Error Details (Development Only)</summary>
                <div className="error-stack">
                  <h3>Error:</h3>
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && (
                    <>
                      <h3>Component Stack:</h3>
                      <pre>{this.state.errorInfo.componentStack}</pre>
                    </>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
