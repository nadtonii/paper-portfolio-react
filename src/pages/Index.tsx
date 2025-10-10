/** @paper-design/shaders-react@0.0.57 */
import { Dithering } from '@paper-design/shaders-react';

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K6QTKWX52CKA6TD44KQT0HN3?node=01K77BE9GX6DWTCBB2AZ97P0CD
 * on Oct 10, 2025 at 6:07 PM.
 */
export default function Frame() {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        contain: 'content',
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        height: '1024px',
        justifyContent: 'center',
        overflowWrap: 'break-word',
        paddingBlock: 16,
        paddingInline: 16,
        transformOrigin: '0% 0%',
        width: '1440px',
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          contain: 'layout',
          flexShrink: '0',
          height: '992px',
          overflowWrap: 'break-word',
          transformOrigin: '50% 50%',
          width: '1408px',
        }}
      >
        <Dithering
          colorBack="#00000000"
          colorFront="#FFFFFF"
          speed={2}
          shape="sphere"
          type="8x8"
          size={0.1}
          scale={0.6}
          frame={4342839.615999129}
          style={{
            backgroundColor: '#FD4330',
            borderRadius: '12px',
            boxShadow: '#FF000530 0px 0px 12px 2px',
            height: '992px',
            left: '0',
            position: 'fixed',
            top: '0',
            transform: 'translate(0px, 0px)',
            width: '1408px',
          }}
        />
        <div
          style={{
            alignItems: 'center',
            boxSizing: 'border-box',
            contain: 'layout',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'end',
            left: '0',
            overflowWrap: 'break-word',
            paddingBlock: '16px',
            paddingInline: 0,
            position: 'fixed',
            top: '0',
            transform: 'translate(0px, 0px)',
            transformOrigin: '0% 0%',
            width: '100%',
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              color: '#FFFFFF',
              flexShrink: '0',
              fontFamily: '"Instrument Serif", system-ui, sans-serif',
              fontSize: '36px',
              fontSynthesis: 'none',
              fontWeight: 400,
              height: 'fit-content',
              letterSpacing: '-0.012em',
              lineHeight: '120%',
              MozOsxFontSmoothing: 'grayscale',
              textAlign: 'center',
              transformOrigin: '50% 50%',
              WebkitFontSmoothing: 'antialiased',
              whiteSpace: 'pre',
              width: 'fit-content',
            }}
          >
            Thinking.
          </div>
        </div>
        <div
          style={{
            alignItems: 'center',
            borderRadius: '36px',
            boxSizing: 'border-box',
            contain: 'layout',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            height: '100%',
            justifyContent: 'start',
            left: '0',
            overflowWrap: 'break-word',
            paddingBlock: '16px',
            paddingInline: 0,
            position: 'fixed',
            top: '0',
            transform: 'translate(0px, 0px)',
            transformOrigin: '0% 0%',
            width: '100%',
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              color: '#FFFFFF',
              flexShrink: '0',
              fontFamily: '"Instrument Serif", system-ui, sans-serif',
              fontSize: '36px',
              fontSynthesis: 'none',
              fontWeight: 400,
              height: 'fit-content',
              lineHeight: '120%',
              MozOsxFontSmoothing: 'grayscale',
              textAlign: 'center',
              transformOrigin: '50% 50%',
              WebkitFontSmoothing: 'antialiased',
              whiteSpace: 'pre',
              width: 'fit-content',
            }}
          >
            Toni
          </div>
        </div>
      </div>
    </div>
  );
}
