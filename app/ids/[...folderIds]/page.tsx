export default async function({params}){
    return <div className="text-white ">
        {JSON.stringify(( await params).folderIds)}
    </div>
     
}