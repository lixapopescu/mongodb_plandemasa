conn = new Mongo(localhost:27107);
db = conn.getDB("plandemasa");

load("reteta_perisoare_cu_sos_rosii.js");
load("reteta_salata_pastrav_afumat.js");
load("reteta_somon_tava_vara.js");
load("retete_chiftelute_mozzarella.js");
load("retete_pui_mustar_cartofi_rapizi_verdeturi.js");
load("retete_tocanita_de_miel_couscous.js");

load("plan21.js");

