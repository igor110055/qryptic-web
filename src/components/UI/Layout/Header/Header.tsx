import logo from '../../../../assets/qrpt-logo.png';
const Header = () => {
    return (
        <div className="w-full text-qrypticPurple bg-qrypticBg">
        <div className="pl-8 pr-8">
          <div className="header-branding">
              <img src={logo} alt="Logo" />
          </div>
          <section className="header-links">
            <ul>
              <li>Link 1</li>
            </ul>
          </section>
        </div>
      </div>
    )
}

export default Header
