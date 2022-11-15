import * as S from './styles'
import Image from 'next/image'

import ImageProfile from 'public/images/market/strawberry.png'

import { BiEditAlt } from 'react-icons/bi'
import { Input, Text, Title } from '~/components/atoms'

export default function ProfileBox() {
  return (
    <S.ProfileBox>
      <S.ProfileHeader>
        <Image width={120} src={ImageProfile} alt="Ploow Profile Image" />
        <BiEditAlt color="white" size={25} className="icon__edit" />
      </S.ProfileHeader>
      <S.ProfileContent>
        <div className="d-flex align-items-center gap-3 mb-2">
          <Title className="mb-0" color="gray_100" size="m" weight="semibold">
            Pedro Guilherme
          </Title>
          <Image
            src="/icons/verified.svg"
            alt="user verified"
            width={20}
            height={20}
          />
        </div>
        <Text className="mb-4" color="gray_400" size="xl" weight="medium">
          Member since 07 September, 2022
        </Text>
        <Input
          value="Hello, I’m Pedro :)"
          icon={<BiEditAlt />}
          iconPos="right"
          iconSize={15}
          sizeOf="l"
          disabled={true}
        />
      </S.ProfileContent>
    </S.ProfileBox>
  )
}
