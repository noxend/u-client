import { ConfirmationDialogConfig } from '@context/ConfirmationDialogProvider'
import { useConfirmationDialog } from '@hooks/useConfirmationDialog'
import { Button } from '@nextui-org/react'
import { Trash } from 'lucide-react'
import { forwardRef } from 'react'

type DeleteButtonProps = {
	onDelete: () => void | Promise<void>
} & Pick<ConfirmationDialogConfig, 'message' | 'title'>

const DeleteButton = forwardRef<HTMLButtonElement, DeleteButtonProps>(
	({ onDelete, ...props }, ref) => {
		const { showDialog } = useConfirmationDialog()

		return (
			<Button
				variant="light"
				onPress={() => {
					showDialog({
						confirmText: 'Yes, delete',
						cancelText: 'Cancel',
						onConfirm: onDelete,
						...props,
					})
				}}
				color="danger"
				radius="full"
				isIconOnly
				size="sm"
				ref={ref}
			>
				<Trash className="size-4" />
			</Button>
		)
	},
)

export default DeleteButton
