import React from 'react';
import { connect } from 'react-redux';
import { fetchPrivate } from './actions';

const Private = props => <div>{props.fetchPrivate()}</div>;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    fetchPrivate: dispatch(fetchPrivate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Private);
