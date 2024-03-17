'use client'

import Clock from "./Components/Clock";

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >

      <div style={{
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <Clock/>
      </div>

    </main>
  );
}
