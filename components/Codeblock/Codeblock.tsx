import React from 'react'

import Syntax from 'react-syntax-highlighter'
import { arta } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import copy from 'copy-to-clipboard'

import { styled, keyframes } from '../../stitches/theme.config'

const TooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-60px)',
  },
})

export const Tooltip = styled('p', {
  color: 'white',
  fontFamily: '$primary',
  position: 'absolute',
  opacity: 0,
  fontSize: '$2',
})

const CopyButton = styled('button', {
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  padding: '15px 20px',
  fontSize: '$3',
  background: 'black',
  color: 'white',
  border: 'none',
  borderRadius: 5,
  transition: '0.1s linear',
  '&:hover': {
    background: 'black',
    cursor: 'pointer',
  },
  '.animate': {
    animation: `${TooltipAnimation} 0.5s linear`,
  },
})

const preStyle = {
  borderRadius: 6,
  padding: 30,
  fontFamily: `JetBrain Mono, monospace`,
  fontSize: 18,
  overflowX: '',
  background: 'black',
}

const Codeblock: React.FC<{
  blur: string
  opacity: string
}> = ({ blur }) => {
  const TooltipRef = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    TooltipRef.current!.addEventListener('animationend', () => {
      TooltipRef.current!.classList.remove('animate')
    })
  }, [])

  const code = `/* thekaranchauhan.com*/ 
      
backdrop-filter: blur(${blur}px); 
-webkit-backdrop-filter: blur(${blur}px); 
border: 1px solid rgba(255, 255, 255, 0.3);`


  return (
    <>
      <Syntax style={arta} language='css' customStyle={preStyle}>
        {code}
      </Syntax>
      <CopyButton
        onClick={() => {
          copy(code)
          TooltipRef.current!.classList.add('animate')
        }}
      >
        Copy <Tooltip ref={TooltipRef}>Copied</Tooltip>
      </CopyButton>
    </>
  )
}

export default Codeblock
