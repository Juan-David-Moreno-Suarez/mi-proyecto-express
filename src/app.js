const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());

// Endpoint Hello World
app.get('/hola', (req, res) => {
    res.json({ mensaje: `¡Hola Mundo desde Express ${id}!` });
});

app.get('/toFahrenheit', (req, res) => {
    const {celsius} = req.query;
    const fahrenheit = celsius*9/5 + 32;
    res.json({mensaje: `resultado: ${fahrenheit} °F`})
});

app.get('/ageGroup', (req, res) => {
    const {age} = req.query;
    const group = () => {
        switch (true) {
            case parseInt(age) >= 0 && parseInt(age) <= 5:
                return "Eres un bebé";
            case parseInt(age) > 5 && parseInt(age) <= 12:
                return "Eres un niño";
            case parseInt(age) >= 12 && parseInt(age) <= 20:
                return "Eres un adolescente";
            case parseInt(age) > 20 && parseInt(age) <= 40:
                return "Eres un adulto joven";
            case parseInt(age) > 40 && parseInt(age) <= 65:
                return "Eres un adulto";
            case parseInt(age) > 65 && parseInt(age) <= 110:
                return "Eres un adulto mayor";
            case parseInt(age) > 110:
                return "Eres un milagro";
            
            default:
                return "Escribe un número válido"
        }
    }
    res.json({mensaje: group()})
});

app.post('/parImpar',(req,res) =>{
    const {numero}= req.query;
    let par=0;
    let impar=0;

    const num = Number(numero);
    
    if (!Number.isInteger(num)) res.send("Escribe un número entero válido (en número, no en texto)");
    const abs = (num >= 0) ? num : -num;
    const numString = abs.toString();
    for (let digito of numString) {
        if (parseInt(digito) % 2 === 0) {
            par++;
        } else {
            impar++;
        }
    }
    res.send(`El número ${num} tiene ${par} par(es) y ${impar} impar(es)`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});