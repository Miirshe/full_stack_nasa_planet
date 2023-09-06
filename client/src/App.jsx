import { Route, Routes } from 'react-router-dom'
import { Footer, Header, History, Launch, Up_coming } from './index'
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Launch/>}/>
        <Route path='/upcoming' element={<Up_coming/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App