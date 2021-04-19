import {useState} from "react";
import Cookies from 'universal-cookie';

function TodoAdd(props){

    const [taskText, setTaskText] = useState("")
    const cookies = new Cookies();

    const onSubmitHandler = event => {
        event.preventDefault()


        let newList = cookies.get('TaskList');
        if(newList){
            newList.split('|');
            let list = [];
            list.push(newList);
            list.push(taskText);
            const a = list.join('|');
            cookies.set('TaskList', a, { path: '/' });

            console.log("Task added "+ taskText);
        }else{
            cookies.set('TaskList', taskText, { path: '/' });
            console.log("First task added");
        }
        props.onAddHandler();


    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type={"text"} value={taskText} onChange={(e) => setTaskText(e.target.value)} style={{margin: "5px", width: "300px"}}/>
            <input itemID={"submitBtn"} type={"submit"} value={"New"} />
        </form>
    )
}

export default TodoAdd;