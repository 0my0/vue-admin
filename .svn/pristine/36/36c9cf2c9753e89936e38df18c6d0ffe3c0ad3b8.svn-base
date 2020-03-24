<template>
  <div class="app-container">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="showDialog">添加邮件账号</el-button>
      <el-dialog :title="dialogType==='add'?'添加邮件帐号':'修改邮件帐号'" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="站点" :label-width="formLabelWidth">
            <el-select v-model="form.site_id" placeholder="选择站点" :disabled="dialogType==='edit'? true: false">
              <el-option :label="val.site_name" :value="val.site_id" v-for="(val,key) in siteData" ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SMTP服务器" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="form.smtp"></el-input>
          </el-form-item>
          <el-form-item label="端口" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="form.port"></el-input>
          </el-form-item>
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="发件人" :label-width="formLabelWidth">
            <el-input autocomplete="off" v-model="form.from"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createMail">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="站点名称"
        prop="site_name">
      </el-table-column>
      <el-table-column
        label="SMTP服务器"
        prop="smtp">
      </el-table-column>
      <el-table-column
        label="端口号"
        prop="port">
      </el-table-column>
      <el-table-column
        label="帐号"
        prop="username">
      </el-table-column>
      <el-table-column
        label="显示名称"
        prop="from">
      </el-table-column>
      <el-table-column
        label="密码"
        prop="password">
      </el-table-column>
      <el-table-column
        label="创建人"
        prop="admin_name">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="dateline">
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button type="primary" @click="editMail(scope.row)">修改</el-button>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
  import SystemManager from  '@/api/system-manager'
  import { getToken} from  '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  export default {
    name:'mail-account',
    data() {
     return{
       tableData: [],
       token: getToken(),
       dialogFormVisible: false,
       formLabelWidth:'120px',
       siteId:'',
       siteData:[],
       dialogType:'',
       form: {
         site_id:'',
         smtp:'',
         port:'',
         username:'',
         password:'',
         from:''
       }
     }
    },
    methods: {
      getMailAccountIndex() {
        SystemManager.getMailAccountIndex(this.token).then(data => {
          this.tableData = data.data
        })
      },
      getSiteIndex() {
        SystemManager.getSiteIndex(this.token).then(data => {
          this.siteData=data.data
        })
      },
      createMail() {
        const postData = toJsonData.JsonData(this.form);
        if(this.dialogType== 'add') {
          SystemManager.createMail(postData,this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.closeDialog();
            this.getMailAccountIndex();
          }).catch(error => {
            console.log(error)
          })
        }else{
          SystemManager.editMail(postData,this.siteId,this.token).then(data=> {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.closeDialog();
            this.getMailAccountIndex();
          }).catch(error => {
            console.log(error)
          })
        }
      },
      editMail(row){
       console.log(row)
        this.siteId = row.site_id;
        this.form={
          site_id:row.site_id,
          smtp:row.smtp,
          port:row.port,
          username:row.username,
          password:row.password,
          from:row.from
        }
        this.dialogType = 'edit';
        this.dialogFormVisible = true;

      },
      showDialog() {
        this.form={
          site_id:'',
            smtp:'',
            port:'',
            username:'',
            password:'',
            from:''
        }
        this.dialogFormVisible = true;
        this.dialogType = 'add';

      },
      closeDialog() {
        this.dialogFormVisible = false;
      }
    },
    created() {
      this.getMailAccountIndex();
      this.getSiteIndex();
    }
  }
</script>
<style scoped>
  .el-row{
    margin-bottom: 30px;
  }
  .game-config{
    cursor: pointer;
    color: blue;
  }
  .el-table .cell{
    text-align: center !important;
  }
</style>
