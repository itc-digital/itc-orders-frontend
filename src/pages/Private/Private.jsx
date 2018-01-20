import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut as logOutAction } from 'api/auth/actions';
import { apiRequest } from 'api/actions';
import { privateFetchResult } from './actions';
import { selectors } from './reducer';

class Private extends React.Component {
    componentDidMount() {
        this.props.privateFetch();
    }

    render() {
        const { privateData, logOut } = this.props;
        return (
            <div>
                <h1>Заказы</h1>
                <Link to="/">Главная</Link>
                <br />
                <button onClick={logOut}>Выйти</button>
                {privateData}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    privateData: selectors.selectPrivateData(state),
});

const mapDispatchToProps = dispatch => ({
    privateFetch: () =>
        dispatch(apiRequest({
            endpoint: 'private',
            resultType: privateFetchResult,
        })),
    logOut: () => dispatch(logOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Private);
