import { styled } from '../../stitches/theme.config'

export const GradientContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '50vh',
  background:
    'url("https://media.discordapp.net/attachments/785862408606187528/898788685225525249/Gradient.png")',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
})

export const Text = styled('div', {
  color: '#fff',
  position: 'absolute',
  fontSize: 96,
  userSelect: 'none',
})

export const Glass = styled('div', {
  height: 200,
  width: 500,
  border: '2px solid #FFFFFF35',
  borderRadius: 20,
  backdropFilter: 'blur(8px)',
  zIndex: 5,
})
