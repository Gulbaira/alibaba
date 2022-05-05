import './Header.css';
import Button from '../Button/button';
import Input from '../Input/Input';

export default function Header() {
  let searchValue = ''
  const handleSearch = (value) => {
    searchValue = value;
    console.log('searchValue', searchValue)
  }


  return (
    <header className="header">
      <div className="logo">
        <img src="https://mcmag.ru/wp-content/uploads/2020/12/vse-logotipy-nike-08-mcmag.ru_.jpg" alt="" />
      </div>
      {/* <div>
        <Button>Main</Button>
      </div>
      <div>
        <Button>Sign Up</Button>
      </div> */}

      {/* <div>
        <Input value={searchValue} onChange={handleSearch} type="text" />
        <Input value={searchValue} onChange={handleSearch} type="text" />
      </div> */}

      <div className='header-title'>
        <div><a href="#"> MAN</a></div>
        <div><a href="#">WOMAN</a></div>
        <div><a href="#">JERSEY</a></div>
        <div><a href="#">TEAMS</a></div>
        <div><a href="#">APP</a></div>

      </div>
    </header>
  )
}

