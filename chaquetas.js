
function contactar(articulo) {
    let mensaje = '';

    switch (articulo) {
        case 'colibris':
            mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con colibríes.";
            break;
        case 'animales':
            mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con animales.";
            break;
        case 'mandalas':
            mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con mandalas.";
            break;
        case 'naturaleza':
            mensaje = "¡Hola! Estoy interesado en la chaqueta pintada a mano con naturaleza.";
            break;
    }

    let numeroWhatsapp = '573137074505';
    let urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, '_blank');
}


function mirarinstra() {


    let enlacePSE = "https://www.instagram.com/gloriacruz_pt?igsh=Nnh6a3dmZXQ2MmRn";

    window.open(enlacePSE, '_blank');


}

function cargarPagina1(url){
    document.getElementById('page1').src=url;
}

