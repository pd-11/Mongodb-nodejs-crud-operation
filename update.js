const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { completed:'false'},
        {
            $set:{completed:'true'}
        }
        )
    console.log(result)

}
updateData();