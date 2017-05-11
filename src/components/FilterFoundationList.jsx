import React, {Component} from 'react'
import FilterFoundation from './FilterFoundation'
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'

class FilterFoundationList extends Component {
  constructor(props) {
    super(props);
    this.renderFoundations = this.renderFoundations.bind(this);
  }

  componentWillMount() {
    if (this.props.foundations.length === 0) {
      this.props.fetchFoundations();
    }
  }

  renderFoundations() {
    let {foundations, filters} = this.props;
    return _.map(foundations, foundation => {
      if (foundation.auth) {
        return (
          <FilterFoundation key={foundation.name}
            foundation={foundation}
            filters={filters}
            toggleFoundation={this.props.toggleFoundation}
          />
        )
      }

    })
  }

  render() {
    return (
      <div>
        <h4>Foundations</h4>
        {this.renderFoundations()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { foundations: state.foundations.all, filters: state.filters };
}

export default connect(mapStateToProps, actions)(FilterFoundationList);
