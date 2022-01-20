import React from 'react'

import * as S from './Gradient.style'

export const hexToRgb = (hex: string) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const Gradient: React.FC<{ blur: string; colour: string; opacity: string }> = ({
  blur,
  colour,
  opacity,
}) => {
  return (
    <S.GradientContainer>
      <S.Glass
        style={{
          backdropFilter: `blur(${blur}px)`,
          background: `rgba(${hexToRgb(colour)?.r}, ${hexToRgb(colour)?.g}, ${
            hexToRgb(colour)?.b
          }, ${opacity})`,
        }}
      />
      <S.Text>Glassmorfizzm</S.Text>
    </S.GradientContainer>
  )
}

export default Gradient
