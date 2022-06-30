const spacingCss = { padding: '8px' }

const Multiplier = ({ number }) => <div style={spacingCss}><b>Multiplier:</b> {number} is {number % 2 ? 'even' : 'odd'}!</div>

export default Multiplier
