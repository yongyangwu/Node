function home() {
    console.log("executing 'home' handler");
}
function review() {
    console.log("executing 'review' handler");
}
function api_records() {
    console.log("executing 'api_records' handler");
}
module.exports = {
    home:home,
    review:review,
    api_records:api_records
};