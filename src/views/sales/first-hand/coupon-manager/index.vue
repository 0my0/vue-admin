<template>
  <div>
    <el-row>
      <el-button type="primary" @click="showDialog" icon="el-icon-plus" >添加优惠券</el-button>
      <el-dialog title="优惠券信息-销售一手" :visible.sync="dialogFormVisible">
        <el-form :model="couponForm">
          <el-form-item label="站点" :label-width="formLabelWidth">
            <el-select v-model="couponForm.site_id" placeholder="选择站点" @change="addChangeCoupon">
              <el-option :label="val.site_name" :value="val.site_id" v-for="(val,key) in siteData"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="游戏"  :label-width="formLabelWidth" >
            <el-checkbox @change="handleCheckAllChange" v-model="checked">全选</el-checkbox>
            <el-checkbox-group v-model="couponForm.game_ids">
              <el-checkbox v-for="(val, key) in gameData" :label="val.game_id" :value="val.game_id" >{{val.title}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="优惠方式" :label-width="formLabelWidth">
            <el-select placeholder="选择优惠方式" v-model="couponForm.coupon_type" @change="changeCouponType">
              <el-option :label="val" v-for="(val,key) in couponType" :value="val"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="优惠券标题" :label-width="formLabelWidth">
            <el-input v-model="couponForm.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="Code" :label-width="formLabelWidth" v-if="isCouponHidden">
            <el-input v-model="couponForm.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="折扣" :label-width="formLabelWidth">
            <el-input v-model="couponForm.price" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="数量" :label-width="formLabelWidth" v-if="!isCouponHidden">
            <el-input-number v-model="couponForm.num" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="开始时间" :label-width="formLabelWidth" v-if="isCouponHidden">
            <el-date-picker
              v-model="couponForm.stime"
              type="datetime"
              placeholder="开始时间"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptionsStart"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间" :label-width="formLabelWidth" v-if="isCouponHidden">
            <el-date-picker
              v-model="couponForm.ltime"
              type="datetime"
              placeholder="结束时间"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              :picker-options="pickerOptionsEnd">
            </el-date-picker>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addCoupon">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="站点">
          <el-select v-model="formInline.site_id" placeholder="选择站点" @change="changeCoupon">
            <el-option :label="val.site_name" :value="val.site_id" v-for="(val,key) in siteData"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="游戏">
          <el-select v-model="formInline.game_id" placeholder="选择游戏">
            <el-option :label="val.title" :value="val.game_id" v-for="(val,key) in gameData"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
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
          label="网站名称">
        </el-table-column>
        <el-table-column
          prop="game_name"
          label="游戏名称">
        </el-table-column>
        <el-table-column
          prop="title"
          label="优惠券标题">
        </el-table-column>
        <el-table-column
          prop="code"
          label="Code">
        </el-table-column>
        <el-table-column
          prop="type"
          label="优惠方式">
        </el-table-column>
        <el-table-column
          prop="price"
          label="优惠百分比">
        </el-table-column>
        <el-table-column
          prop="stime"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="ltime"
          label="结束时间">
        </el-table-column>

        <el-table-column
          prop="admin_name"
          label="创建人">
        </el-table-column>
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="primary" @click="deleteCoupon(scope.row.coupon_id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import SystemManager from  '@/api/system-manager'
  import Sales from '@/api/sales'
  import { getToken} from  '@/utils/auth'
  import toJsonData from '@/api/jsonformdata'
  export default {
    name: 'coupon-manager',
    data(){
      return{
        formInline: {
          site_id: '',
          game_id:''
        },
        formLabelWidth:'120px',
        siteData: [],
        gameData: [],
        sequence: 1,
        tableData: [],
        couponForm: {
          site_id: '',
          game_ids: [],
          title: '',
          code: '',
          price:'',
          stime:'',
          ltime:'',
          num:'',
          coupon_type:''
        },
        gameIds:[],
        checked:false,
        dialogFormVisible: false,
        dialogAddFormVisible:false,
        dialogPersonFormVisible: false,
        dialogPermissionVisible:false,
        couponType: ['一次性优惠券', '多次优惠券'],
        isCouponHidden: true,
        token: getToken(),
        pickerOptionsStart: {
          disabledDate:time => {
            const endDateVal = new Date(this.couponForm.ltime).getTime()
            if (endDateVal) {
              return time.getTime() > endDateVal - 0
            }
            return  time.getTime() < Date.now()-8.64e7;
          }
        },
        pickerOptionsEnd: {
          disabledDate: time => {
            const beginDateVal = new Date(this.couponForm.stime).getTime()
            if (beginDateVal) {
              return time.getTime() < beginDateVal - 0
            }
          }
        }
      }
    },
    methods: {
      getSiteIndex() {
        SystemManager.getSiteIndex(this.token).then(data => {
          this.siteData=data.data
        })
      },
      showDialog() {
        this.dialogFormVisible = true;
        this.couponForm= {
          site_id: '',
            game_ids: [],
            title: '',
            code: '',
            price:'',
            stime:'',
            ltime:'',
            num:'',
            coupon_type:'多次优惠券'
        }
      },
      handleCheckAllChange(val) {
        this.couponForm.game_ids = [];
        if(val == true){
          this.gameData.forEach(item => {
            this.couponForm.game_ids.push(item.game_id)
          })
        }else{
          this.couponForm.game_ids = [];
        }
      },
      getGameIndex() {
        this.gameIds = [];
        SystemManager.getGameIndex(this.token).then(data => {
          this.gameData=data.data
        })
      },
      onSubmit() {
        Sales.searchCoupon(this.formInline.site_id, this.formInline.game_id,this.token).then(data=>{
          this.tableData=data.data
        })
      },

      addCoupon(){
        const postData = toJsonData.JsonData(this.couponForm);
        Sales.addCoupon(postData, this.token).then(data=> {
          this.$message({
            message: data.data.log,
            type: 'success'
          })
          this.getCouponIndex();
          this.closeDialog();
        }).catch(error => {
          console.log(error)
        })
      },
      closeDialog() {
        this.dialogFormVisible = false;
      },
      deleteCoupon(coupon_id) {
        Sales.deleteCoupon(coupon_id, this.token).then(data => {
          this.$message({
            message: data.data.log,
            type: 'success'
          })
          this.getCouponIndex();
        }).catch(error => {
          console.log(error)
        })

      },
      changeCoupon() {
        this.formInline.game_id='';
        Sales.changeCoupon(this.formInline.site_id, this.token).then(data => {
          this.gameData=data.data
        })
      },
      addChangeCoupon() {
        this.couponForm.game_id='';
        this.checked = false;
        this.couponForm.game_ids = [];
        Sales.changeCoupon(this.couponForm.site_id, this.token).then(data => {
          this.gameData=data.data
        })
      },
      changeCouponType(val){
       this.couponForm.code='';
        this.couponForm.stime='';
        this.couponForm.ltime='';
        this.couponForm.num='';
        if(val == '一次性优惠券'){
          this.isCouponHidden = false
        }else{
          this.isCouponHidden = true
        }
      },
      getCouponIndex() {
        Sales.getCouponIndex(this.token).then(data=> {
          this.tableData = data.data;
        })
      }
    },
    created() {
      this.getSiteIndex();
      this.getGameIndex();
      this.getCouponIndex();
      this.couponForm.coupon_type = this.couponType[1];
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
</style>
