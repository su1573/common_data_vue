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
    
        <el-table-column prop="trusteecode" :label="$t('AppMain.Trusteecode')" width="180" />
        <el-table-column prop="trusteename" :label="$t('AppMain.Trusteename')" width="180" />
        <el-table-column prop="shortname" :label="$t('AppMain.Shortname')" width="180" />
        <el-table-column prop="certificateno" :label="$t('AppMain.Certificateno')" width="180" />
        <el-table-column prop="corporation" :label="$t('AppMain.Corporation')" width="180" />
        <el-table-column prop="rgtmoney" :label="$t('AppMain.Rgtmoney')" width="180" />
        <el-table-column prop="rgtaddress" :label="$t('AppMain.Rgtaddress')" width="180" />
        <el-table-column prop="aicregistration" :label="$t('AppMain.Aicregistration')" width="180" />
        <el-table-column prop="grpnature" :label="$t('AppMain.Grpnature')" width="180" />
        <el-table-column prop="grptype" :label="$t('AppMain.Grptype')" width="180" />
        <el-table-column prop="validstartdate" :label="$t('AppMain.Validstartdate')" width="180" />
        <el-table-column prop="validexpdate" :label="$t('AppMain.Validexpdate')" width="180" />
        <el-table-column prop="grpaddress" :label="$t('AppMain.Grpaddress')" width="180" />
        <el-table-column prop="zipcode" :label="$t('AppMain.Zipcode')" width="180" />
        <el-table-column prop="phone" :label="$t('AppMain.Phone')" width="180" />
        <el-table-column prop="grpurl" :label="$t('AppMain.Grpurl')" width="180" />
        <el-table-column prop="upmngcode" :label="$t('AppMain.Upmngcode')" width="180" />
        <el-table-column prop="topmngcode" :label="$t('AppMain.Topmngcode')" width="180" />
        <el-table-column prop="childflag" :label="$t('AppMain.Childflag')" width="180" />
        <el-table-column prop="currency" :label="$t('AppMain.Currency')" width="180" />
        <el-table-column prop="remark" :label="$t('AppMain.Remark')" width="180" />
        <el-table-column prop="status" :label="$t('AppMain.Status')" width="180" />
        <el-table-column prop="managecom" :label="$t('AppMain.Managecom')" width="180" />
        <el-table-column prop="operatecom" :label="$t('AppMain.Operatecom')" width="180" />
        <el-table-column prop="operator" :label="$t('AppMain.Operator')" width="180" />
        <el-table-column prop="makedate" :label="$t('AppMain.Makedate')" width="180" />
        <el-table-column prop="maketime" :label="$t('AppMain.Maketime')" width="180" />
        <el-table-column prop="modifyoperator" :label="$t('AppMain.Modifyoperator')" width="180" />
        <el-table-column prop="modifydate" :label="$t('AppMain.Modifydate')" width="180" />
        <el-table-column prop="modifytime" :label="$t('AppMain.Modifytime')" width="180" />
        <el-table-column prop="cifid" :label="$t('AppMain.Cifid')" width="180" />
        <el-table-column prop="trusteeid" :label="$t('AppMain.Trusteeid')" width="180" />
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
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Trusteecode')">
          <el-input v-model="form.trusteecode" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Trusteename')">
          <el-input v-model="form.trusteename" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Shortname')">
          <el-input v-model="form.shortname" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Certificateno')">
          <el-input v-model="form.certificateno" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Corporation')">
          <el-input v-model="form.corporation" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Rgtmoney')">
          <el-input v-model="form.rgtmoney" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Rgtaddress')">
          <el-input v-model="form.rgtaddress" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Aicregistration')">
          <el-input v-model="form.aicregistration" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Grpnature')">
          <el-input v-model="form.grpnature" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Grptype')">
          <el-input v-model="form.grptype" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Validstartdate')">
          <el-input v-model="form.validstartdate" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Validexpdate')">
          <el-input v-model="form.validexpdate" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Grpaddress')">
          <el-input v-model="form.grpaddress" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Zipcode')">
          <el-input v-model="form.zipcode" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Phone')">
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Grpurl')">
          <el-input v-model="form.grpurl" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Upmngcode')">
          <el-input v-model="form.upmngcode" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Topmngcode')">
          <el-input v-model="form.topmngcode" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Childflag')">
          <el-input v-model="form.childflag" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Currency')">
          <el-input v-model="form.currency" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Remark')">
          <el-input v-model="form.remark" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Status')">
          <el-input v-model="form.status" autocomplete="off" />
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
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Cifid')">
          <el-input v-model="form.cifid" autocomplete="off" />
        </el-form-item>
                <el-form-item :label-width="formLabelWidth" :label="$t('AppMain.Trusteeid')">
          <el-input v-model="form.trusteeid" autocomplete="off" />
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
import trusteeApi from "@/api/biz/manager/trustee/trustee.js";

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
                {label: "Trusteecode",
        value: "trusteecode",
        type: "undefined"},
                        {label: "Trusteename",
        value: "trusteename",
        type: "undefined"},
                        {label: "Shortname",
        value: "shortname",
        type: "undefined"},
                        {label: "Certificateno",
        value: "certificateno",
        type: "undefined"},
                        {label: "Corporation",
        value: "corporation",
        type: "undefined"},
                        {label: "Rgtmoney",
        value: "rgtmoney",
        type: "undefined"},
                        {label: "Rgtaddress",
        value: "rgtaddress",
        type: "undefined"},
                        {label: "Aicregistration",
        value: "aicregistration",
        type: "undefined"},
                        {label: "Grpnature",
        value: "grpnature",
        type: "undefined"},
                        {label: "Grptype",
        value: "grptype",
        type: "undefined"},
                        {label: "Validstartdate",
        value: "validstartdate",
        type: "date"},
                        {label: "Validexpdate",
        value: "validexpdate",
        type: "date"},
                        {label: "Grpaddress",
        value: "grpaddress",
        type: "undefined"},
                        {label: "Zipcode",
        value: "zipcode",
        type: "undefined"},
                        {label: "Phone",
        value: "phone",
        type: "undefined"},
                        {label: "Grpurl",
        value: "grpurl",
        type: "undefined"},
                        {label: "Upmngcode",
        value: "upmngcode",
        type: "undefined"},
                        {label: "Topmngcode",
        value: "topmngcode",
        type: "undefined"},
                        {label: "Childflag",
        value: "childflag",
        type: "undefined"},
                        {label: "Currency",
        value: "currency",
        type: "undefined"},
                        {label: "Remark",
        value: "remark",
        type: "undefined"},
                        {label: "Status",
        value: "status",
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
                        {label: "Cifid",
        value: "cifid",
        type: "undefined"},
                        {label: "Trusteeid",
        value: "trusteeid",
        type: "undefined"}              ],
      form: { 
                trusteecode: "",
                trusteename: "",
                shortname: "",
                certificateno: "",
                corporation: "",
                rgtmoney: "",
                rgtaddress: "",
                aicregistration: "",
                grpnature: "",
                grptype: "",
                validstartdate: "",
                validexpdate: "",
                grpaddress: "",
                zipcode: "",
                phone: "",
                grpurl: "",
                upmngcode: "",
                topmngcode: "",
                childflag: "",
                currency: "",
                remark: "",
                status: "",
                managecom: "",
                operatecom: "",
                operator: "",
                makedate: "",
                maketime: "",
                modifyoperator: "",
                modifydate: "",
                modifytime: "",
                cifid: "",
                trusteeid: "",
                p_end_flag: ""
      },
      queryForm: {
                trusteecode: "",
                trusteename: "",
                shortname: "",
                certificateno: "",
                corporation: "",
                rgtmoney: "",
                rgtaddress: "",
                aicregistration: "",
                grpnature: "",
                grptype: "",
                validstartdate: "",
                validexpdate: "",
                grpaddress: "",
                zipcode: "",
                phone: "",
                grpurl: "",
                upmngcode: "",
                topmngcode: "",
                childflag: "",
                currency: "",
                remark: "",
                status: "",
                managecom: "",
                operatecom: "",
                operator: "",
                makedate: "",
                maketime: "",
                modifyoperator: "",
                modifydate: "",
                modifytime: "",
                cifid: "",
                trusteeid: "",
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
      trusteeApi.list(arr, result => {
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
        trusteeApi.update(arr, result => {
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
            trusteecode: row.trusteecode
          };
          trusteeApi.remove(arr, result => {
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
