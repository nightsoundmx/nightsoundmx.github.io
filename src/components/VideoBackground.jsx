import { useState, useEffect } from 'react'

function isWifi() {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (!conn) return false
  return conn.type === 'wifi' || conn.type === 'ethernet'
}

export default function VideoBackground() {
  const [showVideo, setShowVideo] = useState(false)
  const videoUrl = `${import.meta.env.BASE_URL}assets/bg-video.mp4`

  useEffect(() => {
    if (isWifi()) setShowVideo(true)
  }, [])

  return (
    <div className="video-bg" aria-hidden="true">
      {showVideo && (
        <video autoPlay loop muted playsInline preload="none" className="video-bg__video">
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="video-bg__overlay" />
    </div>
  )
}
