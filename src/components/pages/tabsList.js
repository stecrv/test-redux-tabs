"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTabs} from '../../actions/tabsActions';
import TabItem from './tabItem';
import TabSelector from './tabSelector';


class TabsLists extends React.Component{
    componentDidMount(){
        this.props.getTabs()
    }
    render(){
        console.log('accessing to state', this.props.tabs)
        const tabsSelector =
            this.props.tabs.map(function(tabsArr){
                return(
                    <TabSelector key={tabsArr.id}
                             id={tabsArr.id}
                             name={tabsArr.name}
                    />

                )
            });
        const tabsList =
            this.props.tabs.map(function(tabsArr){
                return(
                        <TabItem key={tabsArr.id}
                            id={tabsArr.id}
                            name={tabsArr.name}
                            points={tabsArr.points}
                        />
                )
            });
        return(
            <div>
                <section id="tabs">
                    <div id="selectors">
                    {tabsSelector}
                    </div>
                    <div id="items">
                    {tabsList}
                    </div>
                </section>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        tabs: state.tabs.tabs
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getTabs: getTabs// other actions
    },dispatch)
}
export default  connect(mapStateToProps,mapDispatchToProps)(TabsLists);