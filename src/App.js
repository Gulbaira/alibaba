import './App.css';

import Card from "./components/Card/Card"
    
    function App (){
      return(
        <div className='products'>
        <Card imgUrl='https://s.alicdn.com/@sc04/kf/H02d5608475bc4da981dffa01889cf44aH.jpg_220x220.jpg_.webp' title='2022 oombox 2 Wireless Speaker' price='$8.65 - $21.90' />
        <Card  imgUrl='https://s.alicdn.com/@sc04/kf/H43fbd26f8cd44841864c8f88371e3565I.jpg_220x220.jpg_.webp' title='Wireless Earbuds 2000Mah Bt 5.0 ' price='123456756453423123546' /> 
        <Card imgUrl='https://s.alicdn.com/@sc04/kf/Hf3e7810b43944bdb945aaa17fba92d4dB.jpg_220x220.jpg_.webp' title= 'Waterfront Luxury Home Bedroom Graphene' price='$1,950.00 - $5,000.00'/>
        <Card imgUrl= 'https://s.alicdn.com/@sc04/kf/H2c0d66dd085a4e02bedb36787f033157b.jpg_220x220.jpg_.webp' title= 'New mini excavator' price= '$2,200.00 - $12,000.00'/>
    </div>
  )
}
export default App