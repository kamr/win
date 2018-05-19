import "../../static/styles/header.css"

import HeaderButton from './HeaderButton/HeaderButton'

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="header-buttons">
          <HeaderButton
            name="photo"
            active={this.props.activePage == "photo" ? " header-button-active" : ""}
          />
          <HeaderButton
            name="video"
            active={this.props.activePage == "video" ? " header-button-active" : ""}
          />
          {/* <div className="winnie">WINNIE</div> */}
          <HeaderButton
            name="work"
            active={this.props.activePage == "work" ? " header-button-active" : ""}
          />
          <HeaderButton
            name="about"
            active={this.props.activePage == "about" ? " header-button-active" : ""}
          />
        </div>
      </div>
    )
  }
}

export default Header;