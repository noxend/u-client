import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import React, { PropsWithChildren, createContext, useState } from 'react'
import { toast } from 'sonner'

export type ConfirmationDialogConfig = {
  title: string
  message: React.ReactNode
  onConfirm?: () => void | Promise<void>
  confirmText?: string
  cancelText?: string
}

type ConfirmationDialogContextProps = {
  showDialog: (config: ConfirmationDialogConfig) => void
  hideDialog: () => void
  updateConfig: (config: ConfirmationDialogConfig) => void
}

export const ConfirmationDialogContext =
  createContext<ConfirmationDialogContextProps | null>(null)

const ConfirmationDialogProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { isOpen, onOpenChange, onClose, onOpen } = useDisclosure()

  const [isLoading, setIsLoading] = React.useState(false)

  const [config, setConfig] = useState<ConfirmationDialogConfig>({
    message: '',
    title: '',
  })

  const showDialog = (config: ConfirmationDialogConfig) => {
    setConfig(config)
    onOpen()
  }

  const hideDialog = () => {
    onClose()
  }

  const updateConfig = (config: ConfirmationDialogConfig) => {
    setConfig(config)
  }

  return (
    <ConfirmationDialogContext.Provider
      value={{ showDialog, hideDialog, updateConfig }}
    >
      {children}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {config.title}
              </ModalHeader>
              <ModalBody>{config.message}</ModalBody>
              <ModalFooter>
                <Button variant="flat" onPress={onClose}>
                  {config.cancelText ?? 'Cancel'}
                </Button>
                <Button
                  color="danger"
                  onPress={async () => {
                    try {
                      setIsLoading(true)
                      await config.onConfirm?.()
                    } catch (e) {
                      toast.error('An error occurred')
                    } finally {
                      setIsLoading(false)
                    }
                  }}
                  variant="shadow"
                  isLoading={isLoading}
                >
                  {config.confirmText ?? 'Confirm'}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </ConfirmationDialogContext.Provider>
  )
}

export default ConfirmationDialogProvider
