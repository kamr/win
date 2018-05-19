import Link from 'next/link'

class HeaderButton extends React.Component {

  render() {
    return (
      <div className={"header-button" + this.props.active}>
        <Link
          href={"/" + this.props.name.toLowerCase()}
        >
          <div>{this.props.name.toUpperCase()}</div>
        </Link>
      </div>
    )
  }
}

export default HeaderButton;