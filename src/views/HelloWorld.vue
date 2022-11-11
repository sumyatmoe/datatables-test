<script setup>
// import packages
import { ref } from "vue";
import { onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import DataTable from "datatables.net-vue3";
import DataTableBs4 from "datatables.net-bs4";
import "datatables.net-select-bs4";
import SelectBs4 from "datatables.net-select-bs4";

// import Javascriptファイル
//import Com from "../assets/js/common.js";
import DtOptions from "../components/Students/js/Students.js";

// packages activation
DataTable.use(DataTableBs4);
DataTable.use(SelectBs4);

//console.log("DataTables Test");

</script>

<template>
  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card card-lightblue">
            <div class="card-header">
              <h3 class="card-title">Students List</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <DataTable :options="DtOptions.options" :columns="DtOptions.columns" :data="DtOptions.data_list" class="table table-bordered table-hover table-striped table-sm" width="100%">
                <thead class="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                  </tr>
                </thead>
              </DataTable>
              <!--/table-->
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
  <!-- /.content -->
</template>

<style>
.table-hover tbody tr:hover td {
  background-color: powderblue;
}
.card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}
</style>
