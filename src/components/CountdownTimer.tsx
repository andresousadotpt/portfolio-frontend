import React from 'react';
import { calculateTimeDifference } from '../utils';

interface Props{
    text: string;
}

const Timer = (props: Props) => {
    return (
        <h1>{calculateTimeDifference(new Date().getTime(), new Date(2022, 0, 1).valueOf(), props.text)}</h1>
    );
};

export default Timer;