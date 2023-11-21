import { useCount } from "./hooks/useCount"

const YandexCounter = () => {
  const { count, increment, decrement } = useCount(0)
  return(
    <>
      <button onClick={increment}>Increment</button>
        <span>{ count }</span>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default YandexCounter