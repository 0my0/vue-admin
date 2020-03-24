<template>
  <div class="app-container">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="showDialog">添加支付方式</el-button>
      <el-dialog title="添加/修改人员" :visible.sync="dialogFormVisible" :title="dialogType==='add'?'添加站点':'修改站点'">
        <el-form :model="editPaymentForm">
          <el-form-item label="支付名称" :label-width="formLabelWidth">
            <el-input v-model="editPaymentForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Code" :label-width="formLabelWidth">
            <el-input v-model="editPaymentForm.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否显示" :label-width="formLabelWidth">
            <el-checkbox  v-model="editPaymentForm.is_open"></el-checkbox>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createPaymentMethod">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="code"
        label="Code">
      </el-table-column>
      <el-table-column
        prop="is_open"
        label="是否启用">
      </el-table-column>

      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <el-button type="primary" @click="editPaymentMethod(scope.row)">编辑</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
  import SystemManager from '@/api/system-manager';
  import { getToken} from  '@/utils/auth';
  import toJsonData from '@/api/jsonformdata'
  export default {
    name:'payment-method-config',
    data() {
      return{
        tableData:[],
        token: getToken(),
        dialogFormVisible: false,
        formLabelWidth:'120px',
        editPaymentForm:{
          name:'',
          code:'',
          is_open:false
        },
        dialogType:'add',
        payment_id:''
      }
    },
    methods: {
      getPaymentMethod() {
        SystemManager.getPaymentMethod(this.token).then(data => {
          this.tableData = data.data;
        })
      },
      showDialog() {
        this.editPaymentForm={
          name:'',
          code:'',
          is_open: false
        }
        this.dialogFormVisible = true;
        this.dialogType = 'add'
      },
      closeDialog(){
        this.dialogFormVisible = false;
      },
      createPaymentMethod() {
        const postData = toJsonData.JsonData(this.editPaymentForm);
        if(this.dialogType == 'add'){
          SystemManager.createPaymentMethod(postData,this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.closeDialog()
            this.getPaymentMethod();

          }).catch(error=> {
            console.log(error)
          })
        }else{
          SystemManager.editPaymentMethod(this.payment_id,postData, this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.closeDialog()
            this.getPaymentMethod();
          }).catch(error=> {
            console.log(error)
          })
        }

      },
      editPaymentMethod(row) {
        this.dialogType = 'edit';
        this.dialogFormVisible = true;
        this.payment_id = row.payment_id;
        var isOpen = false;

        if(row.is_open == 'true') {
          isOpen = true
        }else{
          isOpen = false
        }
        this.editPaymentForm={
          name:row.name,
          code:row.code,
          is_open: isOpen
        }
      }
    },
    created() {
      this.getPaymentMethod();
    }
  }
</script>
<style>
  .el-row{
    margin-bottom: 30px;
  }
</style>
