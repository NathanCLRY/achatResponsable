import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Rechercher...", 
  onSearch = () => {} 
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
