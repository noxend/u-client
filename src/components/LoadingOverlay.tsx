import { Spinner } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

type LoadingOverlayProps = PropsWithChildren<{
	isLoading: boolean
}>

const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading, children }) => (
	<div className="relative h-full">
		{children}
		{isLoading && (
			<div className="absolute inset-0 z-50 flex items-center justify-center bg-background/50">
				<Spinner />
			</div>
		)}
	</div>
)

export default LoadingOverlay
