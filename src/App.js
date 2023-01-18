import BasicForm from './components/BasicForm'

function App() {
  return (
    <div className="app">
      <BasicForm />
    </div>
  )
}

export default App

//  유효성 검사를 언제할지가 문제
//  1.  제출했을때          사용자가 경고하기 전에 유효한값을 입력      불필요한 경고를 피하지만 늦게 피드백함
//
//  2.  인풋에 입력 후에     사용자가 경고하기 전에 유효한값을 입력     입력전에 확인가능
//
//  3.  키 하나하나 입력시    입력전 경고                             잘못된 입력에만 적용할 경우 보다 빠르게 알려줌 제공할 수 있습니다
//
//
//
//
//
