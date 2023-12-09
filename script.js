
document.getElementById("boton_menu").addEventListener("click",function(e){
    if(document.getElementById("menu_hambuerguesa").classList.contains("show")){
        document.getElementById("menu_hambuerguesa").classList.remove("show")
        document.querySelector("._r .menu_content").classList.remove("show")
    }
    else{
        document.getElementById("menu_hambuerguesa").classList.add("show")
        document.querySelector("._r .menu_content").classList.add("show")

    }
})
// Obtén todos los elementos del DOM
const modals = document.querySelectorAll(".modal");
const modalBtns = document.querySelectorAll(".openModalBtn");
const closeBtns = document.querySelectorAll(".close");

// Función para abrir el modal
function openModal(modalId) {
  const modal = document.querySelector(modalId);
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
  const modal = document.querySelector(modalId);
  modal.style.display = "none";
}

// Agregar eventos a los botones para abrir los modales
modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    openModal(modalId);
  });
});

// Agregar eventos a los botones de cierre de los modales
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    closeModal(modalId);
  });
});

// Cerrar el modal cuando se hace clic fuera del contenido
window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      closeModal("#" + modal.id);
    }
  });
});
