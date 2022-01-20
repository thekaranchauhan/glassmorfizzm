import { styled } from '../../stitches/theme.config'

export const SettingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const OptionBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 50,
  variants: {
    top: {
      true: {
        marginTop: 100,
      },
    },
  },
})

export const Label = styled('p', {
  color: 'white',
  fontSize: '$4',
  marginBottom: 30,
})

export const Slider = styled('input', {
  appearance: 'none',
  width: '50vw',
  height: 7,
  outline: 'none',
  background: 'black',
  borderRadius: 10,
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: 20,
    height: 20,
    borderRadius: 100,
    background: '#fff',
    cursor: 'pointer',
    transition: '0.1s linear',
  },
  '&::-webkit-slider-thumb:hover': {
    transform: 'scale(1.2)',
  },
})

export const ColourPicker = styled('input', {
  background: 'none',
  borderRadius: '100%',
  height: 30,
  width: '50vw',
  border: 'none',
  outline: 'none',
  appearance: 'none',
  transition: '0.1s linear',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1, 1.3)',
  },
  '&::-webkit-color-swatch-wrapper': {
    padding: 0,
  },
  '&::-webkit-color-swatch': {
    border: 'none',
    borderRadius: 5,
  },
})
