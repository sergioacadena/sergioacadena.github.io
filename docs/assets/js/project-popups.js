
/* =========================================
   PROJECT POP-UPS
   Apertura, carga y cierre de proyectos
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("project-dialog");
  const content = document.getElementById("project-dialog-content");
  const closeButton = dialog?.querySelector(".project-dialog-close");

  if (!dialog || !content || !closeButton) return;

  let activeCard = null;
  let isLoading = false;

  // Cargar el contenido HTML externo y abrir el pop-up
  async function openProject(card) {
    const projectPath = card.dataset.project;

    if (!projectPath || dialog.open || isLoading) return;

    isLoading = true;
    activeCard = card;

    content.innerHTML = "<p>Cargando proyecto...</p>";
    dialog.showModal();

    try {
      const response = await fetch(projectPath);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const html = await response.text();
      content.innerHTML = html;

    } catch (error) {
      console.error("No se pudo cargar el proyecto:", error);

      content.innerHTML = `
        <section class="project-detail">
          <h2>No se pudo cargar el proyecto</h2>
          <p>Comprueba que el archivo HTML exista y que estés usando Live Server.</p>
        </section>
      `;

    } finally {
      isLoading = false;
    }
  }

  // Detectar la interacción con las tarjetas
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".project-card-clickable");

    if (!card) return;

    event.preventDefault();
    openProject(card);
  });

  // Permitir abrir las tarjetas con Enter o barra espaciadora
  document.addEventListener("keydown", (event) => {
    const card = event.target.closest(".project-card-clickable");

    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card);
    }
  });

  // Cerrar desde el botón
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // Cerrar al hacer clic fuera del contenido
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  // Limpiar el contenido y devolver el foco a la tarjeta
  dialog.addEventListener("close", () => {
    content.innerHTML = "";

    if (activeCard) {
      activeCard.focus();
      activeCard = null;
    }
  });
});
