import styled from "styled-components";

const Row = styled.div`
background: white;
text-align: center;
color: black;
border-bottom: 1px lightgray solid;
width: 100%;
padding-top: 4px;
`;

export const NameRow = ({children, style}) => {
    return (
        <Row style={style}>
            {children}
        </Row>
    )
}
