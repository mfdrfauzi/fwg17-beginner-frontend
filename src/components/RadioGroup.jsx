import React from 'react'

const RadioGroup = ({ groupName, label, options }) => {
  return (
    <fieldset className="flex flex-col gap-4">
      <label className="text-lg font-bold" htmlFor={groupName}>
        {label}
      </label>
      <ul className="flex w-auto gap-x-7" id={groupName}>
        {options.map((option) => (
          <li key={option.value} className="flex flex-1">
            <input
              type="radio"
              className="hidden peer"
              name={groupName}
              id={option.value}
              value={option.value}
              required={option.required}
            />
            <label
              htmlFor={option.value}
              className={`flex flex-1 w-auto h-10 justify-center items-center border border-gray-300 bg-white active:border-amber-500 cursor-pointer hover:bg-amber-300 peer-checked:border-amber-500`}
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  )
}
  
export default RadioGroup
