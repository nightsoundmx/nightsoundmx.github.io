import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import VideoBackground from './components/VideoBackground'

export default function App() {
  return (
    <>
      <VideoBackground />
      <main className="page-wrapper" aria-label="Night Sound">
        <div className="card">
          <Header />
          <SocialLinks />
          <Footer />
        </div>
      </main>
    </>
  )
}
