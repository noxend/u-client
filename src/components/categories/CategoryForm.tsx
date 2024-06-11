import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@nextui-org/react'
import { forwardRef, useImperativeHandle } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { z } from 'zod'

const formSchema = z.object({
  description: z.string().min(1, { message: 'Description is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
})

export type CategoryFormValues = z.infer<typeof formSchema>

export type CategoryFormProps = {
  onSubmit: (data: CategoryFormValues) => void
}

export type CategoryFormRef = {
  submit: () => void
}

const CategoryForm = forwardRef<CategoryFormRef, CategoryFormProps>(
  ({ onSubmit }, ref) => {
    const { handleSubmit, control } = useForm<CategoryFormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        description: '',
        name: '',
      },
    })

    useImperativeHandle(ref, () => ({
      submit: handleSubmit(onSubmit),
    }))

    return (
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder="Enter category name"
              labelPlacement="outside"
              variant="bordered"
              label="Name"
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder="Enter category description"
              labelPlacement="outside"
              label="Description"
              variant="bordered"
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </form>
    )
  },
)

export default CategoryForm
