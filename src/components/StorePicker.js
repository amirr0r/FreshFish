import React from 'react'
import { render } from 'react-dom'

class StorePicker extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h2>Please Enter A Store</h2>
				{/* Her's how we can comment */}
				<form className="store-selctor">
					<input type="text" required placeholder="Store Name"/>
					<button type="submit">Visit Store</button>
				</form>
			</React.Fragment>
		)
	}
}

export default StorePicker