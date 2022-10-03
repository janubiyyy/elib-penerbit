<template>
    <div>
    <b-card-group deck>
      <b-card >
<div class="row justify-content-md-center">
        <i class="bx bx-cart-add" style="font-size: 5rem; color: #ffc107"></i> 
        </div>
        
                <div class="mt-1">
<b-button block variant="outline-secondary"> {{loggedInUser}}
  Total Penjualan <i class="bx bx-right-arrow-circle" style="font-size: 1rem;"></i></b-button></div>
      </b-card>
  <b-card >
<div class="row justify-content-md-center">
        <i class="bx bx-paper-plane" style="font-size: 5rem; color: #42f5b0"></i> 
        </div>

              <div class="mt-1">
                <b-button block variant="outline-secondary">Total Pesanan <i class="bx bx-right-arrow-circle"
                    style="font-size: 1rem;"></i></b-button>
              </div>
              </b-card>
              <b-card>
                <div class="row justify-content-md-center">
                  <i class="bx bxs-group" style="font-size: 5rem; color: #17a2b8"></i>
                </div>
              
                <div class="mt-1">
                  <b-button block variant="outline-secondary">Total Pengunjung <i class="bx bx-right-arrow-circle"
                      style="font-size: 1rem;"></i></b-button>
                </div>
              </b-card>
<b-card>
  <div class="row justify-content-md-center">
    <i class="bx bxs-show" style="font-size: 5rem; color: #9c9c9c"></i>
  </div>

  <div class="mt-1">
    <b-button block variant="outline-secondary">Produk Dilihat<i class="bx bx-right-arrow-circle"
        style="font-size: 1rem;"></i></b-button>
  </div>
</b-card>

    
    
    </b-card-group>
    <br>
    <div class="row d-flex justify-content-center">
    <div class="col-md-6">
      <b-card bg-variant="light" text-variant="red" header="TOP 10 Pencarian Populer 2022" class="text-center  " >
        <div style=" width:570px; height:600px; ">
          <div>
            <b-table striped hover :items="items"></b-table>
          </div>
          <!-- <client-only>
              <line-chart :data="chartData"></line-chart>
          </client-only> -->
          </div>
    </b-card>

        
    
    </div>

    <div class="col-md-6">
       <b-card bg-variant="light" text-variant="red" header="TOP 5 Pencarian Buku Sering Dibaca 2022" class="text-center " >
  <div style=" width:570px; height:600px; ">
   <div>

  
    <!-- <div v-for="bar in bars" class="row mb-4">
      <div class="col-sm-3">{{ bar.name }}:</div>
      <div class="col-sm-12 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div> -->
<div>
    <b-list-group style="max-width: 570px;">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar rounded="sm" variant="info" src="https://cdn.eurekabookhouse.co.id/ebh/product/all/RETHINKING%20DISCIPLINE.jpg" class="mr-3" size="6rem"></b-avatar>
        <span class="mr-auto">RETHINKING DISCIPLINE </span>
        <b-badge variant="success"><i class='bx bxs-show '></i> 900</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
      <b-avatar rounded="sm" variant="info"
        src="https://cdn.eurekabookhouse.co.id/ebh/product/all/sister.jpg" class="mr-3" size="6rem">
      </b-avatar>
        <span class="mr-auto">SISTER FILLAH, YOULL NEVER BE ALONE</span>
        <b-badge  variant="success"><i class='bx bxs-show'></i> 830</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
      <b-avatar rounded="sm" variant="info" src="https://cdn.eurekabookhouse.co.id/ebh/product/all/sang%20pemanah.jpg" class="mr-3"
        size="6rem">
      </b-avatar>
        <span class="mr-auto">Sang Pemanah</span>
        <b-badge variant="success"><i class='bx bxs-show '></i> 700</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex align-items-center">
      <b-avatar rounded="sm" variant="info" src="https://cdn.eurekabookhouse.co.id/ebh/product/all/matahari.jpg"
        class="mr-3" size="6rem">
      </b-avatar>
        <span class="mr-auto">Matahari Terbenam</span>
        <b-badge  variant="success"><i class='bx bxs-show'></i> 650</b-badge>
      </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
        <b-avatar rounded="sm" variant="info" src="https://cdn.eurekabookhouse.co.id/ebh/product/all/KBK-(1068)%20TOKO%20KELONTONG%20SELATAN.jpg"
          class="mr-3" size="6rem">
        </b-avatar>
          <span class="mr-auto">TOKO KELONTONG SELATAN</span>
          <b-badge  variant="success"><i class='bx bxs-show'></i>  300</b-badge>
        </b-list-group-item>
   
    </b-list-group>
</div>
</div>

        </div>
  </b-card>
    </div>
      
    </div>
  <div class=" mt-3 row d-flex justify-content-center">
    <div class="col-md-6 d-flex justify-content-center">
      <b-card bg-variant="light" text-variant="red" header="Jenis Kelamin Pembeli" class="text-center  ">
        <div class="center" style=" width:370px; " >
          <client-only>
            <Pie-chart :data="chartData1"></Pie-chart>
          </client-only>
        </div>
        
      </b-card>
  
  
  
    </div>
  
    <!-- <div class="col-md-6">
      <b-card bg-variant="light"  header="Tipe Pembeli" class="text-center    ">
        <div style=" width:370px; align: center;   ">
          <client-only>
            <Pie-chart :data="chartData2"></Pie-chart>
          </client-only>
        </div>
      
      </b-card>
    </div> -->
  
  </div>
    
    
    
    </div>
  
</template>

<script>
import { mapGetters } from "vuex";
  export default {
      auth: 'auth',
      
      layout: "Menu",
      data() {
      return {
        items: [
          { No: 1, Keyword: 'Dickerson', Kali: '10' },
          { No: 2, Keyword: 'Larsen', Kali: '15' },
          { No: 3, Keyword: 'Geneva', Kali: '18' },
          { No: 4, Keyword: 'Jami', Kali: '5' },
          { No: 5, Keyword: 'Dickerson', Kali: '10' },
          { No: 6, Keyword: 'Larsen', Kali: '15' },
          { No: 7, Keyword: 'Geneva', Kali: '18' },
          { No: 8 , Keyword: 'Jami', Kali: '5' },
          { No: 9, Keyword: 'Jami', Kali: '5' },
          { No: 10, Keyword: 'Jami', Kali: '5' }
        ],
        chartData: {
          datasets: [{
            backgroundColor: "#87b7ff",
            label: 'Penjualan',
            data: [10, 35, 30, 90]
            
          },
            {
              backgroundColor: "#002e73",
         
              label: 'Pesanan',
              data: [ 10 , 50 ,10 , 85 ]

            }, 
            {
              backgroundColor: "#f54242",
              label: 'Pengunjung',
              data: [10, 80, 20, 50]

            },
            {
              backgroundColor: "#f5a142",
              label: 'Dilihat',
              data: [10, 90, 30, 100]

            }, 
          ]
        },
        chartData1: {
          labels: ['Perempuan', 'Laki-laki '],
          datasets: [
            {
              backgroundColor: [
                '#42f5b0',
                '#ffc107',
                
              ],
              data: [40, 60],
              hoverBackgroundColor: ['#0275d8', '#f0ad4e', '#5cb85c', '#d9534f'],
            },
          ],
        },
        chartData2: {
          labels: ['Pembeli Lama', 'Pembeli Baru '],
          datasets: [
            {
              backgroundColor: [
                '#f5a142',
                '#002e73',

              ],
              data: [40, 60],
              hoverBackgroundColor: ['#0275d8', '#f0ad4e', '#5cb85c', '#d9534f'],
            },
          ],
        },
        bars: [
          {name:'Novel',  variant: 'success', value: 90 },
          { name:'Sejarah',variant: 'info', value: 50 },
          { name:'Komik', variant: 'warning', value: 75 },
          { name:'Soal', variant: 'danger', value: 30 },
          { name:'Ebook', variant: 'primary', value: 80 },
          { name:'Kesehatan',variant: 'secondary', value: 65 },
          { name:'ATK', variant: 'dark', value: 85 },
           {name:'Novel',  variant: 'success', value: 90 },
           { name:'Komik', variant: 'warning', value: 75 }
        ],
        timer: null
       }
    },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
   
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>


<style scoped>
@import "boxicons";
</style>
