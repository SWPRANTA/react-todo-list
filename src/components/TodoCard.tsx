interface TodoCardProps {
  children: React.ReactNode; // Represents the child elements inside the TodoCard
  deleteTodo: (index: number) => void; // Function to delete a todo
  editTodo: (index: number) => void; // Function to edit a todo
  index: number; // The index of the current todo item
}


export default function TodoCard(props:TodoCardProps) {
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
