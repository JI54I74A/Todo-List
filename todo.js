
function Todo({todo,index,remove}){

    function handle(){
        remove(index);
    }
    
    return (
        <div className = 'todolist'>{todo.text}<button onClick={handle} className = 'btn btn-style'>
        <i class="fa-solid fa-trash-can fa-lg"  onClick={handle}></i></button></div>
    )
}