import TextField from './TextField.jsx'
import Title from './Title.jsx'
import insta from '../assets/insta.svg'
import githup from '../assets/githup.svg'

export default function NavBar(){


    return (
        <div className="navBar">
            <p className="selected">Home</p>
            <p>Blogs</p>
            <TextField/>
            <Title logo={insta} text='instagram'/>
            <Title logo={githup} text='Github'/>

        </div>
    )
}