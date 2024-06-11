import { Button, Input, Kbd } from '@nextui-org/react'
import { Edit } from 'lucide-react'
import { useRef, useState } from 'react'

type EditableCellProps = {
  value: string
  onChange: (value: string) => void
  onInvalid?: (message?: string) => void
  // validationSchema?: any;
}

const EditableCell: React.FC<EditableCellProps> = ({
  value,
  onChange,
  onInvalid,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  const isInvalid = currentValue.trim() === ''

  const handleEditClick = () => {
    setIsEditing(true)
    queueMicrotask(() => inputRef.current?.focus())
  }

  const handleBlur = () => {
    setIsEditing(false)
    setCurrentValue(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsEditing(false)
      setCurrentValue(value)
      return
    }

    if (e.key === 'Enter') {
      if (isInvalid) {
        onInvalid?.()
        return
      }
      setIsEditing(false)
      onChange(currentValue)
    }
  }

  const handleInputChange = (value: string) => {
    setCurrentValue(value)
  }

  return (
    <div className="group/cell relative flex items-center gap-2">
      {isEditing ? (
        <Input
          endContent={<Kbd className="text-xs" keys={['enter']} />}
          onValueChange={handleInputChange}
          onKeyDown={handleKeyDown}
          isInvalid={isInvalid}
          value={currentValue}
          onBlur={handleBlur}
          className="w-full"
          variant="bordered"
          ref={inputRef}
          size="sm"
        />
      ) : (
        <>
          <span>{value}</span>
          <Button
            className="opacity-0 transition-opacity duration-200 ease-in-out group-hover/cell:opacity-100"
            onClick={handleEditClick}
            color="primary"
            variant="light"
            radius="full"
            isIconOnly
            size="sm"
          >
            <Edit className="size-[1em]" />
          </Button>
        </>
      )}
    </div>
  )
}

export default EditableCell
