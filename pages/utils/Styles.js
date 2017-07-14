export const angle = direction => [
  {
    position: 'relative',
    zIndex: 1,

    '&:before, &:after': {
      background: 'inherit',
      pointerEvents: 'none',
      content: '""',
      display: 'block',
      height: '50%',
      left: 0,
      position: 'absolute',
      right: 0,
      zIndex: -1,
    },
  },
  direction === 'right'
    ? {
      ':before': {
        top: 0,
        transform: 'skewY(2deg)',
        transformOrigin: '100% 0',
      },

      ':after': {
        bottom: 0,
        transform: 'skewY(-2deg)',
        transformOrigin: '100%',
      },
    }
    : {
      ':before': {
        top: 0,
        transform: 'skewY(-2deg)',
        transformOrigin: '100% 0',
      },

      ':after': {
        bottom: 0,
        transform: 'skewY(2deg)',
        transformOrigin: '100%',
      },
    },
]
