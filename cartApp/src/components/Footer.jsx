import '../components/footer.css'
export const Footer = () => {
  return (
    <footer className="footer navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        
        <div className='datos'>
          <p>Direccion: Calle Falsa 123, Buenos Aires, Argentina</p>
        <p>Telefono de contacto: 11-3542-8962</p>
        </div>
        <h6 className='textH6'><img width="24" height="24" src="https://img.icons8.com/material/24/globe--v1.png" alt="globe--v1"/>Made by TheCknt</h6>
    </footer>
  )
}
