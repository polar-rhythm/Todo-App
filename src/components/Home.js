import {useState} from 'react';
import Vlog from './Vlog'
import Apply from './Apply';

const Home = () => {
 const [posts, setPosts] = useState([
     {title:'nigeria', body:'lorem ipsum bla bla bala..', author: 'Diego', id: 1},
     {title:'plateau', body:'lorem ipsum bla bla bala..', author: 'jay jay', id: 2},
     {title:'jos city', body:'lorem ipsum bla bla bala..', author: 'Diana', id: 3},
     <Apply/>
    ]);

    

    const handleDelete = (id) => {
        const newBlogs = posts.filter(post => post.id !== id);
        setPosts(newBlogs);
    }

    return(
        <div className="home">
            <Vlog posts={posts} title="ALL POSTS" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;