// 모든 컴포넌트에서 호출 가능한 변수 생성
import { useState, createContext, useContext, useReducer } from 'react'

const StateContext = createContext({
  user: '',
  authenticated: false,
  loading: true
});

const DispatchContext = createContext(null);

const reducer = (state, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: payload,
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
  if (typeof window !== 'undefined') {
    var userId = localStorage.getItem('userId');
  }

  const [state, defaultDispatch] = useReducer(reducer, {
    user: userId,
    authenticated: false,
    loading: true
  });

  console.log('state', state);

  const dispatch = (type, payload) => {
    defaultDispatch({ type, payload })
  }

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);