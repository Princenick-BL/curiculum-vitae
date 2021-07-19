const uploadeFile =  (files,result)=>{

    const AWS = require('../configs/aws.js')

    let urls = {}

    return new Promise((resolve, reject) => {

        files.forEach( (file,label) => {

            let file_buffer_string =  file.buffer;
            let base64 =  file_buffer_string.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            var buffer = new Buffer.from(base64[2],'base64');
    
            const params ={
                Bucket : AWS.Bucket,
                Key:`${file.dest}/${file.id}/${file.fileName}`,
                Body: buffer,
            }
    
            AWS.s3.upload(params, (err,data)=>{
                
                if(err){
                    reject({err:err})
                }
    
                urls[`${file.identifier}`]=data.Location  
                resolve(urls)
            })
    
        });
        

    })


}


module.exports = uploadeFile;