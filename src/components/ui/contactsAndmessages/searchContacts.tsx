import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../button'

const SearchContacts = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 p-2 border-b-2">
    <Input type="search" placeholder="search for users" />
    <Button type="submit">Search</Button>
  </div>
  )
}

export default SearchContacts
