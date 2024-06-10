import { useQuery } from '@apollo/client'
import Table, { Column } from '@components/Table'
import { GET_CATEGORIES } from '@gql/queries'
import { Category } from '@gql/types/graphql'
import { useDebounce } from '@uidotdev/usehooks'
import { useMemo, useState } from 'react'
import CategoryCreateButton from './CategoryCreateButton'
import CategoryDeleteButton from './CategoryDeleteButton'
import CategoryFilters from './CategoryFilters'

const CategoriesTable = () => {
	const [page, setPage] = useState(1)
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearchTerm = useDebounce(searchTerm, 300)

	const { data, loading, previousData } = useQuery(GET_CATEGORIES, {
		variables: {
			searchTerm: debouncedSearchTerm,
			page,
		},
	})

	const result = data || previousData

	const categories = (result?.categories.items || []).map((category) => ({
		...category,
		key: category.id,
	}))

	const totalPages = result?.categories.totalPages ?? 0
	const totalItems = result?.categories.totalItems ?? 0

	const topContent = useMemo(
		() => (
			<div className="flex items-center justify-between">
				<CategoryFilters
					searchTerm={searchTerm}
					onSearch={(searchTerm) => setSearchTerm(searchTerm)}
				/>
				<CategoryCreateButton />
			</div>
		),
		[searchTerm],
	)

	const columns = useMemo<Column<Pick<Category, 'id' | 'name' | 'description' | 'createdBy'>>[]>(
		() => [
			{
				key: 'name',
				label: 'Name',
				render: ({ name }) => name,
			},
			{
				key: 'description',
				label: 'Description',
				render: ({ description }) => description,
			},
			{
				key: 'createdBy',
				label: 'Created By',
				render: ({ createdBy }) => createdBy,
			},
			{
				label: '',
				key: 'actions',
				render: ({ id, name }) => <CategoryDeleteButton id={id} name={name} />,
				width: 60,
			},
		],
		[],
	)

	return (
		<Table
			totalPages={totalPages}
			totalItems={totalItems}
			topContent={topContent}
			onPageChange={setPage}
			isLoading={loading}
			data={categories}
			columns={columns}
			page={page}
		/>
	)
}

export default CategoriesTable
