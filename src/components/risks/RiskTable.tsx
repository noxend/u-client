import { useQuery } from '@apollo/client'
import { Chip } from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { GET_RISKS } from '../../gql/queries'
import { RisksQuery } from '../../gql/types/graphql'
import Table, { Column } from '../Table'
import RiskCreateButton from './RiskCreateButton'
import RiskDeleteButton from './RiskDeleteButton'
import RiskEditableDescriptionCell from './RiskEditableDescriptionCell'
import RiskEditableNameCell from './RiskEditableNameCell'
import RiskFilters from './RiskFilters'
import RiskStatusSwitch from './RiskStatusSwitch'

const RisksTable = () => {
	const [page, setPage] = useState(1)
	const [resolved, setResolved] = useState<boolean | undefined>()

	const { loading, data, previousData } = useQuery(GET_RISKS, {
		variables: { page, resolved },
		onCompleted: ({ risks }) => {
			if (risks.totalPages < page) {
				setPage(risks.totalPages)
			}
		},
		fetchPolicy: 'cache-and-network',
	})

	const currentData = data || previousData

	const risks = (currentData?.risks.items || [])
		.filter((risk) => !risk.isDeleted)
		.map((risk) => ({
			...risk,
			key: risk.id,
		}))

	const totalItems = currentData?.risks.totalItems ?? 0
	const totalPages = currentData?.risks.totalPages ?? 0

	const topContent = useMemo(() => {
		return (
			<div className="grid grid-cols-[1fr_auto]">
				<RiskFilters resolved={resolved} setResolved={setResolved} />
				<RiskCreateButton />
			</div>
		)
	}, [resolved])

	const columns = useMemo<Column<RisksQuery['risks']['items'][0]>[]>(
		() => [
			{
				key: 'name',
				label: 'Name',
				render: ({ id, name }) => <RiskEditableNameCell id={id} name={name} />,
			},
			{
				key: 'description',
				label: 'Description',
				render: ({ id, description }) => (
					<RiskEditableDescriptionCell description={description} id={id} />
				),
			},
			{
				key: 'category',
				label: 'Category',
				render: ({ category }) => (
					<Chip size="sm" color={category?.name ? 'default' : 'danger'} variant="flat">
						{category?.name || 'N/A'}
					</Chip>
				),
			},
			{
				key: 'resolved',
				label: 'Status',
				render: ({ id, resolved }) => <RiskStatusSwitch id={id} resolved={resolved} />,
			},
			{
				key: 'createdBy',
				label: 'Created By',
				render: ({ createdBy }) => createdBy,
			},
			{
				key: 'actions',
				label: '',
				render: ({ id }) => <RiskDeleteButton id={id} />,
				width: 60,
			},
		],
		[],
	)

	return (
		<Table
			data={risks}
			columns={columns}
			topContent={topContent}
			isLoading={loading}
			onPageChange={setPage}
			page={page}
			totalItems={totalItems}
			totalPages={totalPages}
		/>
	)
}

export default RisksTable
