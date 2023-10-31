import { dragDrop, dragEnd, dragStart } from "../store";
import { useAppDispatch } from "../store/hooks";

interface TileProps {
  candy: string;
  candyId: number;
}

const Tile: React.FC<TileProps> = ({ candy, candyId }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none"
      style={{
        boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
      }}
    >
      {candy && (
        <img
          src={candy}
          alt="candyy"
          className="h-20 w-20"
          candy-id={candyId}
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={(e) => dispatch(dragEnd())}
        />
      )}
    </div>
  );
};

export default Tile;
