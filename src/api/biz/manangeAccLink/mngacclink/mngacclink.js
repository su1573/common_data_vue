import http from "@/common/request";

export default {
  /**
   * 查询
   */
  list(data, success, fail) {
    http.postBody("/api/manangeAccLink/mngacclink/list", data, success, fail);
  },
  /**
   * 增加
   */
  add(data, success, fail) {
    http.postBody("/api/manangeAccLink/mngacclink/add", data, success, fail);
  },
  /**
   * 更新
   */
  update(data, success, fail) {
    http.postBody("/api/manangeAccLink/mngacclink/update", data, success, fail);
  },
  /**
   * 删除
   */
  remove(data, success, fail) {
    http.postBody("/api/manangeAccLink/mngacclink/remove", data, success, fail);
  },
  /**
   * 批量删除
   */
  batchRemove(data, success, fail) {
    http.postBody("/api/manangeAccLink/mngacclink/batchRemove", data, success, fail);
  }
};
