const queryString = (query_name:string) : string => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(query_name);

    if(param){
        return param;
    }else{
        return '';
    }
}

const parsePageId = () => window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)


export {
    queryString,
    parsePageId
}