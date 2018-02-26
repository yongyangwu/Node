function route(handle,pathname) {
    console.log("routing a request for"+ pathname);
    if(typeof handle[pathname]==='function'){
        handle[pathname]();
    }else{
        console.log("no handler for" + pathname);
    }
}
module.exports.route = route;