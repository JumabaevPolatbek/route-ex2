import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import TextLink from './pages/TextLink';
function App(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='posts' element={<Posts/>}/>
            <Route path='posts/:id' element={<TextLink form={'posts'}/>}/>
            <Route path='comments' element={<Comments/>}/>
            <Route path='comments/:id' element={<TextLink form={'comments'}/>}/>
        </Routes>
    )
}
export default App;