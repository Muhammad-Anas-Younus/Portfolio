import React, {useState , useEffect} from "react"
import Prealoder from './Preloader'
import './styles/style.css'
import LandingPage from './LandingPage'

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  })

  return <div>
    {loading==true ? <Prealoder/> : <LandingPage/>}
  </div>
}
