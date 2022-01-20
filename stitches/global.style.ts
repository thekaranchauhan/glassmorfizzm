import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },
  html: {
    overflowX: 'hidden',
  },
  button: {
    userSelect: 'none',
    fontFamily: '$main',
  },
  body: {
    color: 'white',
    background: '#161E54',
    overflowX: 'hidden',
    fontFamily: '$main',
  },
  '::selection': {
    color: '#fff',
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '#586145',
  },
  pre: {
    fontFamily: 'Fira Code, monospace !important',
  },
})

export default globalStyle
