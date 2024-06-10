import { useMutation } from '@apollo/client'
import EditableCell from '@components/EditableCell'
import { UPDATE_RISK_DESCRIPTION } from '@gql/mutations'
import { FC } from 'react'
import { toast } from 'sonner'

type RiskEditableDescriptionCellProps = {
	id: string
	description: string
}

const RiskEditableDescriptionCell: FC<RiskEditableDescriptionCellProps> = ({ id, description }) => {
	const [updateDescription] = useMutation(UPDATE_RISK_DESCRIPTION)

	return (
		<EditableCell
			value={description}
			onChange={(value) => {
				updateDescription({
					variables: {
						input: {
							id,
							description: value,
						},
					},
					optimisticResponse: {
						updateRisk: {
							id,
							description: value,
							__typename: 'Risk',
						},
					},
				})
			}}
			onInvalid={() => {
				toast.error('Description cannot be empty')
			}}
		/>
	)
}

export default RiskEditableDescriptionCell
