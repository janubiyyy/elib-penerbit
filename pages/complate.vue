<template>
    <div>
        <h4>List Pesanan Complate</h4>
        <br>

        <!-- <NuxtLink to="/sudahkonfirmasi" class="link-a">
            <b-button variant="primary">Sudah Konfirmasi</b-button>
        </NuxtLink> -->
        <NuxtLink to="/complate" class="link-a">
            <b-button variant="success">Complate</b-button>
        </NuxtLink>
        <NuxtLink to="/cancel" class="link-a">
            <b-button variant="danger">Canceled</b-button>
        </Nuxtlink>
        <!-- <NuxtLink to="/refund" class="link-a">
            <b-button variant="danger">Refund</b-button>
        </NuxtLink> -->
        <NuxtLink to="/expired" class="link-a">
            <b-button variant="warning">Expired</b-button>
        </NuxtLink>
        <!-- <NuxtLink to="/belumkonfirmasi" class="link-a">
            <b-button variant="warning">Belum Konfirmasi</b-button>
        </NuxtLink> -->
        <br>
    <b-row sm="6">
        <b-col sm="">
            <div class="mt-3">
                <span>show</span>
            </div>
        </b-col>
        <b-col sm="-2">
            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
        </b-col>
        <b-col sm="">
            <div class="mt-3">
                <span>entries</span>
            </div>
        </b-col>
        <b-col sm=""></b-col>
        <b-col sm="4"></b-col>
        <b-col sm="2" class="mt-3">
            <b-input-group class="mb-2">
                <b-form-input v-bind="inputAttrs" v-on="inputHandlers" placeholder="No Order" class="form-control">
                </b-form-input>
                <b-input-group-append>
                    <b-button variant=""> <i class='bx bx-pencil'></i></b-button>
    
                </b-input-group-append>
            </b-input-group>
        </b-col>
        <b-col sm="2" class="mt-3">
            <b-input-group class="mb-2">
                <b-form-input v-bind="inputAttrs" v-on="inputHandlers" placeholder="Pencarian" class="form-control">
                </b-form-input>
                <b-input-group-append>
                    <b-button><i class='bx bx-search-alt'></i></b-button>
                </b-input-group-append>
            </b-input-group>
        </b-col>
    </b-row>


        <b-table class="mt-4" responsive :items="items" :fields="fields" :per-page="perPage"
            :current-page="currentPage">
            <template v-slot:cell(Operasi)="{ item }">
            
                <b-button-group vertical>
                    <b-button v-b-modal.modal-xl variant="warning">Action</b-button>
                    <NuxtLink to="/detail">
                        <b-button variant="primary">Detail</b-button>
                    </NuxtLink>
                    <b-btn v-b-modal.modal-4 variant="danger">Delete</b-btn>
                </b-button-group>
            </template>
            </b-table>
            <b-modal id="modal-xl" size="xl" title="Detail Shipping">
            
                <b-row sm="9">
                    <b-col sm="">
                        <b-text>Shipping Code</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Shipping Code">
            
                        </b-form-input>
                    </b-col>
                    <b-col sm="5">
                        <b-text>Customer</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Customer">
            
                        </b-form-input>
                    </b-col>
            
                </b-row>
                <br>
                <b-row sm="6">
                    <b-col sm="6">
                        <b-text>Received Name :</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan received name">
                        </b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <b-text>
                            Phone Number :</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Nomer Handphone">
                        </b-form-input>
                    </b-col>
            
                </b-row>
                <br>
                <b-row sm="8">
                    <b-col sm="12">
                        <b-text>Received Address 1 :</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Received Address 1">
                        </b-form-input>
                    </b-col>
            
                </b-row>
                <br>
                <b-row sm="8">
                    <b-col sm="6">
                        <b-text>Received Address 2 :</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Received Address 2">
                        </b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-text>City</b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Kota">
                        </b-form-input>
                    </b-col>
            
                    <b-col sm="3">
                        <b-text>Pos Code </b-text>
                        <b-form-input vid="input-small" placeholder="Masukan Pos Code">
                        </b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-table striped hover :items="items5" :fields="fields5"></b-table>
                <br>
                <b-row sm="6">
                    <b-col sm="4">
                        <b-text>Status :</b-text>
                        <b-form-select v-model="selected" :options="options1" :select-size="1"></b-form-select>
                    </b-col>
                    <b-col sm="4">
                        <b-text>Curier:</b-text>
                        <b-form-input vid="input-small">
                        </b-form-input>
                    </b-col>
                    <b-col sm="4">
                        <b-text>Waybill :</b-text>
                        <b-form-input vid="input-small">
                        </b-form-input>
                    </b-col>
                </b-row>
            </b-modal>
            <b-modal id="modal-4" title="Delete Produk">
                <b-alert show variant="danger">Yakin ingin menghapus</b-alert>
            </b-modal>
        <div class="pagination justify-content-center">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
            </b-pagination>

        </div>
    </div>
</template>
<script>
export default {
    auth: 'guest',

    layout: "Menu",
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: '10' },
                { value: 'a', text: '25' },
                { value: 'b', text: '50' },
                { value: 'c', text: '100', disabled: true }
            ],
            perPage: 4,
            currentPage: 1,
            items: [


                { No: '1', Invoice: '16631482221919330716995', OrderID: '16995', Customer: 'Mala', Shippingname: 'static static', Status: 'complate', Total: 'Rp.12.000', TanggalOrder: '15/09/2022', SumberMall: 'ELIB-EurekaBookhouse' },
                { No: '2', Invoice: '16631482511911530716995', OrderID: '16905', Customer: 'Masya', Shippingname: 'static static', Status: 'complate', Total: 'Rp.15.000', TanggalOrder: '10/09/2022', SumberMall: 'ELIB-EurekaBookhouse' }
            ],

            fields: ["No", "Invoice", "OrderID", "Customer", "Shippingname", "Status", "Total", "TanggalOrder", "SumberMall", "Operasi"],
            items5: [{ No: '1', Produk: 'Test Elibu', Model: 'ELIB-4', Qty: '1', UnitPrice: '1', Total: '1' }],
            fields5: ["No", "Produk", "Model", "Qty", "UnitPrice", "Total"],
        }

    },

    computed: {
        rows() {
            return this.items.length
        }
    }

}

</script>
<style scoped>
@import "boxicons";
</style>