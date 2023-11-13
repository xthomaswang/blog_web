import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending} = useFetch("http://localhost:3001/blogs/" + id)
    const history = useHistory()

    const handleClick = () =>{
        fetch("http://localhost:3001/blogs/" + blog.id,{
            method: 'DELETE',
        }).then(()=>{
            console.log(blog.id+'blog delete')
            history.push('/')
        })

    }

    return ( 
        <div className="blog-details">
            { isPending && <div> Loading... </div>}
            { error && <div> { error } </div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {blog.imageUrls && blog.imageUrls.map((url) =>(
                        <img key = {url} src = {url} alt = {blog.title} className = "img_small"/>
                    ))}
                    {blog.videoUrl && (
                        <video controls width = "500">
                            <source src = {blog.videoUrl} type = "video/mp4" />
                        </video>
                    )}
                    <button onClick={handleClick}>Delete</button>
                </article>
            
            )}
        </div>
     );
}
 
export default BlogDetails;