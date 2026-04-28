import galeriaIcon from '../assets/galeria-icon.png';
import microfonoIcon from '../assets/microfono-icon.png';
import styles from '../styles/ChatBot.module.css';

function ChatBot() {
  return (
    <>
      <section className={styles.hero}>
        <h1>¡Bienvenido, Usuario!</h1>
        <h2>¿En qué puedo ayudarte?</h2>
        <div className={styles.options}>
          <div className={styles.option}>¿Cómo registrar una devolución?</div>
          <div className={styles.option}>¿Cómo validar a un proveedor?</div>
          <div className={styles.option}>Lista de proveedores validados</div>
          <div className={styles.option}>¿Qué tipo de telas están disponibles para la compra del día de hoy?</div>
          <div className={styles.option}>Rutas y tipos de entregas disponibles</div>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pregúntale al chatBot..." />
          <button><img src={microfonoIcon} alt="Microfono" /></button>
          <button><img src={galeriaIcon} alt="Galeria" /></button>
        </div>
      </section>
    </>
  );
}

export default ChatBot;
