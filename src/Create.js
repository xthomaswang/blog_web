import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () =>{

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author, setAuthor] = useState('Melo')
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [isPending,setIsPending] = useState(false)
    const history = useHistory()

    const handleFileChange = (e) => {
        setSelectedFiles([...e.target.files]);
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author};
        setIsPending(true)

        const formData = new FormData();
        formData.append("blog", JSON.stringify(blog));
        selectedFiles.forEach(file => {
            formData.append("files", file);
        })


        fetch("http://localhost:3001/blogs",{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog add')
            setIsPending('false')
            history.push('/')
        })
    }

    

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>

                <input 
                    type = "text" 
                    required 
                    value = {title} 
                    onChange = {(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                    required
                    vlue = {body}
                    onChange = {(e) => setBody(e.target.value)}
                />
                <div>
                    <input
                        type = "file"
                        multiple
                        accept="image/*, video/*"
                        onChange={handleFileChange}
                    />
                </div>
                <label>Blog author:</label>
                <select 
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                    >
                    <option value="melo">Melo</option>
                    <option value="cindy">Cindy</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog......</button>} 

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
    )
}

export default Create