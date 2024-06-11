import { Input } from '@nextui-org/react'
import { Search } from 'lucide-react'
import { FC } from 'react'

type CategoryFiltersProps = {
  onSearch: (searchTerm: string) => void
  searchTerm: string
}

const CategoryFilters: FC<CategoryFiltersProps> = ({
  onSearch,
  searchTerm,
}) => {
  return (
    <div className="flex gap-2">
      <Input
        startContent={<Search size={20} />}
        placeholder="Search by name"
        onValueChange={onSearch}
        variant="bordered"
        value={searchTerm}
        className="w-80"
      />
    </div>
  )
}

export default CategoryFilters
