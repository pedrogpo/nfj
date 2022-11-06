import useHasMounted from '~/hooks/use-has-mounted/hook'

export default function ClientOnly({ children }) {
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return null
  }
  return children
}
