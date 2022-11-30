import React, { useState } from "react";
import "./todo.css";
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";
import styled from "styled-components";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트를 공부하자", content: "공부하기", isDone: false },
    { id: 2, title: "리액트를 공부", content: "리액트하기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(3);
  const addTodoHandler = () => {
    setId(id + 1);
    const newTodo = {
      id: id,
      title: title,
      content: content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
    console.log(id);
  };

  const doneHandler = (id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    const temp = [...todos];
    temp[idx] = { ...temp[idx], isDone: !temp[idx].isDone };
    setTodos(temp);
  };
  //그.. 뭐라고달아야.. 남들도 이해하지..
  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((user) => user.id !== id);
    setTodos(newTodoList);
  };

  return (
    <div>
      <div className="layOut">
        <div className="nav-bar">
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <div className="add-form">
          <div className="input-group">
            <label className="form-label">제목</label>
            <input
              className="input-box"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="form-label">내용</label>
            <input
              className="input-box"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <STButton onClick={addTodoHandler}>추가하기</STButton>
        </div>
        <div className="list-container">
          <h2 className="list-title">Working..💥</h2>
          <div className="list-wrapper">
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
        </div>
        <h2 className="list-title">Done..!🎉</h2>
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
    </div>
  );
};

const STButton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;

export default App;
