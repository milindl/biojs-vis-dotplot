var  biojsvisdotplot;
var DotPlot = require('./dotplot.js');
module.exports = biojsvisdotplot = function(opts){
    this.el = opts.el;
    this.el.id = "main";
    this.dp = new DotPlot(opts.seq1, opts.seq2);
    this.el.textContent = this.dp.getMatrix();
};

biojsvisdotplot.display = function () {
    return this.dp.getMatrix();
};
