"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postTabs, updateTabs} from '../../actions/tabsActions'


class TabItem extends React.Component {

    handleTab(el) {
        el.name = findDOMNode(this.refs['name_'+this.props.id]).value;
        this.props.updateTabs(this.props.tabs, el );
    }

    render() {
        return (
            <div className="item" key={this.props.id}>
                <span className="name" ><input ref={'name_'+this.props.id} value={this.props.name}  onChange={this.handleTab.bind(this, {id: this.props.id, points: this.props.points}) }/></span><br/>
                <span className="points">{this.props.points}</span>
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
