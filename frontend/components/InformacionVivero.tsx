import React from 'react';

function InformationVivero() {
  return (
    <div className="card">
      <table>
        <tbody>
          <tr>
            <td>Tipo de cultivo</td>
            <td>Frijol</td>
            <td></td>
          </tr>
          <tr>
            <td>Tipo de estructura</td>
            <td>Colchado</td>
            <td></td>
          </tr>
          <tr>
            <td>Temperatura ambiente</td>
            <td>27°C</td>
            <td></td>
          </tr>
          <tr>
            <td>Humedad ambiente</td>
            <td>13%</td>
            <td></td>
          </tr>
          <tr>
            <td>Dimensiones del terreno</td>
            <td>120x100 metros</td>
            <td></td>
          </tr>
          <tr>
            <td>Separación de las plantas</td>
            <td>45 cm</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InformationVivero;
