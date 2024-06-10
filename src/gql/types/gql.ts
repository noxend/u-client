/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as types from './graphql'

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
	'\n\tmutation UpdateRiskResolved($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tresolved\n\t\t}\n\t}\n':
		types.UpdateRiskResolvedDocument,
	'\n\tmutation UpdateRiskName($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n':
		types.UpdateRiskNameDocument,
	'\n\tmutation UpdateRiskDescription($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tdescription\n\t\t}\n\t}\n':
		types.UpdateRiskDescriptionDocument,
	'\n\tmutation DeleteRisk($id: ID!) {\n\t\tdeleteRisk(id: $id) {\n\t\t\tid\n\t\t\tisDeleted @client\n\t\t}\n\t}\n':
		types.DeleteRiskDocument,
	'\n\tmutation CreateRisk($input: CreateRiskInput!) {\n\t\tcreateRisk(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tresolved\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcreatedBy\n\t\t}\n\t}\n':
		types.CreateRiskDocument,
	'\n\tmutation DeleteCategory($id: ID!, $confirm: Boolean) {\n\t\tdeleteCategory(id: $id, confirm: $confirm) {\n\t\t\tconfirmationRequired\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n':
		types.DeleteCategoryDocument,
	'\n\tmutation CreateCategory($input: CreateCategoryInput!) {\n\t\tcreateCategory(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tcreatedBy\n\t\t}\n\t}\n':
		types.CreateCategoryDocument,
	'\n\tquery Risks($limit: Int, $page: Int, $resolved: Boolean) {\n\t\trisks(limit: $limit, page: $page, resolved: $resolved) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tcategory {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tname\n\t\t\t\tresolved\n\t\t\t\tcreatedBy\n\t\t\t\tisDeleted @client\n\t\t\t}\n\t\t\tpage\n\t\t\ttotalItems\n\t\t\ttotalPages\n\t\t}\n\t}\n':
		types.RisksDocument,
	'\n\tquery Categories($page: Int, $limit: Int, $searchTerm: String) {\n\t\tcategories(page: $page, limit: $limit, name: $searchTerm) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedBy\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tpage\n\t\t\ttotalItems\n\t\t\ttotalPages\n\t\t}\n\t}\n':
		types.CategoriesDocument,
}

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
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation UpdateRiskResolved($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tresolved\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation UpdateRiskResolved($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tresolved\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation UpdateRiskName($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation UpdateRiskName($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation UpdateRiskDescription($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tdescription\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation UpdateRiskDescription($input: UpdateRiskInput!) {\n\t\tupdateRisk(input: $input) {\n\t\t\tid\n\t\t\tdescription\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation DeleteRisk($id: ID!) {\n\t\tdeleteRisk(id: $id) {\n\t\t\tid\n\t\t\tisDeleted @client\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation DeleteRisk($id: ID!) {\n\t\tdeleteRisk(id: $id) {\n\t\t\tid\n\t\t\tisDeleted @client\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation CreateRisk($input: CreateRiskInput!) {\n\t\tcreateRisk(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tresolved\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcreatedBy\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation CreateRisk($input: CreateRiskInput!) {\n\t\tcreateRisk(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tresolved\n\t\t\tcategory {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tcreatedBy\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation DeleteCategory($id: ID!, $confirm: Boolean) {\n\t\tdeleteCategory(id: $id, confirm: $confirm) {\n\t\t\tconfirmationRequired\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation DeleteCategory($id: ID!, $confirm: Boolean) {\n\t\tdeleteCategory(id: $id, confirm: $confirm) {\n\t\t\tconfirmationRequired\n\t\t\tmessage\n\t\t\tsuccess\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation CreateCategory($input: CreateCategoryInput!) {\n\t\tcreateCategory(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tcreatedBy\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation CreateCategory($input: CreateCategoryInput!) {\n\t\tcreateCategory(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tcreatedBy\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Risks($limit: Int, $page: Int, $resolved: Boolean) {\n\t\trisks(limit: $limit, page: $page, resolved: $resolved) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tcategory {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tname\n\t\t\t\tresolved\n\t\t\t\tcreatedBy\n\t\t\t\tisDeleted @client\n\t\t\t}\n\t\t\tpage\n\t\t\ttotalItems\n\t\t\ttotalPages\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery Risks($limit: Int, $page: Int, $resolved: Boolean) {\n\t\trisks(limit: $limit, page: $page, resolved: $resolved) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tcategory {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tname\n\t\t\t\tresolved\n\t\t\t\tcreatedBy\n\t\t\t\tisDeleted @client\n\t\t\t}\n\t\t\tpage\n\t\t\ttotalItems\n\t\t\ttotalPages\n\t\t}\n\t}\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery Categories($page: Int, $limit: Int, $searchTerm: String) {\n\t\tcategories(page: $page, limit: $limit, name: $searchTerm) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedBy\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tpage\n\t\t\ttotalItems\n\t\t\ttotalPages\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery Categories($page: Int, $limit: Int, $searchTerm: String) {\n\t\tcategories(page: $page, limit: $limit, name: $searchTerm) {\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tcreatedBy\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tpage\n\t\t\ttotalItems\n\t\t\ttotalPages\n\t\t}\n\t}\n']

export function graphql(source: string) {
	return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
