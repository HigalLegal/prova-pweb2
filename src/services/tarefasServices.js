const ID_ATIVIDADES = 5;

class TarefaServices {

    listarTarefas() {
        return fetch("https://dummyjson.com/todos");
    }

    criarTarefa(nomeTarefa, completa) {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: nomeTarefa,
                completed: completa,
                userId: ID_ATIVIDADES,
            })
        })
        .then(res => res.json())
        .then(console.log);
    }

}

export default  new TarefaServices();