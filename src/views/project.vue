<template>
    <div class="project">
        <!--<fieldset>-->
            <!--<legend>列表</legend>-->
        <!--</fieldset>-->
        <el-card shadow="hover" class="card-search">
            <header slot="header">搜索</header>
            <el-form inline :model="formSearch" size="mini" class="form-inline-search">
                <el-form-item label="项目名称">
                    <el-input v-model="formSearch.name" placeholder="项目名称" clearable></el-input>
                </el-form-item>
                <el-form-item label="项目单位">
                    <el-input v-model="formSearch.name" placeholder="立项单位" clearable></el-input>
                </el-form-item>
                <el-form-item label="项目类别">
                    <el-select v-model="formSearch.type" placeholder="请选择" clearable>
                        <el-option label="出国交换生" value="shanghai"></el-option>
                        <el-option label="出境交换生" value="beijing"></el-option>
                        <el-option label="出国游学项目" value="shanghai"></el-option>
                        <el-option label="出境游学项目" value="beijing"></el-option>
                        <el-option label="国际会议" value="shanghai"></el-option>
                        <el-option label="其他项目" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="经费来源">
                    <el-select v-model="formSearch.type" placeholder="请选择" clearable>
                        <el-option label="出国交换生" value="shanghai"></el-option>
                        <el-option label="出境交换生" value="beijing"></el-option>
                        <el-option label="出国游学项目" value="shanghai"></el-option>
                        <el-option label="出境游学项目" value="beijing"></el-option>
                        <el-option label="国际会议" value="shanghai"></el-option>
                        <el-option label="其他项目" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-date-picker v-model="formSearch.date" type="date"></el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-date-picker v-model="formSearch.date" type="date"></el-date-picker>
                </el-form-item>
                <el-form-item label="项目天数">
                    <el-row>
                        <el-col :span="10"><el-input clearable></el-input></el-col>
                        <el-col :span="4">—</el-col>
                        <el-col :span="10"><el-input clearable></el-input></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card shadow="hover">
            <el-tabs v-model="formSearch.state" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                    <el-table :data="tableData" size="medium" border>
                        <el-table-column prop="name" label="项目名称" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="name" label="立项单位" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="name" label="经费来源" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="type" label="项目类别" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="time" label="项目起止时间" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="level" label="天数" width="50" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="level" label="项目负责人" width="80" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="level" label="联系电话" width="100" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="number" label="名额限制" width="50" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column label="状态" width="80" align="center">
                            <template slot-scope="scope">
                                <el-tag size="medium">{{ scope.row.state }}</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="待审批" name="second">
                    <el-table :data="tableData" size="medium" border>
                        <el-table-column prop="name" label="项目名称" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="name" label="立项单位" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="name" label="经费来源" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="type" label="项目类别" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="time" label="项目起止时间" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="level" label="天数" width="50" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="level" label="项目负责人" width="80" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="level" label="联系电话" width="100" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column prop="number" label="名额限制" width="50" show-overflow-tooltip align="center"></el-table-column>
                        <el-table-column label="状态" width="80" align="center">
                            <template slot-scope="scope">
                                <el-tag size="medium">{{ scope.row.state }}</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="已通过" name="fourth">

                </el-tab-pane>
                <el-tab-pane label="未通过" name="5">

                </el-tab-pane>
                <el-tab-pane label="已发布" name="third">

                </el-tab-pane>
            </el-tabs>
            <el-pagination class="pagination"
                           @current-change="handleCurrentChange"
                           :current-page="1"
                           @size-change="handleSizeChange"
                           :page-sizes="[10, 20, 50, 100, 200, 500]"
                           :page-size="10"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="1000">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
  export default {
    name: "project",
    data() {
      return {
        formSearch: {
          state:'first',
          name: '',
          type: ''
        },
        tableData: [
          {id:'1001',
          name: '项目1项目1项目1项目1项目1',
          type: '出国交换生',
          level: '本科',
          time: '2018-10-10',
          number: 10,
          state:'待审批',
          stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
          {id:'1001',
            name: '项目1项目1项目1项目1项目1',
            type: '出国交换生',
            level: '本科',
            time: '2018-10-10',
            number: 10,
            state:'待审批',
            stateTag:''},
        ]
      }
    },
    computed: {
      role () {
        return this.$store.state.role
      }
    },
    methods: {
      //tab切换
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //搜索
      search() {
        console.log('search!');
      },
      //操作按钮
      handleBtn(index, row, handle){
        console.log(index,row);
        this.$confirm(handle+'该项目申请, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('等有数据再写跳转伪数据跳转麻烦且跟实际不符o(︶︿︶)o ');
        }).catch(() => {});
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss">
    .project{
        .el-badge__content.is-fixed{//标记位置
            top: 8px;
        }
        .el-tabs__header{//tab头部下margin
            margin-bottom: 25px;
        }
        @extend %width;
        .pagination{
            margin-top: 10px;
        }
    }
</style>