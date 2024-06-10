import { Button, Select, SelectItem, Selection } from '@nextui-org/react'
import { X } from 'lucide-react'
import { FC } from 'react'

const statusOptions = [
	{ name: 'Resolved', key: 'resolved' },
	{ name: 'Unresolved', key: 'unresolved' },
]

const valueMap = Object.fromEntries(
	statusOptions.map((option) => [option.key, option.key === 'resolved']),
)

type RiskFiltersProps = {
	resolved?: boolean
	setResolved: (value?: boolean) => void
}

const RiskFilters: FC<RiskFiltersProps> = ({ resolved, setResolved }) => {
	const handleSelectionChange = (key: Selection) => {
		const selectedValue = Array.from(key).at(0)

		if (!selectedValue) return setResolved()

		setResolved(valueMap[selectedValue])
	}

	const getSelectedKeys = () => {
		if (resolved === true) return ['resolved']
		if (resolved === false) return ['unresolved']
		return []
	}

	return (
		<div className="flex gap-2">
			<Select
				onSelectionChange={handleSelectionChange}
				selectedKeys={getSelectedKeys()}
				aria-label="Status Filter"
				selectionMode="single"
				items={statusOptions}
				placeholder="Status"
				className="max-w-40"
				variant="bordered"
			>
				{(status) => <SelectItem key={status.key}>{status.name}</SelectItem>}
			</Select>

			<Button
				startContent={<X className="size-5" />}
				isDisabled={resolved === undefined}
				onClick={() => setResolved()}
				color="danger"
				variant="flat"
			>
				Clear Filters
			</Button>
		</div>
	)
}

export default RiskFilters
