import React, { Component } from 'react';

const API = 'http://localhost:3030/doh-data-drop/?region=';
const DEFAULT_REGION = 'Region VIII: Eastern Visayas';

export default class Home extends Component {
  state = {
    provinces: [],
  };

  componentDidMount() {yughyuguyguy
    fetch(API + DEFAULT_REGION, {
      method: 'GET',
    })
      .then((resp) => {
        resp.json().then((data) => {
          this.setState({
            provinces: data.data
              .map((row) => row.city_mun_res)
              .reduce(
                (unique, item) =>
                  unique.includes(item) ? unique : [...unique, item],
                []
              ),
          });
          console.log(this.state.provinces);
        });
      })
      .catch((resp) => {});
  }
  render() {
    return <div></div>;
  }
}
