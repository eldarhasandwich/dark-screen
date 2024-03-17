'use client'

import React, { useState, useEffect } from 'react';

const padTwoZeros = (n: number) => String(n).padStart(2, "0");

export const get12HrTime = (time: Date) => {
	const [h, m] = [time.getHours(), time.getMinutes()];
	const hourModulo = h % 12;

	return `${hourModulo === 0 ? 12 : hourModulo}:${padTwoZeros(m)}${h >= 12 ? "pm" : "am"}`;
};

export const get24HrTime = (time: Date) => {
    const [h, m, s] = [time.getHours(), time.getMinutes(), time.getSeconds()].map(padTwoZeros);
    return `${h}:${m}:${s}`;
}

function Clock() {

    const [currentTime, setCurrentTime] = useState<Date>(new Date(Date.now()))

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date(Date.now()))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            color: 'grey',
            fontFamily: '"Gruppo", sans-serif',
            margin: '3%'
        }} >
            <h1 style={{
                fontSize: '14vh',
                margin: '0px'
            }}>
                {get24HrTime(currentTime)}
            </h1>
        </div>
    );
}

export default Clock;