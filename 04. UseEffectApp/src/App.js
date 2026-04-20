import React from 'react'
import UsersList from './componrnts/UsresList'
import SearchFilter from './componrnts/SearchFilter'
import ResizeTracker from './componrnts/ResizeTracker'
import Timer from './componrnts/Timer'
import AutoCounter from './componrnts/AutoCounter'
import DarkMode from './componrnts/DarkMode'
import NetworkStatus from './componrnts/NetworkStatus'
import PaginationAPI from './componrnts/PaginationAPI'
import AutoSaveForm from './componrnts/AutoSaveFrom'


const App = () => {
  return (
    <div>
      <UsersList/>
      <SearchFilter/>
      <ResizeTracker/>
      <Timer/>
      <AutoCounter/>
      <DarkMode/>
      <NetworkStatus/>
      <PaginationAPI/>
      <AutoSaveForm/>
    </div>
  )
}

export default App
