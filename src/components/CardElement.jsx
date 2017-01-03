import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import moment from 'moment';

const styles = {
    card: {
        width: '250px',
        height: '250px',
        display: 'inline-block',
        margin: '0 10px 10px 0',
        background: 'rgba(221, 221, 221, 0.27)',
        float: 'left'
    },
    cardMedia: {
        fontWeight: 'bold',
        borderBottom: '1px solid'
    }
};

const CardElement = ({info}) => {
    return (
        <Card style={styles.card}>
            <CardTitle style={styles.cardMedia}
                subtitle={`Company: ${info.carrier}`}/>
            <CardTitle
                subtitle={`From: ${info.direction.from} at ${moment(new Date(info.departure)).format("DD-MM-YYYY HH:mm")}`}/>
            <CardTitle
                subtitle={`To: ${info.direction.to} at ${moment(new Date(info.arrival)).format("DD-MM-YYYY HH:mm")}`}/>
        </Card>
    );
};
export default CardElement;