"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100
        setProgress(percentage)
      }
    }

    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateProgress)
      videoElement.addEventListener("ended", () => setIsPlaying(false))
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", updateProgress)
        videoElement.removeEventListener("ended", () => setIsPlaying(false))
      }
    }
  }, [])

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <video ref={videoRef} className="w-full h-full object-cover" poster="/setup3e.jpg" muted={isMuted} playsInline>
        {/* Replace with your actual video file */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-tent-in-a-forest-718-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Video overlay with controls */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4 transition-opacity hover:opacity-100">
        <div className="flex justify-end">
          <Button
            onClick={toggleMute}
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white rounded-full"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative w-full h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#E6D3B3]" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex items-center justify-between">
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="bg-[#E6D3B3] hover:bg-[#E6D3B3]/80 text-[#0B132B] rounded-full"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>

            <div className="text-white text-sm font-medium">Experience the Magic</div>
          </div>
        </div>
      </div>
    </div>
  )
}
