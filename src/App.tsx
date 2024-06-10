import { Tab, Tabs } from '@nextui-org/react'
import CategoryTable from './components/categories/CategoryTable'
import RisksTable from './components/risks/RiskTable'

const tabs = [
	{
		key: 'photos',
		title: 'Risks',
		render: () => <RisksTable />,
	},
	{
		key: 'music',
		title: 'Categories',
		render: () => <CategoryTable />,
	},
]

function App() {
	return (
		<div className="container mx-auto h-screen p-6">
			<Tabs aria-label="Options" items={tabs}>
				{(tab) => (
					<Tab key={tab.key} title={tab.title} className="h-[calc(100%-2rem)]">
						{tab.render()}
					</Tab>
				)}
			</Tabs>
		</div>
	)
}

export default App
