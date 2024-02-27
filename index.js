function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'Learn react',
        isCompleted: false,
      },
      {
        text: 'Meet friend for lunch',
        isCompleted: false,
      },
      {
        text: 'Build todo app',
        isCompleted: false,
      }        
    ]);
    
    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
     // const index = Number(e.target.id);
      const temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }
    return(
      <div>
        {todos.map((todo, i) => 
            <Todo key={i} todo={todo} index={i} remove={removeTodo}/>)}
            
        <TodoForm addTodo={addTodo} />
      </div>      
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  