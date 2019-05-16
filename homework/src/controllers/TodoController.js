import Controller from "../libs/Controller.js";

class TodoController extends Controller {

  clickTodo(id) {
    this.model.update(data => ({
      ...data,
      activeTodoId: id
    }))
  }

  addTodo() {
    const nextId = new Date().valueOf()
    this.model.update(data => ({
      ...data,
      todos: [...data.todos, { id: nextId, title: '请输入标题', content: '请输入内容', time:'' }]
    }))
    this.clickTodo(nextId);
    this.change();
  }

  change() {
    document.getElementById("B2").style.display ="block";
    document.getElementById("DT").style.display = "none";
    document.getElementById("DC").style.display = "none";
    document.getElementById("NDT").style.display = "block";
    document.getElementById("NDC").style.display = "block";
    document.getElementById("NDT").value=document.getElementById("DT").innerHTML;
    document.getElementById("NDC").value=document.getElementById("DC").innerHTML;
  }

  save() {
    const { data } = this.model;
    let title = document.getElementById("NDT").value;
    let content = document.getElementById("NDC").value;
    for(let todo of data.todos) {
      if (todo.id === data.activeTodoId) {
          todo.title = title;
          todo.content = content;
          todo.time = new Date().toLocaleString(data.activeTodoId);
      }
    }
    this.clickTodo(this.model.data.activeTodoId);
  }


}
export default TodoController