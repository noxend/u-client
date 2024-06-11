import { useMutation } from '@apollo/client'
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
import { toast } from 'sonner'
import { CREATE_CATEGORY } from '../../gql/mutations'
import { GET_CATEGORIES } from '../../gql/queries'
import useCurrentUser from '../../hooks/useCurrentUser'
import CategoryForm, {
  CategoryFormRef,
  CategoryFormValues,
} from './CategoryForm'

const CategoryCreateButton = () => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()

  const [createCategory, { loading }] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [GET_CATEGORIES],
    onCompleted: () => {
      toast.success('Category created successfully')
      onClose()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const formRef = useRef<CategoryFormRef>(null)

  const user = useCurrentUser()

  const handleFormSubmit: SubmitHandler<CategoryFormValues> = (data) => {
    createCategory({
      variables: {
        input: {
          description: data.description,
          createdBy: user.username,
          name: data.name,
        },
      },
    })
  }

  return (
    <>
      <Button
        color="primary"
        onPress={onOpen}
        startContent={<Plus className="size-5" />}
      >
        Create Category
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Risk
              </ModalHeader>
              <ModalBody>
                <CategoryForm ref={formRef} onSubmit={handleFormSubmit} />
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

export default CategoryCreateButton
