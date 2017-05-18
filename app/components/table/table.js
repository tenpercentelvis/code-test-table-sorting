
import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './style.scss';

import Loader from '../../components/loader/loader';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        columns: [],
        rows: [],
      },
      ascending: true,
      property: '',
    };
    this.sortData = this.sortData.bind(this);
  }

  // set state data with prop data

  componentWillReceiveProps(nextProps) {

    const { data } = nextProps;

    this.setState({
      data,
    });
  }

  // sort data

  sortData(property, sortable) {

    const { data } = this.state;

    if (sortable) {

      data.rows = data.rows.sort((a, b) => {

        if (a.isInteger && a.isInteger) {
          return a[property] - b[property];
        }

        if (a[property] < b[property]) {
          return -1;
        }

        if (a[property] > b[property]) {
          return 1;
        }

        return 0;

      });

      if (this.state.ascending) {
        data.rows.reverse();
      }

      this.setState({
        data,
        property,
        ascending: this.state.property !== property ? true : !this.state.ascending,
      });

    }

  }

  render() {

    const { data } = this.state;

    // table headers

    const headers = data.columns.map((item, index) => {

      let arrow;

      if (this.state.property === item.property && this.state.ascending) {
        arrow = <span className={styles['arrow-down']} />;
      }

      if (this.state.property === item.property && !this.state.ascending) {
        arrow = <span className={styles['arrow-up']} />;
      }

      return (
        <th className={styles['table-header']} key={index} onClick={() => this.sortData(item.property, item.sortable)}>
          {item.label}
          {arrow}
        </th>
      );
    });

    // table rows

    const items = data.rows.map((item, index) => {
      return (
        <tr className={styles['table-row']} key={index}>
          <td className={styles['table-data']}>{item.id}</td>
          <td className={styles['table-data']}>{item.name}</td>
          <td className={styles['table-data']}>{item.family}</td>
          <td className={styles['table-data']}>{item.city}</td>
          <td className={styles['table-data']}>{item.score}</td>
        </tr>
      );
    });

    // show loader while waiting data
    if (!items.length) {
      return <Loader size="1" />;
    }

    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>

        <table className={styles['table']}>
          <thead>
            <tr className={styles['table-row']}>
              {headers}
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>

      </ReactCSSTransitionGroup>
    );

  }

}

Table.propTypes = {
  data: PropTypes.object,
};

export default Table;
