var mapPlanListaFunction = function(){
    emit(this.zile.retete.ingrediente.categorie, this.zile.retete.ingrediente.nume, this.zile.retete.ingrediente.cantitate);
};

var reducePlanListaFunction = function(categorie, nume, cantitate){
    return Array.sum(cantitate);
};

db.plan.mapReduce(
    mapPlanListaFunction,
    reducePlanListaFunction,
    {out: "example"}
);