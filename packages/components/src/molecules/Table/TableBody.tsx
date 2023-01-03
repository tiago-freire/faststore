import type { HTMLAttributes } from 'react'
import React, { forwardRef } from 'react'

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
  /**
   * Children for TableBody components.
   */
  children: React.ReactNode
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody(
    { children, testId = 'fs-table-body', ...otherProps },
    ref
  ) {
    return (
      <tbody ref={ref} data-testid={testId} data-fs-table-body {...otherProps}>
        {children}
      </tbody>
    )
  }
)

export default TableBody