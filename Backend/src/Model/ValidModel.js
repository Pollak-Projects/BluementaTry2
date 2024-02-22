class ValidModel {
  _UUID;
  _Nev;
  _Felhasznalonev;
  _Jelszo;
  _TitkositottJelszo;
  _Email
  _IsTanar;
  _Titok;

  constructor(
      nev,
      felhasznalonev,
      jelszo,
      email,
      isTanar
  ) {
    this._UUID = this.generateUUID();
    this._Nev = nev;
    this._Felhasznalonev = felhasznalonev;
    this._Jelszo = jelszo;
    this._Email = email;
    this._IsTanar = isTanar;
  }

  tikositJelszo() {
    // TODO befejezni
  }

  generateUUID() {
    // TODO befejezni
  }

  get Nev() {
    return this._Nev;
  }

  set Nev(value) {
    this._Nev = value;
  }

  get Felhasznalonev() {
    return this._Felhasznalonev;
  }

  set Felhasznalonev(value) {
    this._Felhasznalonev = value;
  }

  get Jelszo() {
    return this._Jelszo;
  }

  set Jelszo(value) {
    this._Jelszo = value;
  }

  get TitkositottJelszo() {
    return this._TitkositottJelszo;
  }

  set TitkositottJelszo(value) {
    this._TitkositottJelszo = value;
  }

  get Email() {
    return this._Email;
  }

  set Email(value) {
    this._Email = value;
  }

  get IsTanar() {
    return this._IsTanar;
  }

  set IsTanar(value) {
    this._IsTanar = value;
  }

  get Titok() {
    return this._Titok;
  }

  set Titok(value) {
    this._Titok = value;
  }
}