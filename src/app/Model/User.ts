export class User{

  constructor(nama : string, umur : string, alamat : string){
      this.nama = nama;
      this.umur = umur;
      this.alamat = alamat;
  }

  nama !: string;
  umur !: string;
  alamat !: string;

}
