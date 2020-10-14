import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { Alert, Box, Button, Center, Spinner } from '@vtex/store-ui'
import React, { FC, useEffect, useState } from 'react'

import { OAuthLogin } from '../../../../sdk/auth/OAuth'
import { oAuthCallbackUrl } from '../../../../sdk/auth/OAuth/paths'
import { startLogin } from '../../../../sdk/auth/Service'
import { onLoginSuccessful } from '../../../../sdk/auth/utils'
import { AuthProviderComponentProps } from '../types'

type State = 'initial' | 'error'

const GoogleOAuth: FC<AuthProviderComponentProps> = ({ variant: v }) => {
  const { formatMessage } = useIntl()
  const [state, setState] = useState<State>('initial')
  const variant = `googleOAuth.${v}`

  useEffect(() => {
    ;(async () => {
      try {
        if (state === 'initial') {
          await startLogin({
            callbackUrl: oAuthCallbackUrl,
          })
          await OAuthLogin({ providerName: 'Google' })

          onLoginSuccessful()
        }
      } catch {
        setState('error')
      }
    })()
  }, [state])

  return (
    <Box variant={variant}>
      <Box variant={`${variant}.title`}>
        {formatMessage({
          id: 'login.page.googleOAuth.title',
          defaultMessage: 'Signing in with Google',
        })}
      </Box>
      {state === 'initial' ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <>
          <Alert variant="signInDanger">
            {formatMessage({
              id: 'login.page.googleOAuth.error',
              defaultMessage:
                'Signing in with Google failed. Please try again later or click on the button below to try again',
            })}
          </Alert>
          <Button onClick={() => setState('initial')}>
            {formatMessage({
              id: 'login.page.googleOAuth.tryAgain',
              defaultMessage: 'Try Again',
            })}
          </Button>
        </>
      )}
    </Box>
  )
}

export default GoogleOAuth
