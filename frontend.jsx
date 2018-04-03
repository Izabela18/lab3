var React = require('react');


class DataComponent extends React.Component{
  constructor() {
    super();

    this.state = {
      sport: []
    };
  }
  componentDidMount() {
    fetch('/test').then(function (response) {
     return response.json();
   }).then(function (result) {
      this.setState({sport: result});
    }.bind(this));

  }

  render(){
    console.log(this.state.sport);
    return <div>
    <table>
      {this.state.sport.map(function(athletes)
      {
      return <tr key={athletes.name}><td>{athletes.name}</td><td>{athletes.country}</td><td>{athletes.sport}</td>
    </tr>;

      })
      }
    </table>
    </div>;
  }

}

module.exports = DataComponent;
