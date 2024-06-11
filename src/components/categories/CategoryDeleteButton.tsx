import { useMutation } from '@apollo/client'
import { FC } from 'react'
import { toast } from 'sonner'
import { DELETE_CATEGORY } from '../../gql/mutations'
import { GET_CATEGORIES } from '../../gql/queries'
import { useConfirmationDialog } from '../../hooks/useConfirmationDialog'
import DeleteButton from '../DeleteButton'

const CategoryDeleteButton: FC<{
  id: string
  name: string
}> = ({ id, name }) => {
  const { hideDialog, updateConfig } = useConfirmationDialog()

  const [delCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [GET_CATEGORIES],
    variables: {
      id,
    },
    onCompleted: ({ deleteCategory }) => {
      if (deleteCategory.confirmationRequired) {
        updateConfig({
          title: 'Delete Category',
          message: deleteCategory.message,
          onConfirm: async () => {
            await delCategory({
              variables: {
                id,
                confirm: true,
              },
            })
          },
        })

        return
      }

      toast.success('Category deleted successfully')
      hideDialog()
    },
  })

  return (
    <DeleteButton
      title="Delete Category"
      message={`Are you sure you want to delete the category "${name}"?`}
      onDelete={async () => {
        await delCategory()
      }}
    />
  )
}

export default CategoryDeleteButton
