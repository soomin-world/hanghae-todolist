import React, { useState } from "react";
import "./todo.css";
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트를 공부하자", content: "공부하기" },
    { id: 2, title: "리액트를 공부", content: "리액트하기" },
    { id: 3, title: "리액트 공부", content: "공부하기" },
    { id: 4, title: "리액트 하자", content: "공부" },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
    };
    setTodos([...todos, newTodo]);
  };
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
        {todos.map((todo) => {
          return (
            <Todo
              handleDelete={deleteTodoHandler}
              todo={todo}
              key={todo.id}
            ></Todo>
          );
        })}
      </div>
      <span>Done..!🎉</span>
    </div>
  );
};

export default App;
