import Swal from "sweetalert2";

export default {
    methods: {
        menuToggleProfil() {
            var toggleMenu = document.querySelector(".dropdown-profil");
            toggleMenu.classList.toggle("active");
        },
        menuToggleNotif() {
            var toggleMenu = document.querySelector(".dropdown-pesan");
            toggleMenu.classList.toggle("active");
        },
    },
};