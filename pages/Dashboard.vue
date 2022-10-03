<template>
    <div>
    <b-card-group deck>
      <b-card bg-variant="light" text-variant="red" header="Total Penjualan" class="text-center" >
        <div class="row justify-content-md-center">
        <i class="bx bxs-shopping-bags" style="font-size: 3rem; color: #ffc107"></i> 
        <h1>100 </h1> 
        </div>
      </b-card>

      <b-card bg-variant="light" text-variant="black" header="Total Pesanan" class="text-center">
<div class="row justify-content-md-center">
         <i class="bx bxs-cart" style="font-size: 3rem; color: #fd7e14"></i> 
        <h1>100 </h1> 
        </div>
      </b-card>

      <b-card bg-variant="light" text-variant="black" header="Total Pengunjung" class="text-center">
<div class="row justify-content-md-center">
        <i class="bx bxs-group" style="font-size: 3rem; color: #17a2b8"></i> 
        <h1>100 </h1> 
        </div>
      </b-card>
      <b-card bg-variant="light" text-variant="black" header="Produk Dilihat" class="text-center">
<div class="row justify-content-md-center">
       <i class="bx bxs-show" style="font-size: 3rem; color:#2ecc71 "></i> 
        <h1>100 </h1> 
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
       <b-card bg-variant="light" text-variant="red" header="Produk Terlaris" class="text-center " >
  <div style=" width:570px; height:600px; ">
   <div>
 <div>
    <div v-for="bar in bars" class="row mb-4">
      <div class="col-sm-3">{{ bar.name }}:</div>
      <div class="col-sm-12 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</div>

        </div>
  </b-card>
    </div>
      
    </div>
  <div class=" mt-3 row d-flex justify-content-center">
    <div class="col-md-6">
      <b-card bg-variant="light" text-variant="red" header="Jenis Kelamin Pembeli" class="text-center  ">
        <div class="center" style=" width:370px; " >
          <client-only>
            <Pie-chart :data="chartData1"></Pie-chart>
          </client-only>
        </div>
        
      </b-card>
  
  
  
    </div>
  
    <div class="col-md-6">
      <b-card bg-variant="light"  header="Tipe Pembeli" class="text-center    ">
        <div style=" width:370px; align: center;   ">
          <client-only>
            <Pie-chart :data="chartData2"></Pie-chart>
          </client-only>
        </div>
      
      </b-card>
    </div>
  
  </div>
    
    
    
    </div>
  
</template>

<script>
  export default {
      auth: 'guest',
      
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
                '#f54242',
                '#87b7ff',
                
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
   
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>


<style scoped>
@import "boxicons";
</style>
