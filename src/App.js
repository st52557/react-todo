import {useState, useEffect} from "react";
import './App.css';
import TodoItem from "./TodoItem";
import TodoAdd from "./Todo-add";
import Cookies from "universal-cookie";
function App() {

  const cookies = new Cookies();

  const [tasks, setTasks] = useState([])


    useEffect(() =>{

        let TaskList = cookies.get('TaskList');
        if(TaskList){

            TaskList = TaskList.split('|');

            let list = [];
            //list.push(TaskList);

            setTasks(TaskList);
            console.log("Tasks loaded " + TaskList);
        }else{
            console.log("No tasks to be loaded");
        }

    },[])


    const onAddTaskHandler = function () {

        let TaskList = cookies.get('TaskList');
        if (TaskList) {
            TaskList = TaskList.split('|');
            setTasks(TaskList);
        }
    }

  const handler = function(task){

      let TaskList = cookies.get('TaskList');
      if(TaskList){
          TaskList = TaskList.split('|');
          TaskList = TaskList.filter(x=> x !== task);

          console.log('Task: "' + task + '" removed.');

          const a = TaskList.join('|');

          cookies.set('TaskList', a, { path: '/' });

          setTasks(TaskList);
      }


  }



  return (


      <div className="App">

         <TodoAdd onAddHandler={onAddTaskHandler} />

        Number of tasks: {tasks.length}

        <div style={{
          display: "flex",
          margin: "10px",
          flexWrap: "wrap"

        }}>



          {tasks.map(item => <TodoItem key={item} task={item} onClickHandler={handler}/>)}

        </div>



      </div>
  );


}

export default App;
