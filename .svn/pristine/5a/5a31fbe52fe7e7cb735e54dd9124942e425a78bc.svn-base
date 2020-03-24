<template>
  <div>
<!--    <el-row>-->
<!--      <el-button type="primary" @click="showDialog" icon="el-icon-plus" >添加客户</el-button>-->
<!--    </el-row>-->
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" @submit.native.prevent>
        <el-form-item label="站点">
          <el-select v-model="formInline.site_id" placeholder="选择站点" @change="changeSite">
            <el-option :label="val.site_name" :value="val.site_id" v-for="(val,key) in siteData"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱">
         <el-input  v-model="formInline.email" autocomplete="off" @keyup.enter.native="searchSiteUser"></el-input>
        </el-form-item>
        <el-form-item label="全名">
          <el-input  v-model="formInline.firstname" autocomplete="off" @keyup.enter.native="searchSiteUser"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input  v-model="formInline.mobile" autocomplete="off" @keyup.enter.native="searchSiteUser"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchSiteUser" @keyup.enter.native="searchSiteUser">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[50, 100, 200, 500,1000]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
    <div>
      <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="序列"
          prop="id">
        </el-table-column>
        <el-table-column
          prop="site_name"
          label="站点">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          prop="firstname"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="loginip"
          label="最后登录ip">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="have_price"
          label="购买金额">
        </el-table-column>
        <el-table-column
          prop="lastlogin"
          label="最后登录时间">
        </el-table-column>
        <el-table-column
          prop="dateline"
          label="创建时间">
        </el-table-column>

        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="primary" @click="showDialog(scope.row.uid)">修改密码</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.passwd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="editPass">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
  import SystemManager from  '@/api/system-manager'
  import Sales from '@/api/sales'
  import { getToken} from  '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  export default {
    name:'site-user-manager',
    data() {
      return {
        dialogFormVisible: false,
        formLabelWidth:'120px',
        formInline: {
          site_id: '',
          email:'',
          firstname: '',
          mobile:''
        },
        form:{
          passwd:''
        },
        siteData: [],
        tableData:[],
        currentPage:1,
        token: getToken(),
        totalCount: 1,
        pageSize:50,
        uid:''
      }
    },
    methods: {
      showDialog(id) {
        this.form.passwd='';
        this.dialogFormVisible = true;
        this.uid = id;
      },
      getSiteIndex() {
        SystemManager.getSiteIndex(this.token).then(data => {
          this.siteData=data.data
        })
      },
      editPass(){
        const postData = toJsonData.JsonData(this.form);
        Sales.editPass(postData,this.uid,this.token).then(data=> {
         this.$message({
           message: data.data.log,
           type: 'success'
         })
          this.getSiteUser();
          this.closeDialog();
        }).catch(error => {
          console.log(error)
        })
      },
      closeDialog() {
        this.dialogFormVisible = false;
      },
      searchSiteUser(){
        const postData = toJsonData.JsonData(this.formInline);
        this.currentPage = 1;
        Sales.searchSiteUser(postData, this.token).then(data => {
          this.tableData = data.data
          this.totalCount = parseInt(data.count);
        })
      },
      searchLimitSite(val) {
        const postData = toJsonData.JsonData(this.formInline);
        Sales.searchLimitSite(postData,val,this.currentPage,this.token).then(data => {
          this.tableData = data.data;
          this.totalCount = parseInt(data.count)
        })
      },
      searchPageSite(val) {
        const postData = toJsonData.JsonData(this.formInline);
        Sales.searchLimitSite(postData,this.pageSize,val,this.token).then(data => {
          this.tableData = data.data;
          this.totalCount = parseInt(data.count)
        })
      },
      getSiteUser(){
        Sales.getSiteUser(this.token).then(data => {
          this.tableData = data.data;
          this.totalCount = parseInt(data.count)
        })
      },
      changeSite() {

      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.searchLimitSite(val);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.searchPageSite(val);
      }
    },
    created() {
      this.getSiteIndex();
      this.getSiteUser();
    },

  }
</script>

<style>
  .el-table .cell{
    text-align: center;
  }
  .el-row{
    margin-bottom: 30px;
  }
  .el-pagination{
    margin-bottom: 20px;
  }
</style>
