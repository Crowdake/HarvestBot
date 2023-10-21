import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Vivero {
  'ancho' : number,
  'nombre' : string,
  'descripcion' : string,
  'largo' : number,
  'orticultor' : Principal,
  'fechaCreacion' : string,
  'temporadaActual' : string,
  'tempAmbiente' : number,
}
export interface _SERVICE {
  'actualizarVivero' : ActorMethod<
    [string, string, number, number, number, string, string, string],
    boolean
  >,
  'crearVivero' : ActorMethod<
    [string, number, number, number, string, string, string],
    undefined
  >,
  'eliminarVivero' : ActorMethod<[string], boolean>,
  'obtenerVivero' : ActorMethod<[string], [] | [Vivero]>,
  'obtenerViveros' : ActorMethod<[], Array<[string, Vivero]>>,
}
