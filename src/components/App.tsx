
import * as React from 'react';

interface Props {
    color?: string
}

class App extends React.Component<Props, {}> {
  render() {
    return (<div>
      <h1>Restrux</h1>
      <p>The color of this page is: {this.props.color}</p>
    </div>
    )
  }
}

export default App