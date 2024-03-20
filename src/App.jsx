import { useState, useEffect } from 'react'
import tarefasServices from './services/tarefasServices';

function App() {

  const [nomeTarefa, setNomeTarefa] = useState("");
  const [completa, setCompleta] = useState(false);
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    tarefasServices.listarTarefas()
      .then(response => response.json())
      .then(response => response.todos)
      .then(responses => responses.filter(response => response.userId == 5))
      .then(response => { setTarefas(response) })
  })

  return (



    //states

    //vars
    <div>

      <h1>Nome da tarefa: </h1>
      <input type="text" id="texto" name="" onKeyUp={(event) => {
        setNomeTarefa(event.nativeEvent.srcElement.value);
      }}/>

      <h1>Completa? </h1>
      <input type="checkbox" name="" id="input" onClick={(event) => {
        setCompleta(event.target.checked);
      }} />

      <br></br>

      <button onClick={() => { 
        tarefasServices.criarTarefa(nomeTarefa, completa) 
        tarefasServices.listarTarefas()
        .then(response => response.json())
        .then(response => response.todos)
        .then(responses => responses.filter(response => response.userId == 5))
        .then(response => { setTarefas(response) })
        }}>Enviar tarefa</button>

      <br></br>
      <br></br>

      {
        tarefas.map(tarefa => {
          let completa = "não";

          if(tarefa.completed) {
            completa = "sim";
          }

          return(
            <div>
              <p>{tarefa.todo} || Completa? {completa}</p>
              <br></br> <br></br>
            </div>
          )
        })
      }

    </div>
  )
}

export default App
