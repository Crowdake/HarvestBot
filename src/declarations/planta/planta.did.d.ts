import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Planta {
  'co2' : number,
  'h2o' : number,
  'viveroId' : string,
  'nombre' : string,
  'boro' : number,
  'nombreCientifico' : string,
  'cloro' : number,
  'cobre' : number,
  'zinc' : number,
  'fosforo' : number,
  'potasio' : number,
  'manganeso' : number,
  'humedad' : number,
  'nitrogeno' : number,
  'calcio' : number,
  'molibdeno' : number,
  'magnesio' : number,
}
export interface _SERVICE {
  'actualizarPlanta' : ActorMethod<
    [
      string,
      string,
      string,
      string,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
    ],
    boolean
  >,
  'createPlant' : ActorMethod<
    [
      string,
      string,
      string,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
    ],
    undefined
  >,
  'eliminarPlanta' : ActorMethod<[string], boolean>,
  'obtenerPlanta' : ActorMethod<[string], [] | [Planta]>,
  'obtenerPlantas' : ActorMethod<[], Array<[string, Planta]>>,
}