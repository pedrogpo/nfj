import { signIn } from 'next-auth/react'
import { Button } from '~/components/atoms'
import DividerWithText from '~/components/atoms/divider'
import * as S from './styles'
export default function SocialSignUp() {
  async function handleGoogleButton() {
    const result = await signIn('google')
  }
  return (
    <S.SocialSignUpContainer>
      <DividerWithText>or</DividerWithText>
      <div className="social__buttons">
        <Button
          fill="outlined"
          hug={false}
          onClick={() => {
            handleGoogleButton()
          }}
        >
          Continue with Google
        </Button>
        <Button fill="outlined" hug={false}>
          Continue with Facebook
        </Button>
      </div>
    </S.SocialSignUpContainer>
  )
}
