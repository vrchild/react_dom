import React, {Component} from 'react';

class News extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/about/message')
    }, 2000)
  }

  render() {
    return (
      <div>
        <ul>
          <li>aaaa</li>
          <li>bbbb</li>
          <li>cccc</li>
          <li>dddd</li>
        </ul>
      </div>
    );
  }
}

export default News;
