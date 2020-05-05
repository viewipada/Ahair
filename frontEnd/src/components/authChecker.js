import React from 'react';
import Home from './Home';

const authChecker = (Component) => {
    return class extends React.Component {
      state = {
        show: false;
      }
  
      componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
          this.checkAuth();
        }
      }
  
      componentDidMount() {
        this.checkAuth();
      }
  
      checkAuth() {
        Api.checkAuth()
        .then(result => {
          if (result.success) {
            this.setState({ show: true });
          } else {
            // logout since token expired
            localStorage.clear();
          }
        });
      }
  
      render() {
        return this.state.show && <Component {...this.props} />
      }
    }
  }
  
  export default authChecker(Home);