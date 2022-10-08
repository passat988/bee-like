import logoImg from './logo.png'

export const Logo = () => {
  return (
    <div className="header-img-box">
      <img
        src={ logoImg }
        alt="logo"
        className="header-logo"
      />
    </div>
  )
}
