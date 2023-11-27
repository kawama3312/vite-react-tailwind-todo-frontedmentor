import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const initialStateTodos = [
  { id: 1, title: "Complete online javascript curse", completed: true },
  { id: 2, title: "Go to the gym", completed: false },
  { id: 3, title: "10 minutos meditation", completed: false },
  { id: 4, title: "pick up graceries", completed: false },
  { id: 5, title: "complete todo app on  Fronted Mentor", completed: false },

];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all"); 

  const changeFilter = (filter) => setFilter(filter);
  
  const filteredTodos = () => { 
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-200">

         <Header />

         <main className="container mx-auto px-4 mt-8">
             <TodoCreate createTodo={createTodo}/>

             <TodoList 
                todos={filteredTodos()} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo}/>

             <TodoComputed 
                computedItemsLeft={computedItemsLeft} 
                clearCompleted={clearCompleted} />           

             <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>
        <footer className="text-center mt-8">
        Drag and drop to reader list
        </footer>
    </div>
  ) 
}

export default App;