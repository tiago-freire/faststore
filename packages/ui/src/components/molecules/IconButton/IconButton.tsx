import type { ReactNode } from 'react'
import React, { forwardRef } from 'react'

import { Icon } from '@faststore/components'
import type { ButtonProps } from '../../atoms/Button'
import Button from '../../atoms/Button'

export interface Props extends Omit<ButtonProps, 'children' | 'aria-label'> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
  /**
   * A React component that will be rendered as an icon.
   */
  icon: ReactNode

  /**
   * Label to be required for accessibility.
   */
  'aria-label': string
}

const IconButton = forwardRef<HTMLButtonElement, Props>(function IconButton(
  { icon, testId = 'store-icon-button', ...buttonProps },
  ref
) {
  return (
    <Button ref={ref} data-fs-icon-button testId={testId} {...buttonProps}>
      <Icon component={icon} />
    </Button>
  )
})

export default IconButton
