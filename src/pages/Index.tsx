import { Dithering } from '@paper-design/shaders-react';

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K6QTKWX52CKA6TD44KQT0HN3?node=01K77CYFG1V46P2QBY7416EKDR
 * on Oct 10, 2025 at 5:48 PM.
 */
export default function Frame() {
  return (
    <div
      style={{
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        contain: 'layout',
        display: 'flex',
        flex: '1 0 0px',
        flexBasis: '0px',
        flexDirection: 'row',
        flexGrow: '1',
        flexShrink: '0',
        gap: 10,
        height: 'auto',
        justifyContent: 'center',
        margin: 0,
        minHeight: '100dvh',
        overflowWrap: 'break-word',
        paddingBlock: 0,
        paddingInline: 0,
        transformOrigin: '50% 50%',
        width: '100%',
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
        frame={2116942.615999751}
        style={{
          backgroundColor: '#FD4330',
          borderRadius: '12px',
          boxShadow: '#FF000530 0px 0px 12px 2px',
          flexShrink: '0',
          height: '56px',
          width: '56px',
        }}
      />
      <div
        style={{
          alignItems: 'start',
          boxSizing: 'border-box',
          contain: 'layout',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: '0',
          height: 'fit-content',
          justifyContent: 'center',
          overflowWrap: 'break-word',
          paddingBlock: 0,
          paddingInline: 0,
          transformOrigin: '50% 50%',
          width: 'fit-content',
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            color: '#000000',
            flexShrink: '0',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '24px',
            fontSynthesis: 'none',
            fontWeight: 600,
            height: 'fit-content',
            letterSpacing: '-0.012em',
            lineHeight: '120%',
            MozOsxFontSmoothing: 'grayscale',
            transformOrigin: '50% 50%',
            WebkitFontSmoothing: 'antialiased',
            whiteSpace: 'pre',
            width: 'fit-content',
          }}
        >
          Toni
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            color: '#000000',
            flexShrink: '0',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '16px',
            fontSynthesis: 'none',
            fontWeight: 400,
            height: 'fit-content',
            letterSpacing: '-0.012em',
            lineHeight: '120%',
            MozOsxFontSmoothing: 'grayscale',
            transformOrigin: '50% 50%',
            WebkitFontSmoothing: 'antialiased',
            whiteSpace: 'pre-wrap',
            width: 'auto',
          }}
        >
          Product designer
        </div>
      </div>
    </div>
  );
}
