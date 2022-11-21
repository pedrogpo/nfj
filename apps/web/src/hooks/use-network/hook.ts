import { useCallback, useContext, useState } from 'react'
import { HttpRequestHandlerContext } from '~/context/HttpRequestHandlerContext'

const apiStatus = {
  initial: 'initial',
  loading: 'loading',
  complete: 'complete',
  errored: 'errored',
}

export const useNetwork = () => {
  const { handleHttp } = useContext(HttpRequestHandlerContext)
  const [status, setStatus] = useState(apiStatus.initial)
  const [error, setError] = useState(null)

  const request = useCallback(
    async (requestFn: () => Promise<any>): Promise<any> => {
      setStatus(apiStatus.loading)
      try {
        const response = await handleHttp({
          method: requestFn,
          isGenericError: true,
        })
        setStatus(apiStatus.complete)
        return response
      } catch (err) {
        setStatus(apiStatus.errored)
        setError(err.message)
      }
    },
    [handleHttp]
  )

  return { status, error, request }
}
