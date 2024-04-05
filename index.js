const express = require('express');
const { connection, sequelize } = require("./database/connection"); // Importa la función de conexión y sequelize
const cors = require("cors");

// Importar rutas
const UserRoutes = require("./routes/Usuario");
const EmpresaRoutes = require("./routes/Empresa");
const RolRoutes = require("./routes/Rol")
const UsuarioEmpresaRoutes = require("./routes/UsuarioEmpresa")
const PuntoVentaRoutes = require("./routes/PuntoVenta")

//Mensaje bienvenida
console.log("API NODE para puntos de venta arrancada!!");

//Conexion a bbdd
connection(); 

//Crear servidor node
const app = express();
const puerto = 3900;

//Configurar cors
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cargar conf rutas
app.use("/api/crear_usuario", UserRoutes);
app.use("/api/crearEmpresa", EmpresaRoutes);
app.use("/api/crearRol",RolRoutes)
app.use("/api/crearUsuarioEmpresa",UsuarioEmpresaRoutes)
app.use("/api/crearPuntoVenta",PuntoVentaRoutes)

// Iniciar servidor
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
