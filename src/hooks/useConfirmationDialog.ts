import { ConfirmationDialogContext } from '@context/ConfirmationDialogProvider'
import { useContext } from 'react'

export const useConfirmationDialog = () => {
	const context = useContext(ConfirmationDialogContext)

	if (!context) {
		throw new Error('useConfirmationDialog must be used within a ConfirmationDialogProvider')
	}

	return context
}
