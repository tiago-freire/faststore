/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type FooterQueryQueryVariables = Exact<{ [key: string]: never }>

export type FooterQueryQuery = {
  allDepartment: { nodes: Array<{ name: Maybe<string>; slug: Maybe<string> }> }
}

// Query Related Code

export const FooterQuery = {
  query:
    'query FooterQuery {\n  allDepartment(sort: {order: ASC, fields: name}) {\n    nodes {\n      name\n      slug\n    }\n  }\n}\n',
  sha256Hash:
    '710a5955f8eb20fb4d3015e76d050b41fac29fcf45c9edcbae750ecde0e51bf2',
  operationName: 'FooterQuery',
}
