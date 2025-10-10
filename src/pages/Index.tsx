import { Dithering } from '@paper-design/shaders-react';

/**
 * Code exported from Paper
 * https://app.paper.design/file/01K6QTKWX52CKA6TD44KQT0HN3?node=01K77B5S56846MVRBK6ACH42RE
 * on Oct 10, 2025 at 5:25 PM.
 */
export default function Frame() {
  return (
    <div
      style={{
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        contain: 'content',
        display: 'flex',
        flex: '1 0 0px',
        flexBasis: '0px',
        flexDirection: 'column',
        flexGrow: '1',
        flexShrink: '0',
        gap: 16,
        height: 'auto',
        justifyContent: 'center',
        overflowWrap: 'break-word',
        paddingBlock: 16,
        paddingInline: 16,
        transformOrigin: '50% 50%',
        width: 'auto',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          contain: 'layout',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: '0',
          gap: 6,
          height: '56px',
          justifyContent: 'start',
          overflowWrap: 'break-word',
          paddingBlock: 0,
          paddingInline: 0,
          transformOrigin: '50% 50%',
          width: '159.492px',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            contain: 'layout',
            display: 'flex',
            flex: '1 0 0px',
            flexBasis: '0px',
            flexDirection: 'row',
            flexGrow: '1',
            flexShrink: '0',
            gap: 5,
            height: 'auto',
            justifyContent: 'center',
            overflowWrap: 'break-word',
            paddingBlock: 0,
            paddingInline: 0,
            transformOrigin: '50% 50%',
            width: 'auto',
          }}
        >
          <Dithering
            colorBack="#00000000"
            colorFront="#FD4330"
            speed={1}
            shape="sphere"
            type="8x8"
            size={0.1}
            scale={0.6}
            frame={493309.6999998328}
            style={{ flexShrink: '0', height: '56px', width: '56px' }}
          />
          <div
            style={{
              alignItems: 'start',
              boxSizing: 'border-box',
              contain: 'layout',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: '0',
              gap: 0,
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
                fontFamily: '"Quicksand", system-ui, sans-serif',
                fontSize: '16px',
                fontSynthesis: 'none',
                fontWeight: 600,
                height: 'fit-content',
                letterSpacing: '0.02em',
                lineHeight: '150%',
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
                fontFamily: '"Quicksand", system-ui, sans-serif',
                fontSize: '12px',
                fontSynthesis: 'none',
                fontWeight: 400,
                height: 'fit-content',
                letterSpacing: '0.02em',
                lineHeight: '150%',
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
      </div>
    </div>
  );
}
