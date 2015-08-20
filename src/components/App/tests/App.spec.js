import React from 'react/addons';
import App from '../App.react.js';

const TestUtils = React.addons.TestUtils;

describe('The App component', function () {
    beforeEach(() => {        
        this.component = TestUtils.renderIntoDocument(<App />);
    });

    it('should render the App', () => {
        expect(TestUtils.findRenderedDOMComponentWithClass(this.component, 'app')).toBeDefined();
    });
});
