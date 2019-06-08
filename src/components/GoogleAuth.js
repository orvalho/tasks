import './GoogleAuth.css';
import React from 'react';
import {connect} from 'react-redux';
import {attemptSignIn, attemptSignOut, changeAuth} from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({clientId: '674624043343-nfitu88lvdrmgh542r8mc4jajvtmo32m.apps.googleusercontent.com', scope: 'email'}).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // initialize isSignedIn state
        this.props.changeAuth(this.auth.isSignedIn.get());
        // listen for changes in the isSignedIn state
        this.auth.isSignedIn.listen(this.props.changeAuth);
      });
    });
  }

  onSignInButtonClick = () => {
    this.props.attemptSignIn();
  }

  onSignOutButtonClick = () => {
    this.props.attemptSignOut();
  }

  renderAuthButton() {
    const {isSignedIn} = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (<button className="ui button" onClick={this.onSignOutButtonClick}>
        <i className="google icon"></i>
        Sign Out
      </button>);
    } else {
      return (<button className="ui button" onClick={this.onSignInButtonClick}>
        <i className="google icon"></i>
        Sign In
      </button>);
    }
  }

  render() {
    return <div className="googleAuth">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {attemptSignIn, attemptSignOut, changeAuth})(GoogleAuth);
