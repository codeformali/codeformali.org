const Navbar = React.createClass({
  render() {
    var Brand = (
      <a className="navbar-brand" href="/">{ this.props.brand }</a>
    );
    return (
      <bs.Navbar brand={ Brand } toggleNavKey={0}>
        <bs.Nav role="navigation" eventKey={0}>
          <bs.NavItem eventKey={1} href='/'>Accueil</bs.NavItem>
          <bs.NavItem eventKey={2} href='/about'>Qui sommes-nous ?</bs.NavItem>
          <bs.NavItem eventKey={3} href='#'>Contact</bs.NavItem>
        </bs.Nav>
      </bs.Navbar>
    )
  }
})
