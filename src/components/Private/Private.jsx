import React from 'react';
import { connect } from 'react-redux';
import { privateFetch } from './actions';
import { selectors } from './reducer';

class Private extends React.Component {
    componentDidMount() {
        this.props.privateFetch();
    }

    render() {
        const { privateData } = this.props;
        return <div>{privateData}</div>;
    }
}

const mapStateToProps = state => ({
    privateData: selectors.selectPrivateData(state),
});

const mapDispatchToProps = dispatch => ({
    privateFetch: () => dispatch(privateFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Private);
