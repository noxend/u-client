import { Spinner } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, PropsWithChildren } from 'react'

type LoadingOverlayProps = PropsWithChildren<{
  isLoading: boolean
}>

const LoadingOverlay: FC<LoadingOverlayProps> = ({ isLoading, children }) => (
  <div className="relative h-full">
    {children}
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center bg-background/50"
          transition={{ duration: 0.15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Spinner />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export default LoadingOverlay
