import { useMutation } from '@apollo/client'
import RiskForm, { FormValues } from '@components/risks/RiskForm'
import { CREATE_RISK } from '@gql/mutations'
import { GET_RISKS } from '@gql/queries'
import useCurrentUser from '@hooks/useCurrentUser'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { Plus } from 'lucide-react'
import { useRef } from 'react'
import { SubmitHandler } from 'react-hook-form'

const RiskCreateButton = () => {
	const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()

	const formRef = useRef<{ submit: () => void }>(null)

	const [createRisk, { loading }] = useMutation(CREATE_RISK, {
		onCompleted: () => {
			onClose()
		},
		refetchQueries: [GET_RISKS],
	})

	const user = useCurrentUser()

	const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
		createRisk({
			variables: {
				input: {
					name: data.name,
					description: data.description,
					categoryId: data.category,
					resolved: data.resolved,
					createdBy: user.username,
				},
			},
		})
	}

	return (
		<>
			<Button startContent={<Plus className="size-5" />} onPress={onOpen} color="primary">
				Create Risk
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Create Risk</ModalHeader>
							<ModalBody>
								<RiskForm ref={formRef} onSubmit={handleFormSubmit} />
							</ModalBody>
							<ModalFooter>
								<Button variant="flat" onPress={onClose}>
									Cancel
								</Button>
								<Button
									color="primary"
									onPress={() => {
										formRef.current?.submit()
									}}
									isLoading={loading}
									variant="shadow"
								>
									Create
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default RiskCreateButton
