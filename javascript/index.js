import "vue-toastification/dist/index.css";
import Swal from "sweetalert2";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);

export default {
    auth: 'guest',

    data() {
        return {
            email: null,
            password: null,
            books: [],
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },

    watch: {
        page() {
            this.getBooks(1);
        },
        limit() {
            this.getBooks(1);
        },
        keyword() {
            this.getBooks(1);
        },
    },

    created() {
        this.getBooks();
    },

    methods: {
        sort(colValue) {
            if (colValue === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
            } else {
                this.currentSortDir = 'asc'
            }
            this.currentSort = colValue
        },

        button_show_password() {
            if ($("#password").attr("type") == "text") {
                $("#password").attr("type", "password");
                $("#icon-password").addClass("bx-low-vision");
                $("#icon-password").removeClass("bx-show-alt");
            } else if ($("#password").attr("type") == "password") {
                $("#password").attr("type", "text");
                $("#icon-password").removeClass("bx-low-vision");
                $("#icon-password").addClass("bx-show-alt");
            }
        },

        async loginApi() {
            try {
                await this.$auth.loginWith("local", {
                    data: {
                        email: this.email,
                        password: this.password,
                    },
                });

                setTimeout(() =>
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Berhasil',
                        text: 'Selamat Ada Telah Berhasil Login Di Aplikasi Pustakawan Elibu',
                    })
                    , 1000)

            } catch (error) {
                var getError = error.response.data.errors;
                getError.map((item) => {
                    Swal.fire({
                        icon: 'error',
                        title: item.message,
                        text: 'Silahkan Cek Kembali Email & Password Anda',
                    })
                });
            }
        },

        getBooks() {
            this.$axios.get(`product/get-product?page=1&limit=4&keyword=`)
                .then((res) => {
                    this.books = res.data.data.data;
                })
                .catch((error) => {
                    var getError = error.response.data.errors;

                    getError.map((item) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops Data Tidak Dapat Di Tampilkan',
                            text: 'Silahkan Refresh Halaman',
                            confirmButtonText: 'Refresh',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                setTimeout(() => this.$router.go(), 500)
                            }
                        })
                    });
                });
        },
        detailBooks(isbn13) {
            this.$router.push(`/Halaman/Katalog/Detail_Buku/${isbn13}`);
        },
        
    },
};