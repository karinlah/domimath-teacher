<template>
  <div class="row" >
    <div class="col-md-12" style="text-align:right">
      <p>ניתן לבצע פילוח לפי מקצוע\תת מקצוע\שם תלמיד\רמה</p>
    </div>
    <div class="col-md-12 card">
      <div class="card-content row">
        <div class="col-sm-6">
          <el-select
            class="select-default"
            v-model="pagination.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in pagination.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <label>
              <input type="search" class="form-control input-sm" placeholder="חפש" v-model="searchQuery" aria-controls="datatables">
            </label>
          </div>
        </div>
        <div class="col-sm-12">
          <el-table class="table-striped"
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
            <el-table-column
              :min-width="120"
              fixed="right"
              label="הודעה לתלמיד">
              <template slot-scope="props">
                <a class="btn btn-simple btn-xs btn-info btn-icon ti-comments" @click="sendMsg(props.$index, props.row)"></a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="col-sm-6 pagination-info">
          <p class="category"> {{from + 1}} מ {{to}} עד {{total}} רשומות</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="pagination.total">
          </p-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import swal from 'sweetalert2'
  import {Table, TableColumn, Select, Option} from 'element-ui'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import users from './users'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    components: {
      PPagination
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        pagination: {
          perPage: 5,
          currentPage: 1,
          perPageOptions: [5, 10, 25, 50],
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['name', 'topic', 'level','subtopic'],
        tableColumns: [
          {
            prop: 'name',
            label: 'שם',
            minWidth: 150
          },
          {
            prop: 'topic',
            label: 'נושא',
            minWidth: 200
          },
          {
            prop: 'subtopic',
            label: 'תת נושא',
            minWidth: 100
          },
          {
            prop: 'level',
            label: 'רמה',
            minWidth: 100
          },
          {
            prop: 'total_score',
            label: 'ציון כולל בנושא',
            minWidth: 120
          }
        ],
        tableData: users
      }
    },
    methods: {
      sendMsg (index, row) {
        swal({
          title: `שלח הודעה ל${row.name}`,
          confirmButtonText: 'שלח',
          buttonsStyling: false,
          html: '<div class="form-group">' +
          '<textarea class="form-control" placeholdr="הכנס את שאלתך" rows="5"></textarea>'+
          '</div>',
          confirmButtonClass: 'btn btn-wd btn-sm btn-success',
          cancelButtonClass: 'btn btn-wd btn-sm btn-danger',
          showCancelButton: true
        })
      },
      handleLike (index, row) {
        alert(`Your want to like ${row.name}`)
      },
      handleEdit (index, row) {
        alert(`Your want to edit ${row.name}`)
      },
      handleDelete (index, row) {
        let indexToDelete = this.tableData.findIndex((tableRow) => tableRow.id === row.id)
        if (indexToDelete >= 0) {
          this.tableData.splice(indexToDelete, 1)
        }
      }
    }
  }
</script>
<style>
</style>
