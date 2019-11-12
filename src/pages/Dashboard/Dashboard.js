import React, { Component } from 'react';
import StudentGrid from '../../components/Student/StudentGrid';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.ascOrderByName = true;
    this.ascSorting = this.ascSorting.bind(this);
    this.descSorting = this.descSorting.bind(this);
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1dlper')
      .then(response => response.json())
      .then(
        data => this.setState({ dashboardData: Object.keys(data).map(i => data[i]) }),
      );
  }

  ascSorting(items) {
    return items.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  descSorting(items) {
    return items.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }

  render() {

    if (!this.state.dashboardData) {
      return <div>LOADING...!!!</div>;
    }

    return (
      <div className={'student-dashboard-wrapper'}>
        <div className={'stud-header'}>
          <h1 className={'student-dashboard-heading'}>Student-Dashboard</h1>
          <input
            className={'search'}
            placeholder={'Search here..!!'}
            onChange={(e) => {
              console.log('WWWWW', e.target.value, this.state.dashboardData);
              const searchResult = this.state.dashboardData.filter(stud => stud.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
              this.setState({ dashboardData: searchResult });
            }}
          />
          <button
            onClick={() => {
              console.log('vvv', this.state.dashboardData);
              this.ascOrderByName = this.ascOrderByName === true ? false : true;
              let temp = JSON.parse(JSON.stringify(this.state.dashboardData));
              temp = !this.ascOrderByName ? this.ascSorting(temp) : this.descSorting(temp);
              this.setState({ dashboardData: temp });
            }}
          >Order By Name
          </button>
          <button>Order By Marks</button>
        </div>
        <div className={'student-grid-wrapper'}>
          {this.state.dashboardData && this.state.dashboardData.map((singleGrid, index) => <StudentGrid
            gridData={singleGrid}
            key={`singleGridKey-${index}`}
          />)}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;