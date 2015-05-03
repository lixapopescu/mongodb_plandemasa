-- pe o anumita categorie
select i.nume, i.um, sum(i.cantitate), collection(pr.abreviere), collection(ri.comentariu), collection(pr.zi_index)
from plan p
join plan_reteta pr on pr.plan_id = p.plan_id
join reteta r on pr.reteta_id = p.plan_id
join reteta_ing ri on r.reteta_id = ri.reteta_id
join ingrediente i on i.ingredient_id = ri.ingredient_id
group by i.nume, i.um
where p.saptamana = 19
and i.categorie = t.nume_categorie

/**get categorie**/
select i.categorie nume_categorie, count(distinct(i.nume)) total_categorie
from plan p
join plan_reteta pr on pr.plan_id = p.plan_id
join reteta r on pr.reteta_id = p.plan_id
join reteta_ing ri on r.reteta_id = ri.reteta_id
join ingrediente i on i.ingredient_id = ri.ingredient_id
group by i.nume_categorie
where p.saptamana = 19