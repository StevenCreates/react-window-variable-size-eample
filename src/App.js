import { FixedSizeList as List } from "react-window";
import { rows } from "./resources/RowData";
import styled from "styled-components";

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #313a3a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const Row = (props) => {
    const { index, data, style } = props;
    return <div style={style}>{data[index].firstName}</div>;
  };

  console.log(rows);

  return (
    <AppContainer>
      <List
        height={300}
        itemCount={rows.length}
        itemSize={50}
        itemData={rows}
        width={300}
      >
        {Row}
      </List>
    </AppContainer>
  );
}

export default App;
