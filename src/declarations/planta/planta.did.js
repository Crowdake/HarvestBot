export const idlFactory = ({ IDL }) => {
  const Planta = IDL.Record({
    'co2' : IDL.Float64,
    'h2o' : IDL.Float64,
    'viveroId' : IDL.Text,
    'nombre' : IDL.Text,
    'boro' : IDL.Float64,
    'nombreCientifico' : IDL.Text,
    'cloro' : IDL.Float64,
    'cobre' : IDL.Float64,
    'zinc' : IDL.Float64,
    'fosforo' : IDL.Float64,
    'potasio' : IDL.Float64,
    'manganeso' : IDL.Float64,
    'humedad' : IDL.Float64,
    'nitrogeno' : IDL.Float64,
    'calcio' : IDL.Float64,
    'molibdeno' : IDL.Float64,
    'magnesio' : IDL.Float64,
  });
  return IDL.Service({
    'actualizarPlanta' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
        ],
        [IDL.Bool],
        [],
      ),
    'createPlant' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Text,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
        ],
        [],
        [],
      ),
    'eliminarPlanta' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'obtenerPlanta' : IDL.Func([IDL.Text], [IDL.Opt(Planta)], ['query']),
    'obtenerPlantas' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Planta))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
