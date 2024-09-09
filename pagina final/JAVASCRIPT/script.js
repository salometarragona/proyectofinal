function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var comentario = document.getElementById('comentario').value;
    var mensajeError = document.getElementById('mensaje-error');
    
    if (nombre === "" || apellido === "" || comentario === "") {
        mensajeError.style.display = 'block'; 
        return false; 
    }
    
    mensajeError.style.display = 'none'; 
    return true; 
}