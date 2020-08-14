
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
}

// Operation related types
export type SearchPageQueryQueryVariables = Exact<{
  query: Maybe<Scalars['String']>;
  map: Maybe<Scalars['String']>;
  staticPath: Scalars['Boolean'];
  orderBy?: Maybe<Scalars['String']>;
}>;


export type SearchPageQueryQuery = { vtex: { productSearch: Maybe<{ titleTag: Maybe<string>, recordsFiltered: Maybe<number>, products: Maybe<Array<Maybe<{ productId: Maybe<string>, productName: Maybe<string>, description: Maybe<string>, linkText: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>>, sellers: Maybe<Array<Maybe<{ sellerId: Maybe<string>, commertialOffer: Maybe<{ AvailableQuantity: Maybe<number>, Price: Maybe<number>, ListPrice: Maybe<number> }> }>>> }>>> }>>>, breadcrumb: Maybe<Array<Maybe<{ href: Maybe<string>, name: Maybe<string> }>>> }>, facets: Maybe<{ specificationFilters: Maybe<Array<Maybe<{ name: Maybe<string>, values: Maybe<Array<Maybe<{ name: Maybe<string>, selected: boolean, quantity: number, to: string }>>> }>>>, brands: Maybe<Array<Maybe<{ name: string, selected: boolean, quantity: number, to: string }>>>, categoriesTrees: Maybe<Array<Maybe<{ name: Maybe<string>, quantity: number, selected: boolean, to: string, values: Maybe<Array<Maybe<{ name: Maybe<string>, quantity: number, selected: boolean, to: string }>>> }>>> }> } };


// Query Related Code

export const SearchPageQuery = {
  query: "query SearchPageQuery($query: String, $map: String, $staticPath: Boolean!, $orderBy: String = \"OrderByScoreDESC\") {\n  vtex {\n    productSearch(orderBy: $orderBy, query: $query, map: $map, from: 0, to: 9) @include(if: $staticPath) {\n      products {\n        productId\n        productName\n        description\n        linkText\n        items {\n          itemId\n          images {\n            imageUrl\n            imageText\n          }\n          sellers {\n            sellerId\n            commertialOffer {\n              AvailableQuantity\n              Price\n              ListPrice\n            }\n          }\n        }\n      }\n      breadcrumb {\n        href\n        name\n      }\n      titleTag\n      recordsFiltered\n    }\n    facets(query: $query, map: $map) @include(if: $staticPath) {\n      specificationFilters {\n        name\n        values: facets {\n          to: linkEncoded\n          name\n          selected\n          quantity\n        }\n      }\n      brands {\n        to: linkEncoded\n        name\n        selected\n        quantity\n      }\n      categoriesTrees {\n        name\n        quantity\n        selected\n        to: linkEncoded\n        values: children {\n          name\n          quantity\n          selected\n          to: linkEncoded\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "a710218aaca28ce38dad0dee370c054629d8c1001ce79c3fb1d191a6d102b8e8",
  operationName: "SearchPageQuery",
}

