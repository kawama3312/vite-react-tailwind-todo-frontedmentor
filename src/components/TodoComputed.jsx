const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return(
        <section className="py-4 px-4 rounded-b-md flex justify-between bg-white">
            <span className="text-gray-400">
                { computedItemsLeft } items left
            </span>
            <button className="text-gray-400" onClick={clearCompleted}>
                clear completed
            </button>              
         </section>
    );
};

export default TodoComputed;