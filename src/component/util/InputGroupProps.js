import React from 'react'

const InputGroup = ({
  className = "mb-2", // 클래스 네임이 안 들어오면 기본으로 줄 값
  type = "text",
  placeholder = "",
  error,
  value,
  setValue
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        style={{ minWidth: 300 }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <small className='font-medium text-red-500'>{error}</small>
    </div>
  )
}

export default InputGroup