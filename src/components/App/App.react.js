import React from 'react';
import Router from 'react-router';
import './App.scss';

let RouteHandler = Router.RouteHandler;

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render () {
        return (
            <div className='app-content'>
                App
                <RouteHandler {...this.props} />
            </div>
        );
    }
    onChange (state) {

    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
