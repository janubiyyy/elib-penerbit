<template>
    <div>
        <h4>Detail Produk</h4>
        
        <div class=" mt-1 pagination justify-content-end ">
            <nuxt-link to="/transaksi">
        <b-button variant="danger">Kembali ke Pesanan</b-button></nuxt-link>
        </div>
       
        <br>
        <b-card no-body>
                      
            <b-tabs card>
                <!-- <div class=" mt-3  pagination justify-content-end ">
                <b-button variant="success">Update</b-button>   
                    <b-button variant="outline-light">Update</b-button>
                </div> -->
                <b-tab title="Data Peminjam">
                    <div class="pagination justify-content-end">
                        <nuxt-link to="/transaksi">
                        <b-button class="float-right ml-1" variant="success">Update</b-button></nuxt-link>
                    </div>
                <b-col sm="13">
                    <b-text>Keterangan</b-text>
                    <b-form-input vid="input-small" placeholder="">
                
                    </b-form-input>
                    </b-col>
                    <br>
                        <b-row sm="10">
                            <b-col sm="6">
                                <b-text>First Name :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                            
                            </b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <b-text>Last Name :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                            
                            </b-form-input>
                            </b-col>
                        </b-row>
                        <br>
                        <b-col sm="13">
                            <b-text>E-Mail</b-text>
                            <b-form-input vid="input-small" placeholder="">
                        
                            </b-form-input>
                        </b-col>
                        <br>
                        <b-row sm="10">
                            <b-col sm="6">
                                <b-text>Phone :</b-text>
                                <b-form-input vid="input-small" placeholder="">
                        
                                </b-form-input>
                            </b-col>
                            <b-col sm="6">
                                <b-text>Fax :</b-text>
                                <b-form-input vid="input-small" placeholder="">
                        
                                </b-form-input>
                            </b-col>
                        </b-row>
                </b-tab>
                <b-col sm="12">
                    <b-modal id="modal-1" title="Tambah General">
                        <b-alert variant="success" show>Berhasil disimpan</b-alert>
                    </b-modal>
                </b-col>
                <br>
                <!-- <b-tab title="Alamat Kirim">
                    <div class="pagination justify-content-end">
                        <nuxt-link to="/transaksi">
                        <b-button class="float-right ml-1" variant="success">Update</b-button></nuxt-link>
                    </div>
                    <b-row sm="10">
                        <b-col sm="6">
                            <b-text>First Name :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <b-text>Last Name :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row sm="10">
                        <b-col sm="6">
                            <b-text>Shipping Method :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <b-text>Shipping Phone :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                    <b-col sm="13">
                        <b-text>Address 1 :</b-text>
                        <b-form-input vid="input-small" placeholder="">
                
                        </b-form-input>
                    </b-col>
                    <br>
                    <b-col sm="13">
                        <b-text>Address 2 :</b-text>
                        <b-form-input vid="input-small" placeholder="">
                    
                        </b-form-input>
                    </b-col>
                    <br>
                    <b-row sm="10">
                        <b-col sm="6">
                            <b-text>Kecamatan :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                
                            </b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <b-text>Kota :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                
                            </b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                <b-row sm="10">
                    <b-col sm="6">
                        <b-text>Provinsi :</b-text>
                        <b-form-input vid="input-small" placeholder="">
                
                        </b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <b-text>Pos Code :</b-text>
                        <b-form-input vid="input-small" placeholder="">
                
                        </b-form-input>
                    </b-col>
                </b-row>
              
                <br>
                </b-tab> -->

                <!-- <b-tab title="Produk " >
                    <h5>Produk :</h5>
                    <br>
                <b-row sm="6">
                    <b-col sm="4">
                        <b-text>Search Produk :</b-text>
                        <b-form-input vid="input-small" >
                        </b-form-input>
                    </b-col>
                    <b-col sm="4">
                        <b-text>Select Produk :</b-text>
                        <b-form-input vid="input-small" >
                        </b-form-input>
                    </b-col>
                    <b-col sm="4">
                        <b-text>Qty Produk :</b-text>
                        <b-form-input vid="input-small" >
                        </b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-row sm="6">
                    <b-col sm="4">
                        <b-text>Stok:</b-text>
                        <b-form-input vid="input-small">
                        </b-form-input>
                    </b-col>
                    <b-col sm="4">
                        <b-text>No Faktur :</b-text>
                        <b-form-input vid="input-small">
                        </b-form-input>
                    </b-col>
                    <b-col sm="4">
                        <b-text>No Invoice :</b-text>
                        <b-form-input vid="input-small">
                        </b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-table class="mt-4" responsive :items="items3" :fields="fields3">
                    <template v-slot:cell(Gabungan)="{ item }">
                        <span>
                            <b-form-checkbox size="sm">96</b-form-checkbox>
                        </span>
                    </template>
                    <template v-slot:cell(Online)="{ item }">
                        <span>
                            <b-form-checkbox size="sm">100</b-form-checkbox>
                        </span>
                    </template>
                    <template v-slot:cell(Operasi)="{ item }">
                        <span>
                        <b-button v-b-modal.modal-4 variant="danger">Delete</b-button>
                        </span>
                    </template>
                </b-table>
                <br>
                <div class="pagination justify-content-end">
                    <nuxt-link to="transaksi">
                <b-button class="float-right ml-1" variant="success">Save</b-button></nuxt-link>
                <b-button class="float-right ml-1">Factur</b-button>
                <b-button class="float-right ml-1" variant="primary">Shipping Label</b-button>
               
                </div>
                </b-tab> -->
                <b-tab title="Total">
                    <b-text><b>Total :</b></b-text>
                    <b-table class="mt-4" responsive :items="items4" :fields="fields4"></b-table>
                    <b-text><b>Detail Payment :</b></b-text>
                    <br>
                    <br>

                   <b-row sm="10">
                    <b-col sm="6">
                        <b-text>Payment Order :</b-text>
                        <b-form-input vid="input-small" placeholder="">
                    
                        </b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <b-text>Payment Name :</b-text>
                        <b-form-input vid="input-small" placeholder="">
                    
                        </b-form-input>
                    </b-col>
                    </b-row>
                    <br>
                    <b-row sm="10">
                        <b-col sm="6">
                            <b-text>Payment Telp :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <b-text>Payment Email :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row sm="10">
                        <b-col sm="6">
                            <b-text>Transfer Date :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                        <b-col sm="6">
                            <b-text>Transfer Bank :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row sm="10">
                        <b-col sm="6">
                            <b-text>Transfer Amount :</b-text>
                            <b-form-input vid="input-small" placeholder="">
                    
                            </b-form-input>
                        </b-col>
                        </b-row>
                        <br>
                        <div class="pagination justify-content-end">
                            <nuxt-link to="/transaksi">
                            <b-button class="float-right ml-1" variant="success">Save</b-button></nuxt-link>
                       
                        
                        </div>
                </b-tab>
                <b-tab title="Kirim Pesan">
                    <b-text><b>Massage :</b></b-text>
                        <div>
                            <b-form-textarea id="textarea-rows"  rows="8"></b-form-textarea>
                        </div>
                        <br>
                        <div class="pagination justify-content-end">
                            <nuxt-link to="/transaksi">
                            <b-button class="float-right ml-1" variant="success">Save</b-button></nuxt-link>
                        </div>
                </b-tab>

            </b-tabs>

        </b-card>
        <b-modal id="modal-4" title="Delete Produk">
            <b-alert show variant="danger">Yakin ingin menghapus</b-alert>
        </b-modal>
    </div>
</template>
<script>
export default {
    auth: 'guest',

    layout: "Menu",
    data() {
        return {
            items1: [{ Category: 'Buku Agama' },
            { Category: 'Buku Soal' },
            { Category: 'Buku Umum' },
            { Category: 'Perguruan Tinggi' },
            { Category: 'Buku Pelajaran' },
            { Category: 'MIPA' },
            ],
            fields: ["Aksi", "Category"],
            items2: [{ No: '1', Keterangan: 'Edit tanggal', Discon: '15%', Harga: '5000', TanggalMulai: '15/09/2022', TanggalAkhir: '15/10/2022' },
            { No: '2', Keterangan: 'Tambahkan catatan', Discon: '10%', Harga: '10000', TanggalMulai: '29/09/2022', TanggalAkhir: '10/10/2022' },
            { No: '3', Keterangan: 'Tambahkan tanggal', Discon: '10%', Harga: '75000', TanggalMulai: '27/09/2022', TanggalAkhir: '25/10/2022' },
            { No: '4', Keterangan: 'Tambahkan discount', Discon: '25%', Harga: '5000', TanggalMulai: '25/09/2022', TanggalAkhir: '12/10/2022' },
            ],

            fields2: ["No", "Keterangan", "Discon", "Harga", "TanggalMulai", "TanggalAkhir", "Operasi"],

            items3: [{ No: '1', Keterangan: 'Edit tanggal', Discon: '15%', Harga: '5000', TanggalMulai: '15/09/2022', TanggalAkhir: '15/10/2022', Stok: '1' },
            { No: '2', Keterangan: 'Tambahkan catatan', Discon: '10%', Harga: '10000', TanggalMulai: '29/09/2022', TanggalAkhir: '10/10/2022', Stok: '5' },
            { No: '3', Keterangan: 'Tambahkan tanggal', Discon: '10%', Harga: '75000', TanggalMulai: '27/09/2022', TanggalAkhir: '25/10/2022', Stok: '5' },
            { No: '4', Keterangan: 'Tambahkan discount', Discon: '25%', Harga: '5000', TanggalMulai: '25/09/2022', TanggalAkhir: '12/10/2022', Stok: '3' },
            ],

            fields1: ["No", "Keterangan", "Discon", "Harga", "TanggalMulai", "TanggalAkhir", "Stok", "Operasi"],
            items3: [{ No: '1', Produk: 'Edit tanggal', Model: '15%', Online: '15/09/2022', Weight: '(1x0.000)= 0', Qty: '1', UnitPrice: '1', Total: '1', }
            ],

            fields3: ["No", "Produk", "Model", "Gabungan", "Online", "Weight", "Qty", "UnitPrice", "Total" , "Operasi"],
            items4: [{ No: '1', Produk: 'Test ELIBu 4', Model: 'ELIB-4', Gabungan:'96', Online: '100', Weight: '(1x0.000)= 0', Qty: '1', UnitPrice: '1', Total: '1', },
            {  Model: 'Sub-Total', Weight: ' 0', Qty: '1', Total: '1', },
                { UnitPrice: 'Sub-Total	', Total: '1', },
                { UnitPrice: 'no_shipping	', Total: '0', },
                { UnitPrice: 'Total	', Total: '1', },
                { UnitPrice: 'Free-Ongkir', Total: '0', },
            ],

            fields4: ["No", "Produk", "Model", "Gabungan", "Online", "Weight", "Qty", "UnitPrice", "Total"],
            selected: null,

            options: [
                { value: null, text: 'Pilih Supplier' },
                { value: 'a', text: 'Buku Pelajaran' },
                { value: 'b', text: 'Buku Umum' },
                { value: 'c', text: 'Buku Soal' },
                { value: 'd', text: 'Buku Import' },
                { value: 'e', text: 'Gaya Hidup' },
                { value: 'f', text: 'Mainan & Hobi' },
                { value: 'g', text: 'Buku Anak' },
                { value: 'h', text: 'Novel' },
                { value: 'i', text: 'Buku Murah' },
                { value: 'j', text: 'Perguran Tinggi' },
                { value: 'k', text: 'Olahraga dan Outdoor' },
                { value: 'l', text: 'ATK' },
                { value: 'm', text: 'Sayuran Organik' },
                { value: 'n', text: 'Paket Push' },
                { value: 'o', text: 'Buku Flat' },
                { value: 'p', text: 'Tour and Travel' },
                { value: 'q', text: 'Off. Merchandise' },
                { value: 'r', text: 'Eureka Mart' },
                { value: 's', text: 'Action Figure' },
                { value: 't', text: 'Ebook' },
                { value: 'u', text: 'DIY' },
                { value: 'V', text: 'ebook-elib' }
            ],
            selected: null,
            options1: [
                { value: null, text: 'Pilih Merk' },
                { value: 'a', text: 'Buku Pelajaran' },
                { value: 'b', text: 'Buku Umum' },
                { value: 'c', text: 'Buku Soal' },
                { value: 'd', text: 'Buku Import' },
                { value: 'e', text: 'Gaya Hidup' },
                { value: 'f', text: 'Mainan & Hobi' },
                { value: 'g', text: 'Buku Anak' },
                { value: 'h', text: 'Novel' },
                { value: 'i', text: 'Buku Murah' },
                { value: 'j', text: 'Perguran Tinggi' },
                { value: 'k', text: 'Olahraga dan Outdoor' },
                { value: 'l', text: 'ATK' },
                { value: 'm', text: 'Sayuran Organik' },
                { value: 'n', text: 'Paket Push' },
                { value: 'o', text: 'Buku Flat' },
                { value: 'p', text: 'Tour and Travel' },
                { value: 'q', text: 'Off. Merchandise' },
                { value: 'r', text: 'Eureka Mart' },
                { value: 's', text: 'Action Figure' },
                { value: 't', text: 'Ebook' },
                { value: 'u', text: 'DIY' },
                { value: 'V', text: 'ebook-elib' }
            ],
            options3: [
                { value: null, text: 'Pilih Kategori' },
                { value: 'a', text: 'Buku Agama' },
                { value: 'b', text: 'Buku Pelajaran' },
                { value: 'c', text: 'Perguruan Tinggi' },
                { value: 'd', text: 'MIPA' },
                { value: 'e', text: 'Buku Umum' },
                { value: 'f', text: 'Buku Soal' },
                { value: 'g', text: 'Buku Seri' },
                { value: 'h', text: 'Buku SMP' },
            ],
            url: "",
            imagesArray: null,
        }
    },
    methods: {
        onChange(e) {
            this.imagesArray = e.target.files[0]
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        }
    }
}
</script>