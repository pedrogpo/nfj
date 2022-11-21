import * as S from './styles'
import { Button, CheckBoxInput, Input } from '~/components/atoms'
import { BiLock, BiMailSend, BiUser } from 'react-icons/bi'
import { signIn } from 'next-auth/react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { routes } from '~/core/constants/routes'
import { toast } from 'react-toastify'

const registerSchema = zod
  .object({
    name: zod.string().min(3, 'Name must be at least 3 characters'),
    email: zod.string().email('Email is not valid'),
    password: zod.string().min(4, 'Password must be at least 4 characters'),
    confirmPassword: zod.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'The passwords did not match',
      })
    }
  })

type RegisterFormData = zod.infer<typeof registerSchema>

export default function RegisterForm() {
  const { handleSubmit, register, formState } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  })
  const { errors } = formState
  const location = useRouter()
  console.log(errors)
  async function handleSumbitRegister(data: RegisterFormData) {
    const result = await signIn('register', {
      redirect: false,
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    })

    if (result.ok) {
      location.push(routes.home)
    }
    if (result.error) {
      toast.error(result.error)
    }
  }

  return (
    <S.RegisterFormContainer onSubmit={handleSubmit(handleSumbitRegister)}>
      <Input
        placeholder="Inform your name"
        sizeOf="l"
        icon={<BiUser />}
        className="input"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        placeholder="Inform your email"
        sizeOf="l"
        icon={<BiMailSend />}
        className="input"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        placeholder="Inform your password"
        sizeOf="l"
        icon={<BiLock />}
        className="input"
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        placeholder="Confirm your password"
        sizeOf="l"
        icon={<BiLock />}
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <CheckBoxInput />
      <Button
        color="primary_500"
        size="l"
        fill="contained"
        hug={false}
        className="Register__button"
        disabled={formState.isSubmitting || !formState.isValid}
      >
        Create a personal account
      </Button>
    </S.RegisterFormContainer>
  )
}
