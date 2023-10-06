export default function TodoList({todos}) {
    return(
       // <div className="TodoList">
          //  This is to do list function

        //</div>

        <ul>
            {
                todos.map(todo=>(
                    <li key={todo.id}>{todo.text}</li>
                ))
            }  
        </ul>

    );
}