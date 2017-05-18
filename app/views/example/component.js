
import React, { PropTypes, Component } from 'react';

import styles from './style.scss';

import Table from '../../components/table/table';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  // get data from api when component mounts

  componentDidMount() {

    const { getData } = this.props.actions;

    getData();
  }

  // set data when api data is recieved (get data from props, map to local state)

  componentWillReceiveProps(nextProps) {

    const { example } = nextProps;

    this.setState({
      data: example.items,
    });
  }

  // render

  render() {

    return (
      <section>

        <header role="banner">
          <span className={styles['logo']} href="/">Table sorting</span>
          <h1>Table sorting - Click on table header</h1>
        </header>

        <main role="main">
          <Table data={this.state.data} />
        </main>

      </section>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object,
  actions: PropTypes.object,
};

export default Example;
