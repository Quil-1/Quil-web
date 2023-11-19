
import Herosection from './components/Herosection'
import HerosectionLower from './components/HerosectionLower'
import FormSection from './components/FormSection'
import Partners from './components/Partners'
import LowerSection from './components/LowerSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Herosection/>
      <HerosectionLower/>
      <FormSection/>
      <Partners/>
      <LowerSection/>
    </main>
  )
}
