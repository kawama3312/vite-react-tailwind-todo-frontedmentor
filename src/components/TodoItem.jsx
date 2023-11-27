import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, removeTodo, updateTodo}) => {
    const {id, title, completed} = todo;

    return(
        <article className="flex gap-4 border-b border-b-gray-300 ">
        <button 
            className={`w-5 h-5 flex-none rounded-full border-2 ${
                completed 
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center" 
                : "inline-block"
            }`} 
            onClick={() => updateTodo(id)}
          >
            {
                completed && <IconCheck />
            }
          
        </button>
        <p className={`text-gray-600 grow ${completed && "line-through"}`}>
            {todo.title}
        </p>
        <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
        </button>
    </article>
    );
};

export default TodoItem;