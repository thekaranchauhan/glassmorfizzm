import React from 'react'

import Gradient, { hexToRgb } from '../../components/Gradient/Gradient'
import Codeblock from '../../components/Codeblock/Codeblock'

import * as S from './Settings.style'

const Settings: React.FC = () => {
  const opacityRef = React.useRef<HTMLInputElement>(null)
  const blurRef = React.useRef<HTMLInputElement>(null)
  const colourRef = React.useRef<HTMLInputElement>(null)

  const [opacity, setOpacity] = React.useState<string>('0.5')
  const [blur, setBlur] = React.useState<string>('8')
  const [colour, setColour] = React.useState('#FFFFFF')

  return (
    <>
      <Gradient blur={blur!} colour={colour!} opacity={opacity!} />
      <S.SettingsContainer>
        <S.OptionBox top>
          <S.Label>Transparency</S.Label>
          <S.Slider
            min={0}
            step={0.01}
            max={1}
            type='range'
            ref={opacityRef}
            onChange={() => setOpacity(opacityRef.current!.value)}
          />
        </S.OptionBox>
        <S.OptionBox>
          <S.Label>Blur</S.Label>
          <S.Slider
            min={0}
            step={1}
            max={15}
            type='range'
            ref={blurRef}
            onChange={() => setBlur(blurRef.current!.value)}
          />
        </S.OptionBox>
        <Codeblock
          blur={blur!}
          // colours={hexToRgb(colour!)!}
          opacity={opacity!}
        />
      </S.SettingsContainer>
    </>
  )
}

export default Settings
