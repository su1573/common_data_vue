import http from "@/common/request";

export default {
  /**
   * 查询
   */
  list(data, success, fail) {
    http.postBody("/api/manager/custodian/list", data, success, fail);
  },
  /**
   * 增加
   */
  add(data, success, fail) {
    http.postBody("/api/manager/custodian/add", data, success, fail);
  },
  /**
   * 更新
   */
  update(data, success, fail) {
    http.postBody("/api/manager/custodian/update", data, success, fail);
  },
  /**
   * 删除
   */
  remove(data, success, fail) {
    http.postBody("/api/manager/custodian/remove", data, success, fail);
  },
  /**
   * 批量删除
   */
  batchRemove(data, success, fail) {
    http.postBody("/api/manager/custodian/batchRemove", data, success, fail);
  }
};
