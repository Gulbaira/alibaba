import './App.scss';

import Card from "./components/Card/Card"
import Header from "./components/Header/Header"

function App() {
  return (

    // <div>
    //   <Header/>
    // </div>

    <div className='products'>

      <Card imgUrl='https://s.alicdn.com/@sc04/kf/H02d5608475bc4da981dffa01889cf44aH.jpg_220x220.jpg_.webp' title='2022 oombox 2 Wireless Speaker' price='$8.65 - $21.90' />
      <Card imgUrl='https://s.alicdn.com/@sc04/kf/He5169cd7f5b645e1a6295ffa27b3dc8a2.jpg_300x300.jpg' title='Big HORN PARTY BOX Boombox Portable Bocina ' price='$59.20 - $62.60' />
      <Card imgUrl='https://sc04.alicdn.com/kf/Hae556cdc169647bd96102989ef78f8c22.jpg' title='CYBORIS V9T Touch Portable Speaker 60W ' price='$31.99' />
      <Card imgUrl='https://sc04.alicdn.com/kf/H4f042c52170a4925b0cd8745c5ad9d38n.jpg' title='2021 trending table speaker smart home ' price='$6.95' />
      <Card imgUrl='https://sc04.alicdn.com/kf/H30a660729e164dd99cb31c92dac637f9m.jpg' title='Dual 6.5 inch LED party box dj karaoke boombox' price='$35.00' />

      <Card imgUrl='https://sc04.alicdn.com/kf/Hd78b7870ed2c445492177b0d054eade5z.jpg' title='OEM Bass Subwoofer Waterproof Outdoor Speakers' price='$9.68' />
      <Card imgUrl='https://sc04.alicdn.com/kf/Hf92cbfa121684208b2a19efdb31e7c671.png' title='WS-538 portable boombox altavoz portatil' price='$8.70' />
      <Card imgUrl='https://sc04.alicdn.com/kf/He598955002c6415a8fba5befcb13a3403.jpg' title='Bumblebee Blue Speaker mini Wireless' price='$5.44' />
      <Card imgUrl='https://sc04.alicdn.com/kf/Hff599e0bc6b041af8656b112daf8ed3dX.jpeg' title='Hot Selling Powerful boombox Home Theatre System' price='$36.00' />
      <Card imgUrl='https://sc04.alicdn.com/kf/H1bccc1815b6149b9bfc4a24c1f104c55s.jpg' title='portable bluetooth microphone karaoke' price='$16.90' />

    </div>
  )
}
export default App 