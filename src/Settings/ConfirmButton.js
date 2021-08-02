import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Apps/AppProvider';


const ConfirmButtonStyled = styled.div `
margin: 20px;
color: #ff8906;
cursor: pointer;
`

export const CenterDiv = styled.div `
display:grid;
justify-content: center;`



export default class ConfirmButton extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({confirmFavorites}) =>
                <CenterDiv>
                    <ConfirmButtonStyled onClick ={confirmFavorites}>
                        Confirm Favorite
                    </ConfirmButtonStyled>
                </CenterDiv> 
            }
            
            </AppContext.Consumer>
        )
    }
}
