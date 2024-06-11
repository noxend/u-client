import { useMutation } from '@apollo/client'
import { FC } from 'react'
import { toast } from 'sonner'
import { DELETE_RISK } from '../../gql/mutations'
import { GET_RISKS } from '../../gql/queries'
import { useConfirmationDialog } from '../../hooks/useConfirmationDialog'
import DeleteButton from '../DeleteButton'

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
    onCompleted: () => {
      toast.success('Category deleted successfully')
    },
    onError: (error) => {
      toast.error(error.message)
    },
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
