import { useEffect, useRef, useState } from 'react'

interface Props {
  url: string
  onLoad?: (animationItem: any) => void
  onError?: () => void
  onFrame?: (frame: number) => void
  className?: string
}

export function Lottie(props: Props) {
  const { url, onLoad, onError, onFrame, className = 'w-full h-full' } = props
  const ref = useRef(null)
  const [animationItem, setAnimationItem] = useState<any>(null)
  const [loaded, setLoaded] = useState(false)
  const [_frame, setFrame] = useState(0)
  const [LottiePlayer, setLottiePlayer] = useState<any>(null)

  useEffect(() => {
    import('react-lottie-player/dist/LottiePlayerLight').then((mod) => {
      setLottiePlayer(() => mod.default)
    })
  }, [])

  useEffect(() => {
    if (loaded && ref.current) {
      const player = ref.current as any

      setAnimationItem(player)
      onLoad?.(player)
    }
  }, [ref, loaded, onLoad])

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleEnterFrame = () => {
    const percentage = (animationItem?.currentFrame / animationItem?.totalFrames) * 100

    setFrame(percentage)
    onFrame?.(percentage)
  }

  if (!LottiePlayer) {
    return <div className={className} />
  }

  return (
    <LottiePlayer
      ref={ref}
      path={url}
      play
      loop
      onEnterFrame={handleEnterFrame}
      onLoad={handleLoad}
      onError={onError}
      className={className}
    />
  )
}
