const baseUrl=process.env.REACT_APP_URL_API;

const fetchWithoutToken=async(url,data,method='GET')=>{
    const finalUrl=`${baseUrl}/${url}`
    let response=null;
    if(method=='GET'){
        response = await fetch(finalUrl)
    }else{
        response = await fetch(finalUrl,{
            method:method,
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
    }
    return await response.json()
}


const fetchWithToken=async(url,data,method='GET',token)=>{
    const finalUrl=`${baseUrl}/${url}`
    let response=null;
    if(method=='GET'){
        console.log('Ingreso a get method')
        response = await fetch(finalUrl,{
            headers:{
                'Authorization':token
            }
        })
    }else{
        response = await fetch(finalUrl,{
            method,
            headers:{
                'Content-Type':'application/json',
                'Authorization':token
            },
            body:data
        })
    }
    return await response.json()
}

export {fetchWithoutToken,fetchWithToken}