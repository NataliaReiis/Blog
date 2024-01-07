
export default function Menu(){
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
        <div className="menu">
            <h1>Outros posts que voce pode gostar</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Ler Mais</button>
                </div>
            ))}
        </div>
    )
}