import { useMutation } from '@apollo/client'
import { FC } from 'react'
import { toast } from 'sonner'
import { UPDATE_RISK_DESCRIPTION } from '../../gql/mutations'
import EditableCell from '../EditableCell'

type RiskEditableDescriptionCellProps = {
  id: string
  description: string
}

const RiskEditableDescriptionCell: FC<RiskEditableDescriptionCellProps> = ({
  id,
  description,
}) => {
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
