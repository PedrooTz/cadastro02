export async function postEmpresas (empresa){
  
    const url = `http://localhost:8080/v1/transportaweb/insertempresa`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(empresa)
    }
    const response = await fetch(url,options)
    return response.ok
}