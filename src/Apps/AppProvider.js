import React, { Component } from 'react'

export const AppContext = React.createContext();

export default class AppProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    confirmFavorites = () =>{
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'Hello'
        }))
    }

    savedSettings () {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
            if(!cryptoDashData){
                return {page: 'setting', firstVisit: true}
            }
            return{};
    }


    setPage = page => this.setState({page})



    render() {
        return (
            <AppContext.Provider value ={this.state}>

                {this.props.children}
            
            </AppContext.Provider>
        )
    }
}

