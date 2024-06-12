import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: grey; 
`
const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center
`
const Button = styled.button`
    color : ${props => props.dark ? 'white' : 'dark'};
    background: ${props => props.dark ? 'black' : 'white'}
    border: 1px solid black
`

export default function MainPage() {
    return (
        <Wrapper>
            <Title>
                안녕, 리액트
            </Title>
            <br />
            <Button>Normal</Button>
            <Button dark></Button>
        </Wrapper>
    )
}
