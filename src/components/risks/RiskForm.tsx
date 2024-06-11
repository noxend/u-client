import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Switch } from '@nextui-org/react'
import { forwardRef, useImperativeHandle } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { z } from 'zod'
import CategorySelect from '../categories/CategorySelect'

const formSchema = z.object({
  description: z.string().min(1, { message: 'Description is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
  resolved: z.boolean(),
})

export type RiskFormValues = z.infer<typeof formSchema>

export type RiskFormProps = {
  onSubmit: (data: RiskFormValues) => void
}

export type RiskFormRef = {
  submit: () => void
}

const RiskForm = forwardRef<RiskFormRef, RiskFormProps>(({ onSubmit }, ref) => {
  const { handleSubmit, control } = useForm<RiskFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      category: '',
      name: '',
      resolved: false,
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
            placeholder="Enter risk name"
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
            placeholder="Enter risk description"
            labelPlacement="outside"
            label="Description"
            variant="bordered"
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field, fieldState }) => (
          <CategorySelect
            errorMessage={fieldState.error?.message}
            onSelectionChange={field.onChange}
            isInvalid={fieldState.invalid}
            label="Category"
          />
        )}
      />

      <Controller
        name="resolved"
        control={control}
        render={({ field }) => (
          <Switch
            onValueChange={(value) => field.onChange(value)}
            isDisabled={field.disabled}
            isSelected={field.value}
            onBlur={field.onBlur}
            ref={field.ref}
          >
            Resolved
          </Switch>
        )}
      />
    </form>
  )
})

export default RiskForm
