import Item from "./Item";

function List({ table, modal, remove }) {
  return (
    <div className="scooter_list">
      {table.map((data) => (
        <Item key={data.id} data={data} modal={modal} remove={remove}></Item>
      ))}
    </div>
  );
}

export default List;





