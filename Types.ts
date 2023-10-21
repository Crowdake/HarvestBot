export interface Vivero {
    [id: string]: {
      ancho: number;
      nombre: string;
      descripcion: string;
      largo: number;
      orticultor: {
        _arr: { [key: number]: number };
        _isPrincipal: boolean;
      };
      fechaCreacion: string;
      temporadaActual: string;
      tempAmbiente: number;
    };
  };

export interface  Planta {
        plantaId: number;
		viveroId: number;
		nombre: string;
		nombreCientifico: string;
		nitrogeno: number;
		fosforo: number;
		potasio: number;
		calcio: number;
		magnesio: number;
		zinc: number;
		boro: number;
		molibdeno: number;
		manganeso: number;
		cloro: number;
		cobre: number;
		co2: number;
		h2o: number;
		humedad: number;
		
	};