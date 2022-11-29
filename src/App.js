import React, { useState } from "react";
import "./todo.css";
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트를 공부하자", content: "공부하기", isDone: false },
    { id: 2, title: "리액트를 공부", content: "리액트하기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const doneHandler = (id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    const temp = [...todos];
    temp[idx] = { ...temp[idx], isDone: !temp[idx].isDone };
    console.log(temp[idx].isDone);
    setTodos(temp);
  };
  //그.. 뭐라고달아야.. 남들도 이해하지..
  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((user) => user.id !== id);
    setTodos(newTodoList);
  };

  return (
    <div>
      <input
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={content}
        placeholder="내용을 입력해주세요"
        onChange={(e) => setContent(e.target.value)}
      />
      <CustomButton color="green" onClick={addTodoHandler}>
        추가하기
      </CustomButton>
      <br></br>
      <span>Working..💥</span>
      <div className="app-style">
        {todos.map((todo) =>
          todo.isDone === false ? (
            <Todo
              handleDelete={deleteTodoHandler}
              handleDone={doneHandler}
              todo={todo}
              key={todo.id}
            ></Todo>
          ) : null
        )}
      </div>
      <span>Done..!🎉</span>
      <div className="app-style">
        {todos.map((todo) =>
          todo.isDone === true ? (
            <Todo
              handleDelete={deleteTodoHandler}
              handleDone={doneHandler}
              todo={todo}
              key={todo.id}
            ></Todo>
          ) : null
        )}
      </div>
    </div>
  );
};

export default App;
