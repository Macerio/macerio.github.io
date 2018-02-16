// create an array with nodes
var nodes = new vis.DataSet([
{id: "Myriel", "group": 1},
    {id: "Napoleon", "group": 1},
    {id: "Mlle.Baptistine", "group": 1},
    {id: "Mme.Magloire", "group": 1},
    {id: "CountessdeLo", "group": 1},
    {id: "Geborand", "group": 1},
    {id: "Champtercier", "group": 1},
    {id: "Cravatte", "group": 1},
    {id: "Count", "group": 1},
    {id: "OldMan", "group": 1},
    {id: "Labarre", "group": 2},
    {id: "Valjean", "group": 2},
    {id: "Marguerite", "group": 3},
    {id: "Mme.deR", "group": 2},
    {id: "Isabeau", "group": 2},
    {id: "Gervais", "group": 2},
    {id: "Tholomyes", "group": 3},
    {id: "Listolier", "group": 3},
    {id: "Fameuil", "group": 3},
    {id: "Blacheville", "group": 3},
    {id: "Favourite", "group": 3},
    {id: "Dahlia", "group": 3},
    {id: "Zephine", "group": 3},
    {id: "Fantine", "group": 3},
    {id: "Mme.Thenardier", "group": 4},
    {id: "Thenardier", "group": 4},
    {id: "Cosette", "group": 5},
    {id: "Javert", "group": 4},
    {id: "Fauchelevent", "group": 0},
    {id: "Bamatabois", "group": 2},
    {id: "Perpetue", "group": 3},
    {id: "Simplice", "group": 2},
    {id: "Scaufflaire", "group": 2},
    {id: "Woman1", "group": 2},
    {id: "Judge", "group": 2}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: "Napoleon", to: "Myriel", "value": 1},
    {from: "Mlle.Baptistine", to: "Myriel", "value": 8},
    {from: "Mme.Magloire", to: "Myriel", "value": 10},
    {from: "Mme.Magloire", to: "Mlle.Baptistine", "value": 6},
    {from: "CountessdeLo", to: "Myriel", "value": 1},
    {from: "Geborand", to: "Myriel", "value": 1},
    {from: "Champtercier", to: "Myriel", "value": 1},
    {from: "Cravatte", to: "Myriel", "value": 1},
    {from: "Count", to: "Myriel", "value": 2},
    {from: "OldMan", to: "Myriel", "value": 1},
    {from: "Valjean", to: "Labarre", "value": 1},
    {from: "Valjean", to: "Mme.Magloire", "value": 3},
    {from: "Valjean", to: "Mlle.Baptistine", "value": 3},
    {from: "Valjean", to: "Myriel", "value": 5},
    {from: "Marguerite", to: "Valjean", "value": 1},
    {from: "Mme.deR", to: "Valjean", "value": 1},
    {from: "Isabeau", to: "Valjean", "value": 1},
    {from: "Gervais", to: "Valjean", "value": 1},
    {from: "Listolier", to: "Tholomyes", "value": 4},
    {from: "Fameuil", to: "Tholomyes", "value": 4},
    {from: "Fameuil", to: "Listolier", "value": 4},
    {from: "Blacheville", to: "Tholomyes", "value": 4},
    {from: "Blacheville", to: "Listolier", "value": 4},
    {from: "Blacheville", to: "Fameuil", "value": 4},
    {from: "Favourite", to: "Tholomyes", "value": 3},
    {from: "Favourite", to: "Listolier", "value": 3},
    {from: "Favourite", to: "Fameuil", "value": 3},
    {from: "Favourite", to: "Blacheville", "value": 4},
    {from: "Dahlia", to: "Tholomyes", "value": 3},
    {from: "Dahlia", to: "Listolier", "value": 3},
    {from: "Dahlia", to: "Fameuil", "value": 3},
    {from: "Dahlia", to: "Blacheville", "value": 3},
    {from: "Dahlia", to: "Favourite", "value": 5},
    {from: "Zephine", to: "Tholomyes", "value": 3},
    {from: "Zephine", to: "Listolier", "value": 3},
    {from: "Zephine", to: "Fameuil", "value": 3},
    {from: "Zephine", to: "Blacheville", "value": 3},
    {from: "Zephine", to: "Favourite", "value": 4},
    {from: "Zephine", to: "Dahlia", "value": 4},
    {from: "Fantine", to: "Tholomyes", "value": 3},
    {from: "Fantine", to: "Listolier", "value": 3},
    {from: "Fantine", to: "Fameuil", "value": 3},
    {from: "Fantine", to: "Blacheville", "value": 3},
    {from: "Fantine", to: "Favourite", "value": 4},
    {from: "Fantine", to: "Dahlia", "value": 4},
    {from: "Fantine", to: "Zephine", "value": 4},
    {from: "Fantine", to: "Marguerite", "value": 2},
    {from: "Fantine", to: "Valjean", "value": 9},
    {from: "Mme.Thenardier", to: "Fantine", "value": 2},
    {from: "Mme.Thenardier", to: "Valjean", "value": 7},
    {from: "Thenardier", to: "Mme.Thenardier", "value": 13},
    {from: "Thenardier", to: "Fantine", "value": 1},
    {from: "Thenardier", to: "Valjean", "value": 12},
    {from: "Cosette", to: "Mme.Thenardier", "value": 4},
    {from: "Cosette", to: "Valjean", "value": 31},
    {from: "Cosette", to: "Tholomyes", "value": 1},
    {from: "Cosette", to: "Thenardier", "value": 1},
    {from: "Javert", to: "Valjean", "value": 17},
    {from: "Javert", to: "Fantine", "value": 5},
    {from: "Javert", to: "Thenardier", "value": 5},
    {from: "Javert", to: "Mme.Thenardier", "value": 1},
    {from: "Javert", to: "Cosette", "value": 1},
    {from: "Fauchelevent", to: "Valjean", "value": 8},
    {from: "Fauchelevent", to: "Javert", "value": 1},
    {from: "Bamatabois", to: "Fantine", "value": 1},
    {from: "Bamatabois", to: "Javert", "value": 1},
    {from: "Bamatabois", to: "Valjean", "value": 2},
    {from: "Perpetue", to: "Fantine", "value": 1},
    {from: "Simplice", to: "Perpetue", "value": 2},
    {from: "Simplice", to: "Valjean", "value": 3},
    {from: "Simplice", to: "Fantine", "value": 2},
    {from: "Simplice", to: "Javert", "value": 1},
    {from: "Scaufflaire", to: "Valjean", "value": 1},
    {from: "Woman1", to: "Valjean", "value": 2},
    {from: "Woman1", to: "Javert", "value": 1},
    {from: "Judge", to: "Valjean", "value": 3},
    {from: "Judge", to: "Bamatabois", "value": 2},
    {from: "Champmathieu", to: "Valjean", "value": 3},
    {from: "Champmathieu", to: "Judge", "value": 3},
    {from: "Champmathieu", to: "Bamatabois", "value": 2},
    {from: "Brevet", to: "Judge", "value": 2},
    {from: "Brevet", to: "Champmathieu", "value": 2},
    {from: "Brevet", to: "Valjean", "value": 2},
    {from: "Brevet", to: "Bamatabois", "value": 1},
    {from: "Chenildieu", to: "Judge", "value": 2},
    {from: "Chenildieu", to: "Champmathieu", "value": 2},
    {from: "Chenildieu", to: "Brevet", "value": 2},
    {from: "Chenildieu", to: "Valjean", "value": 2},
    {from: "Chenildieu", to: "Bamatabois", "value": 1},
    {from: "Cochepaille", to: "Judge", "value": 2},
    {from: "Cochepaille", to: "Champmathieu", "value": 2},
    {from: "Cochepaille", to: "Brevet", "value": 2},
    {from: "Cochepaille", to: "Chenildieu", "value": 2},
    {from: "Cochepaille", to: "Valjean", "value": 2},
    {from: "Cochepaille", to: "Bamatabois", "value": 1},
    {from: "Pontmercy", to: "Thenardier", "value": 1},
    {from: "Boulatruelle", to: "Thenardier", "value": 1},
    {from: "Eponine", to: "Mme.Thenardier", "value": 2},
    {from: "Eponine", to: "Thenardier", "value": 3},
    {from: "Anzelma", to: "Eponine", "value": 2},
    {from: "Anzelma", to: "Thenardier", "value": 2},
    {from: "Anzelma", to: "Mme.Thenardier", "value": 1},
    {from: "Woman2", to: "Valjean", "value": 3},
    {from: "Woman2", to: "Cosette", "value": 1},
    {from: "Woman2", to: "Javert", "value": 1},
    {from: "MotherInnocent", to: "Fauchelevent", "value": 3},
    {from: "MotherInnocent", to: "Valjean", "value": 1},
    {from: "Gribier", to: "Fauchelevent", "value": 2},
    {from: "Mme.Burgon", to: "Jondrette", "value": 1},
    {from: "Gavroche", to: "Mme.Burgon", "value": 2},
    {from: "Gavroche", to: "Thenardier", "value": 1},
    {from: "Gavroche", to: "Javert", "value": 1},
    {from: "Gavroche", to: "Valjean", "value": 1},
    {from: "Gillenormand", to: "Cosette", "value": 3},
    {from: "Gillenormand", to: "Valjean", "value": 2},
    {from: "Magnon", to: "Gillenormand", "value": 1},
    {from: "Magnon", to: "Mme.Thenardier", "value": 1},
    {from: "Mlle.Gillenormand", to: "Gillenormand", "value": 9},
    {from: "Mlle.Gillenormand", to: "Cosette", "value": 2},
    {from: "Mlle.Gillenormand", to: "Valjean", "value": 2},
    {from: "Mme.Pontmercy", to: "Mlle.Gillenormand", "value": 1},
    {from: "Mme.Pontmercy", to: "Pontmercy", "value": 1},
    {from: "Mlle.Vaubois", to: "Mlle.Gillenormand", "value": 1},
    {from: "Lt.Gillenormand", to: "Mlle.Gillenormand", "value": 2},
    {from: "Lt.Gillenormand", to: "Gillenormand", "value": 1},
    {from: "Lt.Gillenormand", to: "Cosette", "value": 1},
    {from: "Marius", to: "Mlle.Gillenormand", "value": 6},
    {from: "Marius", to: "Gillenormand", "value": 12},
    {from: "Marius", to: "Pontmercy", "value": 1},
    {from: "Marius", to: "Lt.Gillenormand", "value": 1},
    {from: "Marius", to: "Cosette", "value": 21},
    {from: "Marius", to: "Valjean", "value": 19},
    {from: "Marius", to: "Tholomyes", "value": 1},
    {from: "Marius", to: "Thenardier", "value": 2},
    {from: "Marius", to: "Eponine", "value": 5},
    {from: "Marius", to: "Gavroche", "value": 4},
    {from: "BaronessT", to: "Gillenormand", "value": 1},
    {from: "BaronessT", to: "Marius", "value": 1},
    {from: "Mabeuf", to: "Marius", "value": 1},
    {from: "Mabeuf", to: "Eponine", "value": 1},
    {from: "Mabeuf", to: "Gavroche", "value": 1},
    {from: "Enjolras", to: "Marius", "value": 7},
    {from: "Enjolras", to: "Gavroche", "value": 7},
    {from: "Enjolras", to: "Javert", "value": 6},
    {from: "Enjolras", to: "Mabeuf", "value": 1},
    {from: "Enjolras", to: "Valjean", "value": 4},
    {from: "Combeferre", to: "Enjolras", "value": 15},
    {from: "Combeferre", to: "Marius", "value": 5},
    {from: "Combeferre", to: "Gavroche", "value": 6},
    {from: "Combeferre", to: "Mabeuf", "value": 2},
    {from: "Prouvaire", to: "Gavroche", "value": 1},
    {from: "Prouvaire", to: "Enjolras", "value": 4},
    {from: "Prouvaire", to: "Combeferre", "value": 2},
    {from: "Feuilly", to: "Gavroche", "value": 2},
    {from: "Feuilly", to: "Enjolras", "value": 6},
    {from: "Feuilly", to: "Prouvaire", "value": 2},
    {from: "Feuilly", to: "Combeferre", "value": 5},
    {from: "Feuilly", to: "Mabeuf", "value": 1},
    {from: "Feuilly", to: "Marius", "value": 1},
    {from: "Courfeyrac", to: "Marius", "value": 9},
    {from: "Courfeyrac", to: "Enjolras", "value": 17},
    {from: "Courfeyrac", to: "Combeferre", "value": 13},
    {from: "Courfeyrac", to: "Gavroche", "value": 7},
    {from: "Courfeyrac", to: "Mabeuf", "value": 2},
    {from: "Courfeyrac", to: "Eponine", "value": 1},
    {from: "Courfeyrac", to: "Feuilly", "value": 6},
    {from: "Courfeyrac", to: "Prouvaire", "value": 3},
    {from: "Bahorel", to: "Combeferre", "value": 5},
    {from: "Bahorel", to: "Gavroche", "value": 5},
    {from: "Bahorel", to: "Courfeyrac", "value": 6},
    {from: "Bahorel", to: "Mabeuf", "value": 2},
    {from: "Bahorel", to: "Enjolras", "value": 4},
    {from: "Bahorel", to: "Feuilly", "value": 3},
    {from: "Bahorel", to: "Prouvaire", "value": 2},
    {from: "Bahorel", to: "Marius", "value": 1},
    {from: "Bossuet", to: "Marius", "value": 5},
    {from: "Bossuet", to: "Courfeyrac", "value": 12},
    {from: "Bossuet", to: "Gavroche", "value": 5},
    {from: "Bossuet", to: "Bahorel", "value": 4},
    {from: "Bossuet", to: "Enjolras", "value": 10},
    {from: "Bossuet", to: "Feuilly", "value": 6},
    {from: "Bossuet", to: "Prouvaire", "value": 2},
    {from: "Bossuet", to: "Combeferre", "value": 9},
    {from: "Bossuet", to: "Mabeuf", "value": 1},
    {from: "Bossuet", to: "Valjean", "value": 1},
    {from: "Joly", to: "Bahorel", "value": 5},
    {from: "Joly", to: "Bossuet", "value": 7},
    {from: "Joly", to: "Gavroche", "value": 3},
    {from: "Joly", to: "Courfeyrac", "value": 5},
    {from: "Joly", to: "Enjolras", "value": 5},
    {from: "Joly", to: "Feuilly", "value": 5},
    {from: "Joly", to: "Prouvaire", "value": 2},
    {from: "Joly", to: "Combeferre", "value": 5},
    {from: "Joly", to: "Mabeuf", "value": 1},
    {from: "Joly", to: "Marius", "value": 2},
    {from: "Grantaire", to: "Bossuet", "value": 3},
    {from: "Grantaire", to: "Enjolras", "value": 3},
    {from: "Grantaire", to: "Combeferre", "value": 1},
    {from: "Grantaire", to: "Courfeyrac", "value": 2},
    {from: "Grantaire", to: "Joly", "value": 2},
    {from: "Grantaire", to: "Gavroche", "value": 1},
    {from: "Grantaire", to: "Bahorel", "value": 1},
    {from: "Grantaire", to: "Feuilly", "value": 1},
    {from: "Grantaire", to: "Prouvaire", "value": 1},
    {from: "MotherPlutarch", to: "Mabeuf", "value": 3},
    {from: "Gueulemer", to: "Thenardier", "value": 5},
    {from: "Gueulemer", to: "Valjean", "value": 1},
    {from: "Gueulemer", to: "Mme.Thenardier", "value": 1},
    {from: "Gueulemer", to: "Javert", "value": 1},
    {from: "Gueulemer", to: "Gavroche", "value": 1},
    {from: "Gueulemer", to: "Eponine", "value": 1},
    {from: "Babet", to: "Thenardier", "value": 6},
    {from: "Babet", to: "Gueulemer", "value": 6},
    {from: "Babet", to: "Valjean", "value": 1},
    {from: "Babet", to: "Mme.Thenardier", "value": 1},
    {from: "Babet", to: "Javert", "value": 2},
    {from: "Babet", to: "Gavroche", "value": 1},
    {from: "Babet", to: "Eponine", "value": 1},
    {from: "Claquesous", to: "Thenardier", "value": 4},
    {from: "Claquesous", to: "Babet", "value": 4},
    {from: "Claquesous", to: "Gueulemer", "value": 4},
    {from: "Claquesous", to: "Valjean", "value": 1},
    {from: "Claquesous", to: "Mme.Thenardier", "value": 1},
    {from: "Claquesous", to: "Javert", "value": 1},
    {from: "Claquesous", to: "Eponine", "value": 1},
    {from: "Claquesous", to: "Enjolras", "value": 1},
    {from: "Montparnasse", to: "Javert", "value": 1},
    {from: "Montparnasse", to: "Babet", "value": 2},
    {from: "Montparnasse", to: "Gueulemer", "value": 2},
    {from: "Montparnasse", to: "Claquesous", "value": 2},
    {from: "Montparnasse", to: "Valjean", "value": 1},
    {from: "Montparnasse", to: "Gavroche", "value": 1},
    {from: "Montparnasse", to: "Eponine", "value": 1},
    {from: "Montparnasse", to: "Thenardier", "value": 1},
    {from: "Toussaint", to: "Cosette", "value": 2},
    {from: "Toussaint", to: "Javert", "value": 1},
    {from: "Toussaint", to: "Valjean", "value": 1},
    {from: "Child1", to: "Gavroche", "value": 2},
    {from: "Child2", to: "Gavroche", "value": 2},
    {from: "Child2", to: "Child1", "value": 3},
    {from: "Brujon", to: "Babet", "value": 3},
    {from: "Brujon", to: "Gueulemer", "value": 3},
    {from: "Brujon", to: "Thenardier", "value": 3},
    {from: "Brujon", to: "Gavroche", "value": 1},
    {from: "Brujon", to: "Eponine", "value": 1},
    {from: "Brujon", to: "Claquesous", "value": 1},
    {from: "Brujon", to: "Montparnasse", "value": 1},
    {from: "Mme.Hucheloup", to: "Bossuet", "value": 1},
    {from: "Mme.Hucheloup", to: "Joly", "value": 1},
    {from: "Mme.Hucheloup", to: "Grantaire", "value": 1},
    {from: "Mme.Hucheloup", to: "Bahorel", "value": 1},
    {from: "Mme.Hucheloup", to: "Courfeyrac", "value": 1},
    {from: "Mme.Hucheloup", to: "Gavroche", "value": 1},
    {from: "Mme.Hucheloup", to: "Enjolras", "value": 1}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
clickToUse: true,
layout: {
  improvedLayout: true,
  randomSeed: 1
},
};
var network = new vis.Network(container, data, options);

var applied = false
Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.indexh == 4 && !applied) {
      applied = true
	// initialize your network!
	network = new vis.Network(container, data, options);
    }
} );


Reveal.addEventListener( 'fragmenthidden', function( event ) {
  if ( Reveal.getState().indexh == 11){
    network.setData(data)
  }
} );

Reveal.addEventListener( 'fragmentshown', function( event ) {
  if ( Reveal.getState().indexh == 11){
    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 1, color: 'red'},
        {id: 2, color: 'green'},
        {id: 3, color: 'blue'},
        {id: 4, color: 'red'},
        {id: 5, color: 'blue'},
        {id: 6, color: 'red'},
        {id: 7, color: 'blue'},
        {id: 8, color: 'green'},
    ]);
    
    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3, color: 'white'},
        {from: 1, to: 2, color: 'white'},
        {from: 2, to: 4, color: 'white'},
        {from: 2, to: 3, color: 'white'},
        {from: 2, to: 5, color: 'white'},
        {from: 2, to: 6, color: 'white'},
        {from: 6, to: 7, color: 'white'},
        {from: 6, to: 8, color: 'white'},
        {from: 4, to: 7, color: 'white'},
        {from: 5, to: 4, color: 'white'},
        {from: 3, to: 8, color: 'white'},
    ]);
    
    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    network.setData(data)

  }
} );

// Treee
// create an array with nodes
var tree_nodes = new vis.DataSet([
    {id: 1, font:{size: 28}},
    {id: 2, font:{size: 28}},
    {id: 3, font:{size: 28}},
    {id: 4, font:{size: 28}},
    {id: 5, font:{size: 28}},
    {id: 6, font:{size: 28}},
    {id: 7, font:{size: 28}},
    {id: 8, font:{size: 28}},
    {id: 9, font:{size: 28}},
    {id: 10, font:{size: 28}},
]);

// create an array with edges
var tree_edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 6},
    {from: 3, to: 7},
    {from: 7, to: 8},
    {from: 8, to: 9},
    {from: 6, to: 10},
]);

// create a network
var tree_container = document.getElementById('tree_network');

// provide the data in the vis format
var tree_data = {
    nodes: tree_nodes,
    edges: tree_edges
};
var tree_options = {
  clickToUse: false,
  height: '500px',
  layout: {
    improvedLayout: true,
    hierarchical: {
      enabled: true,
      sortMethod: 'directed',
    }
  },
  interaction:{
    dragNodes:false,
    dragView: true,
    selectable: true,
    zoomView: true
  }

};
var tree_network = new vis.Network(tree_container, tree_data, tree_options);

var tree_applied = false
Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.indexh == 21 && !tree_applied) {
      tree_applied = true
      // initialize your network!
      tree_network = new vis.Network(tree_container, tree_data, tree_options);
    }
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
  if (event.fragment.id == 'tree_add_node'){
    tree_edges.remove( 1 )
    tree_network.setData(tree_data)
  }
})

Reveal.addEventListener( 'fragmentshown', function( event ) {
  if (event.fragment.id == 'tree_add_node'){
    tree_edges.add( {id:1, from: 10, to: 9} )
    tree_network.setData(tree_data)
  }
})

Reveal.addEventListener( 'fragmenthidden', function( event ) {
  if (event.fragment.id == 'tree_add_label'){
    tree_network.setData(tree_data)
  }
})

Reveal.addEventListener( 'fragmentshown', function( event ) {
  if (event.fragment.id == 'tree_add_label'){
    var tree_nodes = new vis.DataSet([
        {id: 1, label: '0', font:{size: 28}},
        {id: 2, label: '1', font:{size: 28}},
        {id: 3, label: '1', font:{size: 28}},
        {id: 4, label: '2', font:{size: 28}},
        {id: 5, label: '2', font:{size: 28}},
        {id: 6, label: '2', font:{size: 28}},
        {id: 7, label: '2', font:{size: 28}},
        {id: 8, label: '3', font:{size: 28}},
        {id: 9, label: '4', font:{size: 28}},
        {id: 10, label: '3', font:{size: 28}},
    ]);
    var tree_data = {
      nodes: tree_nodes,
      edges: tree_edges
    };
    tree_network.setData(tree_data)
  }
})
