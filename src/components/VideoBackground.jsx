export default function VideoBackground() {
  const videoUrl = `${import.meta.env.BASE_URL}assets/bg-video.mp4`

  return (
    <div className="video-bg" aria-hidden="true">
      <video autoPlay loop muted playsInline preload="none" className="video-bg__video">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="video-bg__overlay" />
    </div>
  )
}
