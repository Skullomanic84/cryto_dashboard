import React from 'react';
import styled, { css }from 'styled-components';
import { AppContext } from './AppProvider';

//declaring style components
const Logo = styled.div `
font-size: 1.5em;
`

//navbar grid layout
const Bar = styled.div `
display: grid;
margin-bottom: 40px;
grid-template-columns: 180px auto 100px 100px;
`
// button styling
const ControlButtonElem = styled.div `
cursor: pointer;
${props => props.active && css `
    color: #ff8906;
`}
`
    //text case styling
    function toProperCase(lower){
        return lower.charAt(0).toUpperCase() + lower.substr(1);
    }
    // setting up the buttons
    function ControlButton({name, active}){
        return (
            <AppContext.Consumer>
                {({page, setPage}) => (
                <ControlButtonElem 
                active={page === name}
                onClick = {() => setPage(name)}
                >
                {toProperCase(name)}      
                </ControlButtonElem>
                )
            }
            
            </AppContext.Consumer>
            
        );
    }


function AppBar() {

    return (
        <Bar>
            <Logo>CrytoDash</Logo>
            <div></div>
            <ControlButton active name="Dashboard" />
            <ControlButton name="Settings" />

        </Bar>
    )
}

export default AppBar
