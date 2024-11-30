import Stack from 'react-bootstrap/Stack';
import { Luz } from '../components/luces';
import { useState } from 'react';
import Boton from '../components/button';
import Button2 from '../components/button2';

export const Semaforo = () => {
  const [colores, setColores] = useState(['red', 'yellow', 'green']);
  const [colorActivo, setColorActivo] = useState("");
  const [violeta, setVioleta] = useState(false);

  const agregarMorado = () => {
    if (!violeta) {
      setColores([...colores, 'purple']);
      setVioleta(true);
    }
  };

  return (
    <>
      <h1>Semáforo</h1>
      <Stack
        gap={3}
        style={{
          borderRadius: "50px",
          border: "black 3px solid",
          width: "120px",
          padding: "10px",
          alignItems: "center",
        }}
      >
        {colores.map((item, index) => (
          <Luz
            key={index}
            color={item}
            setColorActivo={setColorActivo}
            colorActivo={colorActivo}
          />
        ))}
      </Stack>
      <Boton
        setColorActivo={setColorActivo}
        colorActivo={colorActivo}
        colores={colores}
        buttonText="Siguiente Color"
      />
      <Button2
        setVioleta={agregarMorado}
        violeta={violeta}
        buttonText="¡Queremos morado!"
      />
    </>
  );
};

export default Semaforo;
