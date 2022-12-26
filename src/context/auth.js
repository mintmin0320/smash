// 모든 컴포넌트에서 호출 가능한 변수 생성
import { createContext, useContext, useReducer } from 'react'

const StateContext = createContext({
  authenticated: false,
  loading: true
});

const DispatchContext = createContext(null);

const reducer = (state, { type }) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
      }
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false
      }
    default:
      throw new Error(`Unkown action type: ${type}`)
  }
}

export const AuthProvider = ({ children }) => {
  const [state, defaultDispatch] = useReducer(reducer, {
    user: null,
    authenticated: false,
    loading: true
  });

  console.log('state', state);

  const dispatch = (type) => {
    defaultDispatch({ type })
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);