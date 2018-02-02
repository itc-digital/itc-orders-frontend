import React from 'react';
import injectSheet from 'react-jss';
import { H2, Text } from 'rambler-ui/Typography';

const styles = {
    card: {
        padding: '20px',
        border: '1px solid black',
        marginBottom: '10px',
    },
};

const OrderCard = ({
    classes, title, description, status,
}) => (
    <div className={classes.card}>
        <H2>Идея: {title}</H2>
        <Text>Описание: {description}</Text>
        <Text>Статус: {status}</Text>
    </div>
);

export default injectSheet(styles)(OrderCard);
