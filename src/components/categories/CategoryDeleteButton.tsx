import { useMutation } from '@apollo/client'
import DeleteButton from '@components/DeleteButton'
import { DELETE_CATEGORY } from '@gql/mutations'
import { GET_CATEGORIES } from '@gql/queries'
import { useConfirmationDialog } from '@hooks/useConfirmationDialog'
import { FC } from 'react'

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
