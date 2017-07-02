"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateSelected, updateTabs} from '../../actions/tabsActions'


class TabSelector extends React.Component {

    handleSelector(pos) {
        this.props.updateSelected(pos);
    }

    render() {
        var isSelected = this.props.isSelected ? 'active':'noactive'
        return (
            <span className={'selector '+ isSelected} key={this.props.id} onClick={this.handleSelector.bind(this,this.props.pos)}>
                <span className="name">{this.props.name}</span>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return {
        tabs: state.tabs.tabs,
        selected: state.tabs.selected
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateTabs: updateTabs,updateSelected:updateSelected}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabSelector)
