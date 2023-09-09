import { range } from './utils';

function Grid({ numRows, numCols }) {
  // return <div className="grid">{/* TODO */}</div>;

  return (
    <div className="grid">
      {range(numRows).map(rowNum => (
        <div key={`row-${rowNum}`} className="row">
          
          {range(numCols).map(colNum => (
            <div key={`cell-${rowNum}-${colNum}`} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
