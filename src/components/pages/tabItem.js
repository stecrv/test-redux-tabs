"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postTabs, updateTabs} from '../../actions/tabsActions'


class TabItem extends React.Component {

    handleTab() {

        const tab = [...this.props.tabs, {
            id: this.props.id,
            name: this.props.name,
            points: this.props.points
        }];

        let id =  this.props.tabs.findIndex((function(tab){
            return tab.id === id;
        }));
        this.props.updateTabs(id, tab);

    }

    render() {
        return (
            <div className="item" key={this.props.id}>
                <h6>{this.props.name}</h6>
                <p>{this.props.points}</p>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TabItem)
