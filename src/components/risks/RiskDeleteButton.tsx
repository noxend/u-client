import { useMutation } from '@apollo/client'
import DeleteButton from '@components/DeleteButton'
import { DELETE_RISK } from '@gql/mutations'
import { GET_RISKS } from '@gql/queries'
import { useConfirmationDialog } from '@hooks/useConfirmationDialog'
import { FC } from 'react'

const RiskDeleteButton: FC<{ id: string }> = ({ id }) => {
	const { hideDialog } = useConfirmationDialog()

	const [deleteRisk] = useMutation(DELETE_RISK, {
		variables: {
			id,
		},
		optimisticResponse: {
			deleteRisk: {
				id,
				isDeleted: true,
				__typename: 'Risk',
			},
		},
		update: (cache) => {
			cache.evict({
				id: cache.identify({ __typename: 'Risk', id }),
			})
		},
		refetchQueries: [GET_RISKS],
	})

	return (
		<DeleteButton
			title="Delete risk"
			message="Are you sure you want to delete this risk?"
			onDelete={() => {
				deleteRisk()
				hideDialog()
			}}
		/>
	)
}

export default RiskDeleteButton
