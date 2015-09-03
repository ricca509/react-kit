import React from 'react/addons';
import jasmineHelpers from '../../../../helpers/tests/router.js';
import App from '../App.react.js';

const TestUtils = React.addons.TestUtils;

describe('The App component', function() {
    beforeEach(() => {
        let AppWrapped = jasmineHelpers.stubRouterContext(App);

        this.component = TestUtils.renderIntoDocument(<AppWrapped/>);
    });

    it('should render the App', () => {
        expect(TestUtils.findRenderedDOMComponentWithClass(this.component, 'app-content')).toBeDefined();
    });
});
