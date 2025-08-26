import './App.css'
import { useState, useRef, useReducer, useCallback, createContext } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map(item => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
    case "DELETE" : return state.filter(item => item.id != action.targetId);
    default: return state;
  }
}

// 데이터를 하위 컴포넌트에 공급만 하면 되기 때문에 특수한 경우가 아닌 이상 컴포넌트 외부에 선언한다.
export const TodoContext = createContext();
console.log(TodoContext);

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback(
    (content) => {
      dispatch({
        type: "CREATE"
        , data: {
          id: idRef.current++
          , isDone: false
          , content: content
          , date: new Date().getTime()
        }
      })
    }, []);
 
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE"
      , targetId: targetId
    })
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE"
      , targetId: targetId
    })
  }, []);

  return (
    <div className='App'>
      <Header />
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete
      }}>
        <Editor/>
        <List/>
      </TodoContext.Provider>
    </div>
  );
}

export default App
