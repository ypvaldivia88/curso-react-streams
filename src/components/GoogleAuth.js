import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '974222624688-3nuif7dktjk0e9q8lv09jokld19b74ql.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;