import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="page-wrapper" aria-label="Night Sound">
      <div className="card">
        <Header />
        <SocialLinks />
        <Footer />
      </div>
    </main>
  )
}
