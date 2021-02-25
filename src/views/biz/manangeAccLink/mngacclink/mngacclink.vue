<template>
  <div>
    <!-- <tool @doQueryBtn="doQuery" /> -->
    <SearchTableItem :queryForm="queryFormData" :doQuery="query" :tableHeight="tableHeight"/>
    <el-table
      v-resizeTable
      ref="filterTable"
      :data="tableData"
      :height="100"
      stripe
      size="mini"
      border
      style="width: 100%;margin-top:15px;"
    >
    
        <el-table-column prop="mngaccno" :label="$t('AppMain.Mngaccno')" width="180" />
        <el-table-column prop="mngtype" :label="$t('AppMain.Mngtype')" width="180" />
        <el-table-column prop="mngcode" :label="$t('AppMain.Mngcode')" width="180" />
        <el-table-column prop="mngname" :label="$t('AppMain.Mngname')" width="180" />
        <el-table-column prop="accountkind" :label="$t('AppMain.Accountkind')" width="180" />
        <el-table-column prop="accbankname" :label="$t('AppMain.Accbankname')" width="180" />
        <el-table-column prop="accno" :label="$t('AppMain.Accno')" width="180" />
        <el-table-column prop="accname" :label="$t('AppMain.Accname')" width="180" />
        <el-table-column prop="remark" :label="$t('AppMain.Remark')" width="180" />
        <el-table-column prop="managecom" :label="$t('AppMain.Managecom')" width="180" />
        <el-table-column prop="operatecom" :label="$t('AppMain.Operatecom')" width="180" />
        <el-table-column prop="operator" :label="$t('AppMain.Operator')" width="180" />
        <el-table-column prop="makedate" :label="$t('AppMain.Makedate')" width="180" />
        <el-table-column prop="maketime" :label="$t('AppMain.Maketime')" width="180" />
        <el-table-column prop="modifyoperator" :label="$t('AppMain.Modifyoperator')" width="180" />
        <el-table-column prop="modifydate" :label="$t('AppMain.Modifydate')" width="180" />
        <el-table-column prop="modifytime" :label="$t('AppMain.Modifytime')" width="180" />
        <el-table-column prop="custodiancode" :label="$t('AppMain.Custodiancode')" width="180" />
        <el-table-column prop="custodianname" :label="$t('AppMain.Custodianname')" width="180" />
        <el-table-column prop="mngaccstatue" :label="$t('AppMain.Mngaccstatue')" width="180" />
        <el-table-column prop="collectchangeacc" :label="$t('AppMain.Collectchangeacc')" width="180" />
        <el-table-column fixed="right" :label="$t('global.Action')" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleClick(scope.row);dialogFormVisible = true;isEdit=false">{{$t('global.Details')}}</el-button>
          <el-button size="mini" type="text" @click="handleClick(scope.row);dialogFormVisible = true;isEdit=true">{{$t('global.Edit')}}</el-button>
          <el-button size="mini" type="text" @click="deleteClick(scope.row)">{{$t('global.Delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :c_total="total" @query="query" ref="pagination" :searchForm="searchForm"  />
    <el-dialog :visible.sync="dialogFormVisible" :title="$t('global.Show')+$t('global.Details')">
      <el-form :model="form" :inline="true" size="mini" :disabled="!isEdit">
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Mngaccno')">
          <el-input v-model="form.mngaccno" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Mngtype')">
          <el-input v-model="form.mngtype" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Mngcode')">
          <el-input v-model="form.mngcode" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Mngname')">
          <el-input v-model="form.mngname" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Accountkind')">
          <el-input v-model="form.accountkind" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Accbankname')">
          <el-input v-model="form.accbankname" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Accno')">
          <el-input v-model="form.accno" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Accname')">
          <el-input v-model="form.accname" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Remark')">
          <el-input v-model="form.remark" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Managecom')">
          <el-input v-model="form.managecom" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Operatecom')">
          <el-input v-model="form.operatecom" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Operator')">
          <el-input v-model="form.operator" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Makedate')">
          <el-input v-model="form.makedate" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Maketime')">
          <el-input v-model="form.maketime" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Modifyoperator')">
          <el-input v-model="form.modifyoperator" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Modifydate')">
          <el-input v-model="form.modifydate" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Modifytime')">
          <el-input v-model="form.modifytime" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Custodiancode')">
          <el-input v-model="form.custodiancode" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Custodianname')">
          <el-input v-model="form.custodianname" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Mngaccstatue')">
          <el-input v-model="form.mngaccstatue" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Collectchangeacc')">
          <el-input v-model="form.collectchangeacc" autocomplete="off" />
        </el-form-item>
              </el-form> 
      <div slot="footer" class="dialog-footer">
        <el-button v-show="isEdit" plain @click="dialogFormVisible = false">{{$t('global.Cancel')}}</el-button>
        <el-button type="primary" @click="update()">{{$t('global.Confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import pagination from "@/components/pagination";
import QueryDialog from "@/components/Dialog";
import SearchTableItem from "@/components/SearchTableItem";
import Tool from "@/components/Tool";
import mngacclinkApi from "@/api/biz/manangeAccLink/mngacclink/mngacclink.js";

export default {
  name: "TestA",
  components: {
    pagination,
    QueryDialog,
    Tool,
    SearchTableItem
  },
  data() {
    return {
      tableHeight: null,
      isEdit: false,
      activeDialog: false,
      dialogFormVisible: false,
      tableData: [],
      total: 0,
      formLabelWidth: "90px",
      searchForm: null,
      queryFormData: [
                {label: "Mngaccno",
        value: "mngaccno",
        type: "undefined"},
                        {label: "Mngtype",
        value: "mngtype",
        type: "undefined"},
                        {label: "Mngcode",
        value: "mngcode",
        type: "undefined"},
                        {label: "Mngname",
        value: "mngname",
        type: "undefined"},
                        {label: "Accountkind",
        value: "accountkind",
        type: "undefined"},
                        {label: "Accbankname",
        value: "accbankname",
        type: "undefined"},
                        {label: "Accno",
        value: "accno",
        type: "undefined"},
                        {label: "Accname",
        value: "accname",
        type: "undefined"},
                        {label: "Remark",
        value: "remark",
        type: "undefined"},
                        {label: "Managecom",
        value: "managecom",
        type: "undefined"},
                        {label: "Operatecom",
        value: "operatecom",
        type: "undefined"},
                        {label: "Operator",
        value: "operator",
        type: "undefined"},
                        {label: "Makedate",
        value: "makedate",
        type: "date"},
                        {label: "Maketime",
        value: "maketime",
        type: "undefined"},
                        {label: "Modifyoperator",
        value: "modifyoperator",
        type: "undefined"},
                        {label: "Modifydate",
        value: "modifydate",
        type: "date"},
                        {label: "Modifytime",
        value: "modifytime",
        type: "undefined"},
                        {label: "Custodiancode",
        value: "custodiancode",
        type: "undefined"},
                        {label: "Custodianname",
        value: "custodianname",
        type: "undefined"},
                        {label: "Mngaccstatue",
        value: "mngaccstatue",
        type: "undefined"},
                        {label: "Collectchangeacc",
        value: "collectchangeacc",
        type: "undefined"}              ],
      form: { 
                mngaccno: "",
                mngtype: "",
                mngcode: "",
                mngname: "",
                accountkind: "",
                accbankname: "",
                accno: "",
                accname: "",
                remark: "",
                managecom: "",
                operatecom: "",
                operator: "",
                makedate: "",
                maketime: "",
                modifyoperator: "",
                modifydate: "",
                modifytime: "",
                custodiancode: "",
                custodianname: "",
                mngaccstatue: "",
                collectchangeacc: "",
                p_end_flag: ""
      },
      queryForm: {
                mngaccno: "",
                mngtype: "",
                mngcode: "",
                mngname: "",
                accountkind: "",
                accbankname: "",
                accno: "",
                accname: "",
                remark: "",
                managecom: "",
                operatecom: "",
                operator: "",
                makedate: "",
                maketime: "",
                modifyoperator: "",
                modifydate: "",
                modifytime: "",
                custodiancode: "",
                custodianname: "",
                mngaccstatue: "",
                collectchangeacc: "",
                p_end_flag: ""
      }
    };   
  },
  activated() {
      this.query({searchForm: this.searchForm});
  },
  watch: {
    tableData() {
      this.$nextTick(() => {
          this.tableHeight = this.$el.offsetHeight;
      })
    }
  },
  methods: {
    query(opt) {
      let {pageSize = this.$refs.pagination.pageSize, pageNum = 1, isUse, searchForm} = opt;
          let arr = {
            offset: '',
            limit: ''
          };
          if (isUse) {
              arr = this.searchForm;
              pageNum = this.currentPage;
          } else {
              arr = searchForm || {};
              this.searchForm = searchForm || {};
          }
          arr.offset = (pageNum - 1) * pageSize;
          arr.limit = pageSize;
      mngacclinkApi.list(arr, result => {
        if (result.status === 200) {
          this.tableData = result.data.rows;
          this.total = result.data.total;
        }
        this.activeDialog = false;
      });
    },
    handleClick(row) {
      this.form = row;
    },
    update() {
      if (this.isEdit) {
        let arr = this.form;
        this.dialogFormVisible = false;
        mngacclinkApi.update(arr, result => {
          this.$message({
            type: "success",
            message: this.$t('global.UpdateSuccess')
          });
        });
      } else {
        this.dialogFormVisible = false;
      }
    },
    deleteClick(row) {
      this.$confirm(this.$t('global.ConfirmDelete'), this.$t('global.Warn'), {
        confirmButtonText: this.$t('global.Confirm'),
        cancelButtonText: this.$t('global.Cancel'),
        type: "warning"
      })
        .then(() => {
          // 请求后台，成功后调用
          var arr = {
            mngaccno: row.mngaccno
          };
          mngacclinkApi.remove(arr, result => {
            if (result.status === 200) {
              this.$message({
                type: "success",
                message: this.$t('global.DeleteSuccess')
              });
              this.query({pageSize:10,pageNum:1});
            } else {
              this.$message({
                type: "fail",
                message: this.$t('global.DeleteFailure')
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: this.$t('global.DeleteCanceled')
          });
        });
    }
  }
};
</script>
