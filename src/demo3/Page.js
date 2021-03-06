import React, {Component} from 'react';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
      /*
      also use below code
       */
    // this.setState(state => ({
    //   showWarning: !state.showWarning
    // }));

    this.setState({showWarning: !this.state.showWarning });
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

function WarningBanner(props) {
  if(! props.warn) {
    return null;
  }

  return (
    <div class="warning">
     =====preventing component from rendering Warning!
    </div>
  );
}

export default Page;