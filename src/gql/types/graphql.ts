/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never
}
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: { input: any; output: any }
}

export type Category = {
	__typename?: 'Category'
	color?: Maybe<Scalars['String']['output']>
	createdAt: Scalars['DateTime']['output']
	createdBy: Scalars['String']['output']
	description?: Maybe<Scalars['String']['output']>
	id: Scalars['ID']['output']
	name: Scalars['String']['output']
	updatedAt: Scalars['DateTime']['output']
}

export type CategoryPaginatedResults = {
	__typename?: 'CategoryPaginatedResults'
	items: Array<Category>
	page: Scalars['Int']['output']
	totalItems: Scalars['Int']['output']
	totalPages: Scalars['Int']['output']
}

export type CreateCategoryInput = {
	createdBy: Scalars['String']['input']
	description?: InputMaybe<Scalars['String']['input']>
	name: Scalars['String']['input']
}

export type CreateRiskInput = {
	categoryId: Scalars['ID']['input']
	createdBy: Scalars['String']['input']
	description?: InputMaybe<Scalars['String']['input']>
	name: Scalars['String']['input']
	resolved: Scalars['Boolean']['input']
}

export type DeletionResult = {
	__typename?: 'DeletionResult'
	confirmationRequired?: Maybe<Scalars['Boolean']['output']>
	message?: Maybe<Scalars['String']['output']>
	success: Scalars['Boolean']['output']
}

export type Mutation = {
	__typename?: 'Mutation'
	createCategory: Category
	createRisk: Risk
	deleteCategory: DeletionResult
	deleteRisk: Risk
	updateCategory: Category
	updateRisk: Risk
}

export type MutationCreateCategoryArgs = {
	input: CreateCategoryInput
}

export type MutationCreateRiskArgs = {
	input: CreateRiskInput
}

export type MutationDeleteCategoryArgs = {
	confirm?: InputMaybe<Scalars['Boolean']['input']>
	id: Scalars['ID']['input']
}

export type MutationDeleteRiskArgs = {
	id: Scalars['ID']['input']
}

export type MutationUpdateCategoryArgs = {
	input: UpdateCategoryInput
}

export type MutationUpdateRiskArgs = {
	input: UpdateRiskInput
}

export type Query = {
	__typename?: 'Query'
	categories: CategoryPaginatedResults
	risks: RiskPaginatedResults
}

export type QueryCategoriesArgs = {
	limit?: InputMaybe<Scalars['Int']['input']>
	name?: InputMaybe<Scalars['String']['input']>
	page?: InputMaybe<Scalars['Int']['input']>
}

export type QueryRisksArgs = {
	limit?: InputMaybe<Scalars['Int']['input']>
	page?: InputMaybe<Scalars['Int']['input']>
	resolved?: InputMaybe<Scalars['Boolean']['input']>
}

export type Risk = {
	__typename?: 'Risk'
	category?: Maybe<Category>
	createdBy: Scalars['String']['output']
	description: Scalars['String']['output']
	id: Scalars['ID']['output']
	isDeleted?: Maybe<Scalars['Boolean']['output']>
	name: Scalars['String']['output']
	resolved: Scalars['Boolean']['output']
}

export type RiskPaginatedResults = {
	__typename?: 'RiskPaginatedResults'
	items: Array<Risk>
	page: Scalars['Int']['output']
	totalItems: Scalars['Int']['output']
	totalPages: Scalars['Int']['output']
}

export type UpdateCategoryInput = {
	createdBy?: InputMaybe<Scalars['String']['input']>
	description?: InputMaybe<Scalars['String']['input']>
	id: Scalars['String']['input']
	name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateRiskInput = {
	categoryId?: InputMaybe<Scalars['ID']['input']>
	createdBy?: InputMaybe<Scalars['String']['input']>
	description?: InputMaybe<Scalars['String']['input']>
	id: Scalars['ID']['input']
	name?: InputMaybe<Scalars['String']['input']>
	resolved?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateRiskResolvedMutationVariables = Exact<{
	input: UpdateRiskInput
}>

export type UpdateRiskResolvedMutation = {
	__typename?: 'Mutation'
	updateRisk: { __typename?: 'Risk'; id: string; resolved: boolean }
}

export type UpdateRiskNameMutationVariables = Exact<{
	input: UpdateRiskInput
}>

export type UpdateRiskNameMutation = {
	__typename?: 'Mutation'
	updateRisk: { __typename?: 'Risk'; id: string; name: string }
}

export type UpdateRiskDescriptionMutationVariables = Exact<{
	input: UpdateRiskInput
}>

export type UpdateRiskDescriptionMutation = {
	__typename?: 'Mutation'
	updateRisk: { __typename?: 'Risk'; id: string; description: string }
}

export type DeleteRiskMutationVariables = Exact<{
	id: Scalars['ID']['input']
}>

export type DeleteRiskMutation = {
	__typename?: 'Mutation'
	deleteRisk: { __typename?: 'Risk'; id: string; isDeleted?: boolean | null }
}

export type CreateRiskMutationVariables = Exact<{
	input: CreateRiskInput
}>

export type CreateRiskMutation = {
	__typename?: 'Mutation'
	createRisk: {
		__typename?: 'Risk'
		id: string
		name: string
		description: string
		resolved: boolean
		createdBy: string
		category?: { __typename?: 'Category'; id: string; name: string } | null
	}
}

export type DeleteCategoryMutationVariables = Exact<{
	id: Scalars['ID']['input']
	confirm?: InputMaybe<Scalars['Boolean']['input']>
}>

export type DeleteCategoryMutation = {
	__typename?: 'Mutation'
	deleteCategory: {
		__typename?: 'DeletionResult'
		confirmationRequired?: boolean | null
		message?: string | null
		success: boolean
	}
}

export type CreateCategoryMutationVariables = Exact<{
	input: CreateCategoryInput
}>

export type CreateCategoryMutation = {
	__typename?: 'Mutation'
	createCategory: {
		__typename?: 'Category'
		id: string
		name: string
		description?: string | null
		createdBy: string
	}
}

export type RisksQueryVariables = Exact<{
	limit?: InputMaybe<Scalars['Int']['input']>
	page?: InputMaybe<Scalars['Int']['input']>
	resolved?: InputMaybe<Scalars['Boolean']['input']>
}>

export type RisksQuery = {
	__typename?: 'Query'
	risks: {
		__typename?: 'RiskPaginatedResults'
		page: number
		totalItems: number
		totalPages: number
		items: Array<{
			__typename?: 'Risk'
			id: string
			description: string
			name: string
			resolved: boolean
			createdBy: string
			isDeleted?: boolean | null
			category?: { __typename?: 'Category'; id: string; name: string } | null
		}>
	}
}

export type CategoriesQueryVariables = Exact<{
	page?: InputMaybe<Scalars['Int']['input']>
	limit?: InputMaybe<Scalars['Int']['input']>
	searchTerm?: InputMaybe<Scalars['String']['input']>
}>

export type CategoriesQuery = {
	__typename?: 'Query'
	categories: {
		__typename?: 'CategoryPaginatedResults'
		page: number
		totalItems: number
		totalPages: number
		items: Array<{
			__typename?: 'Category'
			id: string
			name: string
			createdBy: string
			description?: string | null
		}>
	}
}

export const UpdateRiskResolvedDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateRiskResolved' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateRiskInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'updateRisk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'resolved' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<UpdateRiskResolvedMutation, UpdateRiskResolvedMutationVariables>
export const UpdateRiskNameDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateRiskName' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateRiskInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'updateRisk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<UpdateRiskNameMutation, UpdateRiskNameMutationVariables>
export const UpdateRiskDescriptionDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'UpdateRiskDescription' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'UpdateRiskInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'updateRisk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<UpdateRiskDescriptionMutation, UpdateRiskDescriptionMutationVariables>
export const DeleteRiskDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'DeleteRisk' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'deleteRisk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'isDeleted' },
									directives: [{ kind: 'Directive', name: { kind: 'Name', value: 'client' } }],
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<DeleteRiskMutation, DeleteRiskMutationVariables>
export const CreateRiskDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'CreateRisk' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateRiskInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'createRisk' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'resolved' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'category' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CreateRiskMutation, CreateRiskMutationVariables>
export const DeleteCategoryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'DeleteCategory' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
					},
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'confirm' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'deleteCategory' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'id' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'confirm' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'confirm' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'confirmationRequired' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'message' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'success' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>
export const CreateCategoryDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'mutation',
			name: { kind: 'Name', value: 'CreateCategory' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
					type: {
						kind: 'NonNullType',
						type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateCategoryInput' } },
					},
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'createCategory' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'input' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CreateCategoryMutation, CreateCategoryMutationVariables>
export const RisksDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Risks' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'resolved' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'risks' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'limit' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'page' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'resolved' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'resolved' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'items' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'category' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
														{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
													],
												},
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'resolved' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'isDeleted' },
												directives: [
													{ kind: 'Directive', name: { kind: 'Name', value: 'client' } },
												],
											},
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'page' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'totalItems' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'totalPages' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<RisksQuery, RisksQueryVariables>
export const CategoriesDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'Categories' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
				},
				{
					kind: 'VariableDefinition',
					variable: { kind: 'Variable', name: { kind: 'Name', value: 'searchTerm' } },
					type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
				},
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'categories' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'page' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'limit' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'limit' } },
							},
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'name' },
								value: { kind: 'Variable', name: { kind: 'Name', value: 'searchTerm' } },
							},
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'items' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'description' } },
										],
									},
								},
								{ kind: 'Field', name: { kind: 'Name', value: 'page' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'totalItems' } },
								{ kind: 'Field', name: { kind: 'Name', value: 'totalPages' } },
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>
