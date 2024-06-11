/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation UpdateRiskResolved($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      resolved\n    }\n  }\n": types.UpdateRiskResolvedDocument,
    "\n  mutation UpdateRiskName($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      name\n    }\n  }\n": types.UpdateRiskNameDocument,
    "\n  mutation UpdateRiskDescription($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      description\n    }\n  }\n": types.UpdateRiskDescriptionDocument,
    "\n  mutation DeleteRisk($id: ID!) {\n    deleteRisk(id: $id) {\n      id\n      isDeleted @client\n    }\n  }\n": types.DeleteRiskDocument,
    "\n  mutation CreateRisk($input: CreateRiskInput!) {\n    createRisk(input: $input) {\n      id\n      name\n      description\n      resolved\n      category {\n        id\n        name\n      }\n      createdBy\n    }\n  }\n": types.CreateRiskDocument,
    "\n  mutation DeleteCategory($id: ID!, $confirm: Boolean) {\n    deleteCategory(id: $id, confirm: $confirm) {\n      confirmationRequired\n      message\n      success\n    }\n  }\n": types.DeleteCategoryDocument,
    "\n  mutation CreateCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      description\n      createdBy\n    }\n  }\n": types.CreateCategoryDocument,
    "\n  query Risks($limit: Int, $page: Int, $resolved: Boolean) {\n    risks(limit: $limit, page: $page, resolved: $resolved) {\n      items {\n        id\n        category {\n          id\n          name\n        }\n        description\n        name\n        resolved\n        createdBy\n        isDeleted @client\n      }\n      page\n      totalItems\n      totalPages\n    }\n  }\n": types.RisksDocument,
    "\n  query Categories($page: Int, $limit: Int, $searchTerm: String) {\n    categories(page: $page, limit: $limit, name: $searchTerm) {\n      items {\n        id\n        name\n        createdBy\n        description\n      }\n      page\n      totalItems\n      totalPages\n    }\n  }\n": types.CategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateRiskResolved($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      resolved\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateRiskResolved($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      resolved\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateRiskName($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateRiskName($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateRiskDescription($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateRiskDescription($input: UpdateRiskInput!) {\n    updateRisk(input: $input) {\n      id\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteRisk($id: ID!) {\n    deleteRisk(id: $id) {\n      id\n      isDeleted @client\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteRisk($id: ID!) {\n    deleteRisk(id: $id) {\n      id\n      isDeleted @client\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRisk($input: CreateRiskInput!) {\n    createRisk(input: $input) {\n      id\n      name\n      description\n      resolved\n      category {\n        id\n        name\n      }\n      createdBy\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRisk($input: CreateRiskInput!) {\n    createRisk(input: $input) {\n      id\n      name\n      description\n      resolved\n      category {\n        id\n        name\n      }\n      createdBy\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCategory($id: ID!, $confirm: Boolean) {\n    deleteCategory(id: $id, confirm: $confirm) {\n      confirmationRequired\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCategory($id: ID!, $confirm: Boolean) {\n    deleteCategory(id: $id, confirm: $confirm) {\n      confirmationRequired\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      description\n      createdBy\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      description\n      createdBy\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Risks($limit: Int, $page: Int, $resolved: Boolean) {\n    risks(limit: $limit, page: $page, resolved: $resolved) {\n      items {\n        id\n        category {\n          id\n          name\n        }\n        description\n        name\n        resolved\n        createdBy\n        isDeleted @client\n      }\n      page\n      totalItems\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Risks($limit: Int, $page: Int, $resolved: Boolean) {\n    risks(limit: $limit, page: $page, resolved: $resolved) {\n      items {\n        id\n        category {\n          id\n          name\n        }\n        description\n        name\n        resolved\n        createdBy\n        isDeleted @client\n      }\n      page\n      totalItems\n      totalPages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Categories($page: Int, $limit: Int, $searchTerm: String) {\n    categories(page: $page, limit: $limit, name: $searchTerm) {\n      items {\n        id\n        name\n        createdBy\n        description\n      }\n      page\n      totalItems\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query Categories($page: Int, $limit: Int, $searchTerm: String) {\n    categories(page: $page, limit: $limit, name: $searchTerm) {\n      items {\n        id\n        name\n        createdBy\n        description\n      }\n      page\n      totalItems\n      totalPages\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;