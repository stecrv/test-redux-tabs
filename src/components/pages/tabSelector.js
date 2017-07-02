"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postTabs, updateTabs} from '../../actions/tabsActions'


class TabSelector extends React.Component {

    handleSelector() {

        const tab = [...this.props.tabs, {
            id: this.props.id,
            name: this.props.name,
        }];

        let id =  this.props.tabs.findIndex((function(tab){
            return tab.id === id;
        }));
        this.props.updateTabs(id, tab);

    }

    render() {
        return (
            <span className="selector" key={this.props.id} onClick={this.handleSelector}>
                <span className="name">{this.props.name}</span>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return {
        tabs: state.tabs.tabs,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateTabs: updateTabs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabSelector)
