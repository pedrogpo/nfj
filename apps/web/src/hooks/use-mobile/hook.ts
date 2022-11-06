import { useContext } from 'react'
import { DeviceSizeContext } from '~/context/DeviceSizeContext'

export default function useMobile() {
  const { isMobile } = useContext(DeviceSizeContext)
  return isMobile
}
