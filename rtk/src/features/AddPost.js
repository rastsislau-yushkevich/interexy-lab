import { useState } from "react"
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch()

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = ({title, content}) => {
        let id = Math.random();
        dispatch(addPost({id, title, content}))
    }

    return(
        <div>
            <input onChange={(e) => handleTitleChange(e)} type="text"/>
            <input onChange={(e) => handleContentChange(e)} type="text" />
            <input onClick={() => handleSubmit({title, content})} type="submit" />
        </div>
    )
}

export default AddPost