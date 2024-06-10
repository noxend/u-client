import { useMutation } from '@apollo/client'
import EditableCell from '@components/EditableCell'
import { UPDATE_RISK_NAME } from '@gql/mutations'
import { FC } from 'react'
import { toast } from 'sonner'

type RiskEditableNameCellProps = {
	id: string
	name: string
}

const RiskEditableNameCell: FC<RiskEditableNameCellProps> = ({ id, name }) => {
	const [updateRisk] = useMutation(UPDATE_RISK_NAME)

	return (
		<EditableCell
			value={name}
			onChange={(value) => {
				updateRisk({
					variables: {
						input: {
							id,
							name: value,
						},
					},
					optimisticResponse: {
						updateRisk: {
							id,
							name: value,
							__typename: 'Risk',
						},
					},
				})
			}}
			onInvalid={() => {
				toast.error('Name cannot be empty')
			}}
		/>
	)
}

export default RiskEditableNameCell
