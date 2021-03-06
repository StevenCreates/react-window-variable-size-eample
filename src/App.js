import { VariableSizeList as List } from "react-window";
import { rows } from "./resources/RowData";
import styled from "styled-components";
import {useCreateRows} from './hooks/useCreateRows'
import {getComponentSize} from './resources/utils'
import { DateRow } from "./components/DateRow";
import { NameRow } from "./components/NameRow";
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

  const createdRows = useCreateRows(rows);
  const Row = (props) => {
    const { index, data, style } = props;
    return  data[index].component === 'rowComponent' ? (
    <NameRow style={style}>{data[index].name}</NameRow>
    ) : (
      <DateRow style={style} >{data[index].date}</DateRow>
    )
  };


  return (
    <AppContainer>
      <List
        height={300}
        itemCount={createdRows.length}
        itemSize={index => getComponentSize(createdRows[index].component)}
        itemData={createdRows}
        width={300}
      >
        {Row}
      </List>
    </AppContainer>
  );
}

export default App;
