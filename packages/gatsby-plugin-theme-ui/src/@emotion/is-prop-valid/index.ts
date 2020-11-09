import memoize from '@emotion/memoize'

import { reactProps } from './props'

const reactPropsRegex = /^(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/

const isPropValid = memoize((prop: string) => (
  ( prop.charCodeAt(0) === 111 /* o */ && prop.charCodeAt(1) === 110 /* n */ && prop.charCodeAt(2) < 91 /* Z+1 */ ) ||
  ( !!reactProps[prop] || reactPropsRegex.test(prop) )
))

export default isPropValid
