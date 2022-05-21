const { default: axios } = require("axios");

exports.handler = async function(event, context){
    if(event.httpMethod !== 'POST') return {statusCode: 405, body: ''}

    let body = JSON.parse(event.body);

    let authOption = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'post',
        params: {
            code: body.code,
            redirect_uri: 'http://localhost:8888/callback',
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (Buffer.from('c0d11adcca17461385d8ec0224593625' + ':' + 'b16a1b6dc13d41a6a5cabef419af8191').toString('base64'))
        },
        json: true
    }

    try{
        let response = await axios(authOption)
        return {
            statusCode: 201,
            body: JSON.stringify(response.data)
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: 'Internal server error'
        }
    }

}