import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '@gql/queries'
import { Category } from '@gql/types/graphql'
import { Autocomplete, AutocompleteItem, AutocompleteProps } from '@nextui-org/react'
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll'
import { useDebounce } from '@uidotdev/usehooks'
import { FC, useState } from 'react'

type CategorySelectProps = Omit<
	AutocompleteProps<Category>,
	'items' | 'isLoading' | 'scrollRef' | 'onOpenChange' | 'onInputChange' | 'inputValue' | 'children'
>

const CategorySelect: FC<CategorySelectProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const debouncedInputValue = useDebounce(inputValue, 300)

	const { data, previousData, loading, fetchMore } = useQuery(GET_CATEGORIES, {
		variables: {
			searchTerm: debouncedInputValue,
		},
	})

	const hasMore = data?.categories.page && data?.categories.page < data?.categories.totalPages

	const [, scrollRef] = useInfiniteScroll({
		hasMore: !!hasMore,
		isEnabled: isOpen,
		shouldUseLoader: false,
		onLoadMore: () => {
			if (!data?.categories.page) {
				return
			}

			fetchMore({
				variables: {
					page: data.categories.page + 1,
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if (!fetchMoreResult) {
						return prev
					}

					return {
						categories: {
							...fetchMoreResult.categories,
							items: [...prev.categories.items, ...fetchMoreResult.categories.items],
						},
					}
				},
			})
		},
	})

	const items = data?.categories.items || previousData?.categories.items || []

	return (
		<Autocomplete
			{...props}
			items={items}
			placeholder="Select a category"
			variant="bordered"
			labelPlacement="outside"
			isLoading={loading}
			scrollRef={scrollRef}
			onOpenChange={setIsOpen}
			aria-label="Category Select"
			allowsCustomValue
			onInputChange={setInputValue}
			inputValue={inputValue}
		>
			{(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
		</Autocomplete>
	)
}

export default CategorySelect
