import * as S from './styles'

import { FiMail } from 'react-icons/fi'
import { Input, Title } from '~/components/atoms'

export default function CredentialsBox() {
  return (
    <S.CredentialsBox>
      <Title as="p" className="mb-0" color="gray_100" size="s" weight="bold">
        Your credentials
      </Title>
      <Input
        value="ploowcs@gmail.com"
        icon={<FiMail />}
        iconPos="left"
        iconSize={18}
        sizeOf="m"
        disabled={true}
      />
      <Input
        value="ploowcs@gmail.com"
        icon={<FiMail />}
        iconPos="left"
        iconSize={18}
        sizeOf="m"
        disabled={true}
      />
    </S.CredentialsBox>
  )
}
