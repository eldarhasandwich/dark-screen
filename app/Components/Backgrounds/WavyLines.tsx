'use client'

import './wavylines.css'

const WavyLines: React.FC = () => {

    return (
        <div    
            className="body"
            style={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                zIndex: '-10'
            }}
        >

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
        </div>
    )
}

export default WavyLines;