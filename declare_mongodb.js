var reteta = new Schema {
	nume: String,
	origine: String,
	origine_url: String,
	ingrediente: [Ingrediente],
	instructiuni: [Instructiuni]
}