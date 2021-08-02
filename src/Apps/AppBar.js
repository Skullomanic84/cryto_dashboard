import React from 'react';
import styled, { css }from 'styled-components';

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
    text-shadow: 0px 0px 60px #03ff03;
`}
`
    //text case styling
    function toProperCase(lower){
        return lower.charAt(0).toUpperCase() + lower.substr(1);
    }
    // setting up the buttons
    function ControlButton({name, active}){
        return (
            <ControlButtonElem active={active}>
                {toProperCase(name)}      
            </ControlButtonElem>
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
