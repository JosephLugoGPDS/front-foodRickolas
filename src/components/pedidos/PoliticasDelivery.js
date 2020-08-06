import React from 'react'

export const PoliticasDelivery = (props) => {

    // console.log(props)
    const onClick = () =>{
        // e.preventDefault();

        props.history.push('/productoscliente');
    }

    return (
        <div className="container">
            <h2 className="text-center">POLÍTICAS DE DELIVERY</h2>



            <h3>SOBRE EL SERVICIO DE DELIVERY:</h3>
            <p>
• El servicio de delivery se brinda respecto de aquellos pedidos efectuados por los Clientes a través de las siguientes vías: (i) vía telefónica o (ii) vía online, realizando el pedido a través de la web (tienda virtual web).
• La zona de Reparto es limitada e informada por el operador en la llamada. Si hace el pedido vía online, se indicará la cobertura de reparto al ingresar la dirección en la plataforma web.
• El monto mínimo para un pedido por delivery es de S/ 20.00
• No se aceptan billetes mayores de $50.00 y S/ 200.00 como forma de pago.
• El pedido viene con salsas. Las salsas con las que contamos son mayonesa, ají, BBQ y aliño dulce o salado y serán enviadas junto con tu pedido, de conformidad con la disponibilidad de sabores de cada tienda. La cantidad de salsas variarán según el pedido que se realice:
• En caso usted solicite salsas extras, solo se enviará hasta un máximo del doble de las cantidades antes indicadas para cada tipo de pedido.
• En caso el cliente no se encontrara conforme con el servicio prestado por alguno de los motorizados o quisiera interponer una queja sobre la forma de conducir, podrá comunicarlo a través del libro de reclamaciones virtual o llamando al 054 – 614792 dentro del horario de atención (12:00 am a 11:00 pm).
• Es responsabilidad del cliente asegurarse que al momento de la entrega del producto, este se encuentra conforme.
• La empresa no se hace responsable por el estado de los pedidos que hubieran sido adquiridos por intermedio de terceras empresas.
• La empresa se reserva el derecho de suspender el servicio de delivery en cualquier momento.
• El tiempo de entrega de su pedido, siempre será indicado en la llamada por el operador; y si realiza el pedido online (web), ello será indicado en el correo de confirmación. En ambos casos.
• El tiempo de garantía que se informe solo es válido hasta la puerta principal del condominio, quinta o edificio y en caso de empresas: hasta la zona de recepción; y, siempre que se brinden todos los datos de ubicación e identificación requeridos por el operador (en caso haga el pedido por teléfono), o requeridos al hacer el check out de su orden (en caso haga el pedido vía online).
• No se aplicará la garantía si al momento de la entrega no se pudiera distinguir la numeración del domicilio, o si el timbre/ intercomunicador presentara fallas o estuviera malogrado.


            </p>

            <h3>HORARIO DE DELIVERY:</h3>

            <p>
            
Los horarios de atención del delivery podrán estar sujetos a modificaciones por diferentes motivos, entre ellos: cierre de tienda, días festivos y/o feriados, huelgas, condiciones de clima (lluvias, neblina, garúa, etc.), desastres naturales (sismos, terremotos, huaycos, entre otros), días de eventos deportivos/partidos de fútbol o ubicación de la vivienda (dificultades de acceso en determinadas horas, incremento de peligrosidad, etc.); lo cual será informado al momento en que usted se contacte con nosotros para realizar su pedido.
El delivery de las tiendas ubicadas en la ciudad de Arequipa por lo general atiende en los siguientes horarios. Sin embargo, podría ocurrir que las tiendas modifiquen sus horarios de acuerdo a lo señalado en el párrafo anterior o se encuentren dentro del listado de tiendas exceptuadas a dicho horario.
            </p>

            <h3> ATENDEMOS DE:</h3>
            <h4>
            Horario Habitual:
            </h4>
            <p>
• Lunes a Domingo de 12 pm a 5 pm.
Iria la dirección Mzn "M" Lote 15 Comite 12 Nocheto- El Agustino</p>
<input
                            type="submit"
                            className="btnSubmit"
                            value="Acepto"
                            onClick={()=>onClick()}
                            
                        />
        
        </div>
    )
}
