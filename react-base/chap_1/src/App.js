import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([
    {id : 1, title : "아침 챙겨먹기", completed : true},
    {id : 2,title : "점심 챙겨먹기", completed : false},
    {id : 3,title : "저녁 챙겨먹기", completed : false},
  ])

  const [newTodo, setNewTodo] =  useState("")

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value)
  }

  useEffect(()=> {

  }, [todo])

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, {title : newTodo, completed: false, id: Math.random()}])
    console.log(todo) // 바로 변화된 값이 반영되지 않는다. 왜냐하면 batch 때문
    // 비동기와 비슷하지만 엄밀히 말해 비동기는 아니다.
    // 그럼 바뀐 부분은 어떻게 확인할 수 있는가?
    // useEffect를 사용하면 된다.
  }


  return (
    <> {/*fragment*/}
    <div className="App">TODO</div>
    <label htmlFor=""></label>
    {/* label attribute는 htmlFor을 사용한다. */}
    <div className="App">
      {todo.length === 0 ? (
        <div>
          <div>
            할 일을 추가해보세요.
          </div>
          <form onSubmit={onSubmit}>
            <input value={newTodo} onChange={onChangeNewTodo}/>
            <button>추가</button>
          </form>
          {/* 중복은 컴포넌트화 1순위 */}
        </div>
      ) : (
        <>
          {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
          <form onSubmit={onSubmit}> 
            <input value={newTodo} onChange={onChangeNewTodo}/>
            <button>추가</button>
          </form>
          {/* 중복은 컴포넌트화 1순위 */}
        </>
      )}
    </div>
    </>
  );
}

export default App;
