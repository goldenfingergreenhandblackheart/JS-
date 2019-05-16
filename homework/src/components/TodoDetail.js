

import Component from "../libs/Component.js";

class TodoDetail extends Component{

    render() {
        const { data } = this.model
        return`
            <header>Todo Detail</header>
            ${data.todos.map(todo => {
                if(todo.id === data.activeTodoId) {
                    return `
                        <p id="DT">${todo.title}</p><br/>
                        <p id="DC">${todo.content}</p>
                        <input id="NDT" type="text"><br/>
                        <textarea id="NDC"></textarea>
            `}}).join('')}                
            
            <button id="B1" onclick="TodoController.change()" type="button">编辑模式</button><br/>
            <button id="B2" onclick="TodoController.save()" type="button">保存</button>
        `
    }
}

export default TodoDetail