export default function TodoCard(props) {
  const {children, deleteTodo, editTodo, index} = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>{
          editTodo(props.index)
        }}>
          <i className="fa-solid fa-pen"></i>
        </button>

        <button onClick={()=>{
          deleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>

      </div>
    </li>
  );
}
