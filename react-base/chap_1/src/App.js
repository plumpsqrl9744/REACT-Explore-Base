import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './Todo/TodoForm';
import TodoItem from './Todo/TodoItem';


function App() {

  const [todo, setTodo] = useState([
    {id : 1, title : "아침 챙겨먹기", completed : true},
    {id : 2,title : "점심 챙겨먹기", completed : false},
    {id : 3,title : "저녁 챙겨먹기", completed : false},
  ])


  const [bool, setBool] =  useState(true)


  // useEffect(() => {
  // 의존성 배열이 비어있으면 이 컴포넌트가 마운트 될 떄 실행된다.
  // console.log(bool) // true // false
  // setBool(false)
    // return () => {
      // console.log(bool) // true
    // }
    // 클린업 함수
    // 컴포넌트가 언마운트 될 때 실행된다.
  // },[bool]) 

  // 컴포넌트가 화면에 보일 때 실행
  // 의존성 배열을 빼먹으면 리랜더링 될 때마다 실행된다.

  // useEffect(()=> {

    // todo가 바뀔 때마다 실행됨
    // return () => {
      // todo가 바뀌기 직전에 실행됨
  //   }
  // }, [todo])
  // todo가 바뀔 때 마다 실행된다.
  // todo를 변경해 useEffect 가 실행하려고 하면 todo의 참조 관계를 끊고 아예 새로운 state를 넣어줘야 한다.
  // ex) todo가 a -> b로 바꼈을 때
  // a useEffect -> a cleanup -> b useEffect

  const onSubmit = (newTodo) => {

    console.log('onparentSubmit')
    const nextTodo = [...todo, {title : newTodo, completed: false, id: Math.random()}]
    setTodo(nextTodo) // 바로 변화된 값이 반영되지 않는다. 왜냐하면 batch 때문
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
          <TodoForm onSubmit={onSubmit}/> 
          {/* 중복은 컴포넌트화 1순위 */}
        </div>
      ) : (
        <>
          {todo.map((t, i) => (<TodoItem key={t.id} item={t} index={i} setTodo={setTodo}/>))}
          <TodoForm onSubmit={onSubmit}/> 
          {/* 중복은 컴포넌트화 1순위 */}
        </>
      )}
    </div>
    </>
  );
}

export default App;
