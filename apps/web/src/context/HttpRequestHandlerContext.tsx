import { ReactNode, createContext, useCallback } from 'react'
import { toast } from 'react-toastify'

interface HttpRequestHandlerProps {
  method: () => Promise<any>
  isGenericError?: boolean
}

interface HttpRequestHandlerContextType {
  handleHttp: (data: HttpRequestHandlerProps) => Promise<any>
}

export const HttpRequestHandlerContext =
  createContext<HttpRequestHandlerContextType>(
    {} as HttpRequestHandlerContextType
  )

interface HttpRequestHandlerContextProps {
  children: ReactNode
}

export default function HttpRequestHandlerContextProvider({
  children,
}: HttpRequestHandlerContextProps) {
  const handleHttp = useCallback(
    async ({ method, isGenericError = true }: HttpRequestHandlerProps) => {
      try {
        return await method()
      } catch (error) {
        if (isGenericError) {
          toast.error(error.message)
        }
        throw error
      }
    },
    []
  )

  return (
    <HttpRequestHandlerContext.Provider
      value={{
        handleHttp,
      }}
    >
      {children}
    </HttpRequestHandlerContext.Provider>
  )
}
