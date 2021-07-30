import { FixedSizeList as List } from 'react-window';
import {rows} from './resources/RowData';

function App() {


  const Row = (props) => {
    const {index, data, style} = props
    return (
      <div style={style}>
        {data[index].firstName}
      </div>
    )
  }
  console.log(rows)
  return (
  <>
  
  
  
   <List
   height={150}
   itemCount={rows.length}
   itemSize={50}
   itemData={rows}
   width={300}
 >
   {Row}
 </List>
  </>
  );
}

export default App;
