export default async function Blogs({params}:{
    params:{
        postId :string
    }
}){
    const postId = (await params).postId;
return <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center text-2xl">
   Blog Page {postId}
   </div>
</div>
}