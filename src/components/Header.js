import React from 'react'

/*class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>Fresh Seafood Market</span>
        </h3>
      </header>
    )
  }
*/

// If my component is just getting in data via props and returns in JSX
// I don't have to create a class
// I can do that instead

/*const Header = ({tagline}) => (*/ //this way too because props is an object
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
      {/*<span>{tagline}</span>*/}
    </h3>
  </header>
)

export default Header

