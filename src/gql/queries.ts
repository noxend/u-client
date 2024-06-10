import { graphql } from './types'

export const GET_RISKS = graphql(`
	query Risks($limit: Int, $page: Int, $resolved: Boolean) {
		risks(limit: $limit, page: $page, resolved: $resolved) {
			items {
				id
				category {
					id
					name
				}
				description
				name
				resolved
				createdBy
				isDeleted @client
			}
			page
			totalItems
			totalPages
		}
	}
`)

export const GET_CATEGORIES = graphql(`
	query Categories($page: Int, $limit: Int, $searchTerm: String) {
		categories(page: $page, limit: $limit, name: $searchTerm) {
			items {
				id
				name
				createdBy
				description
			}
			page
			totalItems
			totalPages
		}
	}
`)
