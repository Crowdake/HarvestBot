import React, { useEffect, useState } from "react";
import { useCanister } from "@connect2ic/react";
import { Vivero } from "Types";

const ViveroForm = () => {
    const [vivero] = useCanister("vivero");
    const [loading, setLoading] = useState(false);
    const [nombre, setNombre] = useState("");
    const [largo, setLargo] = useState(0);
    const [ancho, setAncho] = useState(0);
    const [tempAmbiente, setTempAmbiente] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [fechaCreacion, setFechaCreacion] = useState("");
    const [temporadaActual, setTemporadaActual] = useState("");
    const [viveros, setViveros] = useState([]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await vivero.crearVivero(
            nombre,
            largo,
            ancho,
            tempAmbiente,
            descripcion,
            fechaCreacion,
            temporadaActual
        );
        setLoading(false);
        getViveros();
    };

    const getViveros = async () => {
        const viverosObtenidos = await vivero.obtenerViveros() as [Vivero];
        setViveros(viverosObtenidos);
        console.log(viveros);
    };

    const handleDelete = async (id) => {
        console.log(id);
        const deleted = await vivero.eliminarVivero(id);
        if (deleted) {
        getViveros();
        }
      };

    useEffect(() => {
        if (!vivero) {

            return;
        }
        getViveros();
    }, [vivero]);

    return (
        <div style={{width:"60vw"}}>
            <div>

                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </label>
                    <label>
                        Largo:
                        <input
                            type="number"
                            value={largo}
                            onChange={(e) => setLargo(parseFloat(e.target.value))}
                        />
                    </label>
                    <label>
                        Ancho:
                        <input
                            type="number"
                            value={ancho}
                            onChange={(e) => setAncho(parseFloat(e.target.value))}
                        />
                    </label>
                    <label>
                        Temp. Ambiente:
                        <input
                            type="number"
                            value={tempAmbiente}
                            onChange={(e) => setTempAmbiente(parseFloat(e.target.value))}
                        />
                    </label>
                    <label>
                        Descripción:
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </label>
                    <label>
                        Fecha de Creación:
                        <input
                            type="text"
                            value={fechaCreacion}
                            onChange={(e) => setFechaCreacion(e.target.value)}
                        />
                    </label>
                    <label>
                        Temporada Actual:
                        <input
                            type="text"
                            value={temporadaActual}
                            onChange={(e) => setTemporadaActual(e.target.value)}
                        />
                    </label>
                    <button type="submit">Crear Vivero</button>
                </form>
                {loading && <div>Loading...</div>}
            </div>
            <div style={{display: "flex"}}>
                {viveros.map((vivero) => (
                    <div style={{backgroundColor: '#87BBA2', borderRadius: 10, padding: 2, margin: 3}}>
                    <div style={{display: "flex"}}>
                    <p style={{marginRight: 5, fontWeight: "bold"}}>Nombre:</p>
                    <p>{vivero[1].nombre}</p>
                    </div>
                    <div style={{display: "flex"}}>
                    <p style={{marginRight: 5, fontWeight: "bold"}}>Largo:</p>
                    <p>{vivero[1].largo}</p>
                    </div>
                    <div style={{display: "flex"}}>
                    <p style={{marginRight: 5, fontWeight: "bold"}}>Ancho:</p>
                    <p>{vivero[1].ancho}</p>
                    </div>
                    <div style={{display: "flex"}}>
                    <p style={{marginRight: 5, fontWeight: "bold"}}>Temp. ambiente:</p>
                    <p>{vivero[1].tempAmbiente}</p>
                    </div>
                    <div style={{display: "flex"}}>
                    <p style={{marginRight: 5, fontWeight: "bold"}}>Fecha de cultivo:</p>
                    <p>{vivero[1].fechaCreacion}</p>
                    </div>
                    <div style={{display: "flex"}}>
                    <p style={{marginRight: 5, fontWeight: "bold"}}>Temporada actual:</p>
                    <p>{vivero[1].temporadaActual}</p>
                    </div>
                    <button onClick={()=> handleDelete(vivero[0])}>Eliminar</button>
                </div>
                ))}
            </div>
        </div>

    );
};

export default ViveroForm;