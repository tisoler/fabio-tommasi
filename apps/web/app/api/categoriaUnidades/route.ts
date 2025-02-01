import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USUARIO,
  password: process.env.DB_CLAVE,
  database: process.env.DB_NOMBRE,
};

const pool = mysql.createPool(dbConfig);

// GET obtener unidades para una categoria
export async function GET(request: NextRequest) {
  try {
    const idCategoria = request.nextUrl.searchParams.get("idCategoria");
    const [rows] = await pool.execute(`SELECT * FROM unidades WHERE idCategoria = ${idCategoria}`);
    
    return NextResponse.json({
      success: true,
      data: rows
    }, { status: 200 });
  } catch (error) {
    console.error('Error en consulta de BD:', error);
    return NextResponse.json({
      success: false,
      message: 'Error obteniendo unidades para la categoría'
    }, { status: 500 });
  }
}