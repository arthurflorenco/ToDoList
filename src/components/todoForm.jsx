import {useState} from 'react'

function todoForm({addTodo}) {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return
        console.log(value, category)
       addTodo(value, category)
        setValue("")
        setCategory("")

    }


  return (  
    <div>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite o titulo" value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value) }>
                <option value="">Selecione uma categoria</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar</button>
        </form>
    </div>
  )
}

export default todoForm

//aula parou em 33min 