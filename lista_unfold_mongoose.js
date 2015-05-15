Plan.aggregate()
.unwind('zile')
.unwind('zile.retete.ingrediente')