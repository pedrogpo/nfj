import { Button, Input } from '~/components/atoms'
import { BiLock, BiUser } from 'react-icons/bi'
import { signIn } from 'next-auth/react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { routes } from '~/core/constants/routes'
import Link from 'next/link'
import * as S from './styles'
import { toast } from 'react-toastify'

const loginSchema = zod.object({
  email: zod.string().email('Email is not valid'),
  password: zod.string(),
})

type LoginFormData = zod.infer<typeof loginSchema>

export default function LoginForm() {
  const { handleSubmit, register, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  })
  const { errors } = formState

  const location = useRouter()

  async function handleSumbitLogin(data: LoginFormData) {
    const result = await signIn('login', {
      redirect: false,
      email: data.email,
      password: data.password,
    })

    if (result.ok) {
      location.push(routes.home)
    }
    if (result.error) {
      toast.error(result.error)
    }
  }

  return (
    <S.LoginFormContainer onSubmit={handleSubmit(handleSumbitLogin)}>
      <Input
        placeholder="Inform your email"
        sizeOf="m"
        icon={<BiUser />}
        className="input__email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        placeholder="Inform your password"
        sizeOf="m"
        icon={<BiLock />}
        className="input"
        {...register('password')}
      />
      <Link href="#" className="forgot__password">
        Forgot your password?
      </Link>
      <Button
        color="primary_500"
        size="l"
        fill="contained"
        type="submit"
        hug={false}
        className="login__button"
        disabled={formState.isSubmitting || !formState.isValid}
      >
        Log in
      </Button>
    </S.LoginFormContainer>
  )
}
