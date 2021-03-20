class People {
  static getName(req, res) {
    res.send("Nama saya Arif");
  }
  static getUmur(req, res) {
    res.send("umur saya 27 Tahun");
  }
}

module.exports = People;
