import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from './useDebouce'

export function useDeviceDetect() {
	const [isTouchDevice, setIsTouchDevice] = useState(false)

	const checkTouchCapability = useCallback(() => {
		const touchDetect = 'ontouchstart' in window || navigator.maxTouchPoints > 0
		setIsTouchDevice(touchDetect)
	}, [])

	const debouncedCheckCapability = useDebounce(checkTouchCapability, 500)

	useEffect(() => {
		checkTouchCapability()

		const handlePointerDown = (e: PointerEvent) => {
			if ((e.pointerType === 'touch') !== isTouchDevice) {
				checkTouchCapability()
			}
		}

		const handleResize = () => {
			debouncedCheckCapability()
		}

		const handleVisibilityChange = () => {
			if (document.visibilityState === 'visible') {
				checkTouchCapability()
			}
		}

		const handleOrientationChange = () => {
			checkTouchCapability()
		}

		window.addEventListener('pointerdown', handlePointerDown, { passive: true })
		// window.addEventListener('resize', debouncedCheckCapability, {
		// 	passive: true,
		// })
		window.addEventListener('resize', handleResize, {
			passive: true,
		})
		window.addEventListener('orientationchange', handleOrientationChange)
		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			window.removeEventListener('pointerdown', handlePointerDown)
			// window.removeEventListener('resize', debouncedCheckCapability)
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('orientationchange', handleOrientationChange)
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [isTouchDevice])

	return isTouchDevice
}
