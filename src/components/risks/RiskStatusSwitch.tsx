import { useMutation } from '@apollo/client'
import { Switch } from '@nextui-org/react'
import { FC } from 'react'
import { UPDATE_RISK_RESOLVED } from '../../gql/mutations'

const RiskStatusSwitch: FC<{ id: string; resolved: boolean }> = ({
  id,
  resolved,
}) => {
  const [updateRisk] = useMutation(UPDATE_RISK_RESOLVED, {})

  return (
    <Switch
      isSelected={resolved}
      onValueChange={(isSelected) => {
        updateRisk({
          variables: {
            input: {
              id,
              resolved: isSelected,
            },
          },
          optimisticResponse: {
            updateRisk: {
              resolved: isSelected,
              __typename: 'Risk',
              id,
            },
          },
        })
      }}
      size="sm"
    />
  )
}

export default RiskStatusSwitch
