import Component from 'react/lib/ReactComponent';
import history from 'react-router/lib/hashHistory'

class Logout extends Component {
  constructor(props = {}) {
    super(props);

    this.server = props.route && props.route.server;
  }

  componentWillMount() {
    if (typeof sessionStorage === 'undefined') {
      // The following code won't work under Node.js.
      return;
    }

    if (this.server && this.server.logout) {
      this.server.logout()
        .then(() => {
          // Once logged out, we redirect to the login page.
          history.push('/');
        });
    }
  }

  render() {
    return null;
  }
}

export default Logout;
