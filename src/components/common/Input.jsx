import React from 'react'

const Input = ({ type, placeholder, Icon }) => {
    return (
        <div className="relative w-full">
            {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
            <input
                type={type}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-purple-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
        </div>
    )
}

export default Input