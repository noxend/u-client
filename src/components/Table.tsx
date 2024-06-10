import LoadingOverlay from '@components/LoadingOverlay'
import {
	Table as NextUITable,
	Pagination,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react'
import { Key, ReactNode, useMemo } from 'react'

export type Column<T> = {
	key: Key
	label: string
	render: (row: T) => ReactNode
	width?: number
}

type TableProps<T extends { key: Key }> = {
	data: T[]
	columns: Column<T>[]
	isLoading: boolean
	totalPages: number
	totalItems: number
	page: number
	onPageChange: (page: number) => void
	topContent?: ReactNode
}

const Table = <T extends { key: Key }>({
	data,
	columns,
	isLoading,
	totalPages,
	totalItems,
	page,
	onPageChange,
	topContent,
}: TableProps<T>) => {
	const columnsMap = new Map(columns.map((column) => [column.key, column]))

	const bottomContent = useMemo(() => {
		if (totalPages === 0) return null

		return (
			<div className="flex items-center justify-between">
				<div className="text-sm opacity-50">Items count: {totalItems}</div>

				<Pagination total={totalPages} onChange={onPageChange} showControls page={page} />
			</div>
		)
	}, [onPageChange, page, totalItems, totalPages])

	return (
		<LoadingOverlay isLoading={isLoading}>
			<NextUITable
				topContentPlacement="outside"
				bottomContentPlacement="outside"
				bottomContent={bottomContent}
				topContent={topContent}
				classNames={{
					wrapper: 'h-full',
					base: 'h-full',
				}}
			>
				<TableHeader>
					{columns.map((column) => (
						<TableColumn key={column.key} width={column.width}>
							{column.label}
						</TableColumn>
					))}
				</TableHeader>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.key}>
							{(columnKey) => <TableCell>{columnsMap.get(columnKey)?.render(row)}</TableCell>}
						</TableRow>
					))}
				</TableBody>
			</NextUITable>
		</LoadingOverlay>
	)
}

export default Table
