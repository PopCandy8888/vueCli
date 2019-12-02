 let baseURL = 'http://10.0.0.24:11100/';
function ep (str) {
  return baseURL + str;
}
module.exports = {
  baseURL: baseURL,
  queryDataFlowByCondition: ep('service/flow/flow/queryDataFlowByCondition'),
};
