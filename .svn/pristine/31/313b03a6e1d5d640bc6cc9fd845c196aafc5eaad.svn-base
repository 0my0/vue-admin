<template>
  <div class="app-container">
    <el-row>
      <el-button type="primary" icon="el-icon-plus" @click="handleAddCurrency">添加货币</el-button>
      <el-button type="primary" icon="el-icon-edit" @click="installCountry">一键修改</el-button>
<!--      <el-button type="primary" icon="el-icon-refresh" >修改记录</el-button>-->
      <el-dialog title="添加/修改人员" :visible.sync="dialogEditFormVisible" :title="dialogType==='add'?'添加站点':'修改站点'">
        <el-form :model="editCurrencyForm">
          <el-form-item label="货币代码" :label-width="formLabelWidth">
            <el-input v-model="editCurrencyForm.country_name" autocomplete="off" :disabled="dialogType==='edit'? true: false"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="editCurrencyForm.country" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位" :label-width="formLabelWidth">
            <el-input v-model="editCurrencyForm.stamp" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="汇率" :label-width="formLabelWidth">
            <el-input-number v-model="editCurrencyForm.exchange_rate" controls-position="right" :min="0.0000"></el-input-number>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEditFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createCountry">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>

    <el-table
      :data="tableData"
      border
      @row-contextmenu="rightClick"
      :default-sort = "{prop: 'currency_code', order: 'descending'}"
      style="width: 100%">
      <el-table-column
        prop="country_name"
        label="货币代码"
       >
      </el-table-column>
      <el-table-column
        prop="country"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="stamp"
        label="单位">
      </el-table-column>
      <el-table-column
        prop="exchange_rate"
        label="汇率">
      </el-table-column>
    </el-table>
    <ul v-show="optionVisible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="handleEditCurrency">修改货币信息</li>
      <li @click="deleteCountry">删除货币信息</li>
    </ul>
  </div>
</template>

<script>
  import SystemManager from '@/api/system-manager'
  import {getToken} from '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  export default {
    name: 'currencyExchangeRate',
    data() {
      return{
        tableData: [],
        token: getToken(),
        dialogEditFormVisible: false,
        optionVisible: false,
        dialogType: 'add',
        formLabelWidth: '120px',
        countryId: '',
        left: '0px',
        top: '0px',
        editCurrencyForm: {
          country_name: '',
          country: '',
          stamp: '',
          exchange_rate: '0.0000'
        }
      }
    },
    methods: {
      getCountryIndex() {
        SystemManager.getCountryIndex(this.token).then(data => {
          this.tableData = data.data
          this.countryId = data.data.country_id
        })
      },
      createCountry() {
        const postData = toJsonData.JsonData(this.editCurrencyForm);
        const isAdd = this.dialogType === 'add'
        if(isAdd) {
          SystemManager.createCountry(postData, this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.getCountryIndex()
            this.closeDialog();
          })
        }else{
          SystemManager.editCountry(postData,this.countryId,this.token).then(data => {
            this.$message({
              message: data.data.log,
              type: 'success'
            })
            this.getCountryIndex()
            this.closeDialog();
          })
        }
        this.editCurrencyForm={
          country_name: '',
          country: '',
          stamp: '',
          exchange_rate: '0.0000'
        }
      },
      deleteCountry() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          SystemManager.deleteCountry(this.countryId, this.token).then(data => {
            this.$message({
              message:data.data.log,
              type: 'success'
            })
            this.getCountryIndex();
            this.closeDialog();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleAddCurrency() {
        this.dialogType = 'add';
        this.dialogEditFormVisible = true;
      },
      installCountry(){
        SystemManager.installCountry(this.token).then(data => {
          this.$message({
            message: data.data.log,
            type: 'success'
          })
          this.getCountryIndex()
        })
      },
      handleEditCurrency() {
        this.dialogType = 'edit';
        this.dialogEditFormVisible = true;
      },
      closeDialog() {
        this.dialogEditFormVisible = false;
      },
      closeMenu() {
        this.optionVisible = false
      },
      rightClick(row, column, e) {
        e.preventDefault();
        this.publicMenu(e)
        console.log(row)
        this.countryId = row.country_id
        this.editCurrencyForm={
          country_name: row.country_name,
          country: row.country,
          stamp:  row.stamp,
          exchange_rate: row.exchange_rate
        }
        this.optionVisible = true
      },
      publicMenu(e){
        const menuMinWidth = 105
        const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
        const offsetWidth = this.$el.offsetWidth // container width
        const maxLeft = offsetWidth - menuMinWidth // left boundary
        const left = e.clientX - offsetLeft + 15 // 15: margin right
        if (left > maxLeft) {
          this.left = maxLeft
        } else {
          this.left = left
        }
        this.top = e.pageY - 80
      },
    },
    created() {
      this.getCountryIndex();
    },
    watch: {
      optionVisible(value){
        if(value) {
          document.body.addEventListener('click', this.closeMenu)
        }else{
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    }
  }
</script>
<style scoped>
  .el-row{
    margin-bottom: 30px;
  }
</style>
