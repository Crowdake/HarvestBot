export const idlFactory = ({ IDL }) => {
  const Vivero = IDL.Record({
    'ancho' : IDL.Float64,
    'nombre' : IDL.Text,
    'descripcion' : IDL.Text,
    'largo' : IDL.Float64,
    'orticultor' : IDL.Principal,
    'fechaCreacion' : IDL.Text,
    'temporadaActual' : IDL.Text,
    'tempAmbiente' : IDL.Float64,
  });
  return IDL.Service({
    'actualizarVivero' : IDL.Func(
        [
          IDL.Text,
          IDL.Text,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Text,
          IDL.Text,
          IDL.Text,
        ],
        [IDL.Bool],
        [],
      ),
    'crearVivero' : IDL.Func(
        [
          IDL.Text,
          IDL.Float64,
          IDL.Float64,
          IDL.Float64,
          IDL.Text,
          IDL.Text,
          IDL.Text,
        ],
        [],
        [],
      ),
    'eliminarVivero' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'obtenerVivero' : IDL.Func([IDL.Text], [IDL.Opt(Vivero)], ['query']),
    'obtenerViveros' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Vivero))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
