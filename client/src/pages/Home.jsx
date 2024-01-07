import {Link} from 'react-router-dom'

export default function Home(){

    const posts = [
        {
            id: 1,
            title: 'Lorem impsum 1 dolor sit amet, consectetur adipiscing elit',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
            img: '/src/assets/gato-test.jpg',
        },
        {
            id: 2,
            title: 'Lorem impsum 2 dolor sit amet, consectetur adipiscing elit',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            img: '/src/assets/gato-test.jpg',
        },
        {
            id: 3,
            title: 'Lorem impsum 3 dolor sit amet, consectetur adipiscing elit',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            img: '/src/assets/gato-test.jpg',
        },
        {
            id: 4,
            title: 'Lorem impsum 4 dolor sit amet, consectetur adipiscing elit',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
            img: '/src/assets/gato-test.jpg',
        },
    ]
    return(
       <div className="home">
        <div className="posts">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.img} alt="" />
                    </div>
                    <div className="content">
                        <Link className='link' to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{post.desc}</p>
                        <button>Ler Mais</button>
                    </div>
                </div>
            ))}
        </div>
       </div>
    )
}