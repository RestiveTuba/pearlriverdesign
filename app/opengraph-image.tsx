import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pearl River Design — Contractor Websites for Rockland County'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1F3C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '6px',
            background: 'linear-gradient(90deg, #22D3EE, #6366F1, #A855F7)',
            borderRadius: '3px',
            marginBottom: '40px',
          }}
        />
        <div
          style={{
            fontSize: '80px',
            fontWeight: '700',
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          pearlriver
        </div>
        <div
          style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '6px',
            marginBottom: '48px',
          }}
        >
          DESIGN
        </div>
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255,255,255,0.75)',
            fontWeight: '400',
          }}
        >
          Contractor websites for Rockland County, NY. Live in 2 minutes.
        </div>
      </div>
    ),
    size
  )
}
