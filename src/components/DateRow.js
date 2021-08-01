import styled from 'styled-components'

const Row = styled.div`
background: teal;
text-align: center;
width: 100%;
padding-bottom: 4px;
`;

export const DateRow = ({children, style}) => {
    return (
        <Row style={style}>
            {children}
        </Row>
    )
}
