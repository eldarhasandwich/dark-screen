'use client'

import SegmentedWave from "./Components/Backgrounds/SegmentedWave";
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

        <SegmentedWave/>


            <div style={{
                display: 'flex',
                alignItems: 'flex-end'
            }}>
                <Clock />
            </div>

        </div>
    );
}
