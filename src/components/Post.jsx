import {useEffect, useState} from "react";

function Post(){

    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState(false)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))

        //console.log("Component ilk yüklendiğinde çalışır");
        console.log(`postId: ${postId}`);
    }, [postId])

    /*
        useEffect(() => {
         console.log("Component render oldu");
         return () => {
             console.log("component destroy olur yani ölür")
         }
        })
     */

    return(
        <>
            <div className="m-3 text-center">
                <h1 className="text-lg font-bold">Post Componenti</h1>
                <hr className="my-2" />
                <div className="flex items-center gap-2">

                    <div className="bg-indigo-100 text-dark rounded w-full p-14">
                        <h1 className="capitalize mb-3 text-center font-bold">
                            {JSON.stringify(post.title)}
                        </h1>
                        <div className="w-full max-w-[1250px] mx-auto text-center">
                            <p>
                                {JSON.stringify(post.body)}
                            </p>
                            <div className="flex gap-2 w-max mx-auto">
                                {postId !== 1 && <button
                                    className="mx-auto flex mt-4 px-4 py-2 bg-white rounded shadow font-medium select-none"
                                    //disabled={postId === 1}
                                    onClick={() => {
                                        setPostId(postId => postId - 1)
                                    }}
                                >
                                    Önceki Post
                                </button>}
                                <button
                                    className="mx-auto flex mt-4 px-4 py-2 bg-white rounded shadow font-medium select-none"
                                    onClick={() => {
                                        setPostId(postId => postId + 1)
                                    }}
                                >
                                    Sonraki Post
                                </button>
                                {postId !== 1 && <button
                                    className="mx-auto flex mt-4 px-4 py-2 bg-white rounded shadow font-medium select-none"
                                    onClick={() => {
                                        setPostId(1)
                                    }}
                                >
                                    Başa Dön
                                </button>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Post