
function TodoList({task, onClickHandler}) {

    return (<div className={"task"} style={{

    }}>

        <div>{task}</div>
        <button onClick={()=> {
            onClickHandler(task);
        }
        }>Complete</button>
    </div>)

}

export default TodoList;