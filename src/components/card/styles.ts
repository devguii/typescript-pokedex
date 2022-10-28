import styled from "styled-components"; 

export const Container = styled.div`
    width : 25%;
    height: 100%;
    border-radius: 10%;
    border: 2px solid black;
    display: flex;
    flex-direction: column  ;
    align-items: center;
    justify-content: center;
`
export const IdContainer = styled.div`
    width : 100%;
    height: 15%;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
    background-color: blue;
    display: flex;
    align-items: right;
    justify-content: right;
    padding-right: 10%;
`
export const ImgContainer = styled.div`
    width : 80%;
    height: 55%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const NameContainer = styled.div`
    width : 100%;
    height: 20%;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Img = styled.img`
    scale: 0.5;
`