export default function Blogs({params}:{
    params:{
        postId :string
    }
}){
    const postId = params.postId;
return <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center text-2xl">
   I love you {postId}
   </div>
</div>
}