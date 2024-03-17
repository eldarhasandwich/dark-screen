'use client'

import WavyLines from "./Components/Backgrounds/WavyLines";
import Clock from "./Components/Clock";

export default function Home() {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'flex-end'
            }}>
                <Clock />
            </div>

            <WavyLines />

        </div>
    );
}
