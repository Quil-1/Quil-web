
import Herosection from './components/Herosection'
import HerosectionLower from './components/HerosectionLower'
import FormSection from './components/FormSection'
import Partners from './components/Partners'
import BottomSection from './components/BottomSection'

export default function Home() {
  return (
    <main>
      <Herosection/>
      <HerosectionLower/>
      <FormSection/>
      <Partners/>
      <BottomSection/>
    </main>
  )
}
