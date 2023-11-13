import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data:blogs, isPending, error} = useFetch("http://localhost:3001/blogs")
    const [showAllBlogs, setShowAllBlogs] = useState(false);

    const toggleAllBlogs = () => {
        setShowAllBlogs(!showAllBlogs);
    };

 
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>loading...</div>}

            <div>
                <h1>All Blogs
                <button onClick={toggleAllBlogs} className = 'showBlogs_button'>
                    {showAllBlogs ? 'Close' : 'Expand'}
                </button>
                </h1>
                {showAllBlogs && blogs && <BlogList blogs={blogs}/>}
            </div>
            
            {blogs && <BlogList blogs = { blogs.filter((blogs) => blogs.author.toLowerCase() == 'melo' )} title="melo's blogs"/>}
            {blogs && <BlogList blogs = { blogs.filter((blogs) => blogs.author.toLowerCase() === 'cindy')} title="cindy's blogs"/>}
        </div>
    );
}
 
export default Home;