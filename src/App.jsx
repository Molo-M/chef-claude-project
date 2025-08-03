import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Main from './components/myMain'
import Count from './components/count'
import NewBody from './components/newBody'
import NewHeader from './components/newHeader'
import PadButton from './components/Pads'
import pads from './pads'

export default function App(props) {

  // const [buttonPads, setPads] = useState(pads)

  // function toggle(id) {
  //   setPads(prevPads => 
  //     prevPads.map(pad => 
  //     id === pad.id ? {...pad, on: !pad.on} : pad
  //   ))
  // }
  
  // const buttons = buttonPads.map(
  //   item => <PadButton 
  //     color={item.color} 
  //     status={item.on} 
  //     key={item.id}
  //     id={item.id} 
  //     toggle={toggle}
  //   />
  // )

  return (
    <>
      <Header />
      <Main />
    </>
    // <main>
    //   <div className="container bg-gray-900">
    //       {buttons}
    //   </div>    
    // </main>
  )
}