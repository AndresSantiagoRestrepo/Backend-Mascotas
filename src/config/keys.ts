export namespace Keys {
  export const AESKey = 'Pr0g3@Ucaldas*';
  export const EmailFrom = 'andres.1701822130@ucaldas.edu.co';
  export const AsuntoRegistroUsuario = 'Registro en el sistema de Mascotas';
  export const jwtKey = 'CLav3@JWT';
  export const expTimeJWT = (Date.now() / 1000) + (60 * 60 * 10);
  export const twilioPhone = '+17163303151';
  export const carpetaImagenMascotas = "../../archivos/mascotas";
  export const nombreCampoImagenMascota = "file";
  export const extensionesPermitidasIMG: string[] = ['.PNG', '.JPG', '.JPEG', '.SVG'];
  export const tamMaxImagenMascota = 1024 * 1024;
  export const carpetaImagenPersonas = "../../archivos/personas";
  export const nombreCampoImagenPersona = "file";
  export const tamMaxImagenPersona = 2048 * 2048;
}
