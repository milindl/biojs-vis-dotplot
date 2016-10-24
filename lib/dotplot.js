var DotPlot = function(seq1, seq2) {
    this.mat = [];
    for (var i = 0; i !== seq1.length; i++) {
	var row = [];
	for(var j = 0; j !== seq2.length; j++) {
	    if (this.partCompare(seq1[i], seq2[j])) {
		row.push(1);
	    }
	    else {
		row.push(0);
	    }
	}
	this.mat.push(row);
    }
};

DotPlot.prototype.getMatrix = function() {
    var retStr = "";
    for (var i = 0; i !== this.mat.length; i++) {
	for (var j = 0; j !== this.mat[i].length; j++) {
	    retStr += this.mat[i][j] + "";
	}
	retStr += "\n";
    }
    return retStr;
};

DotPlot.prototype.partCompare = function(s1, s2) {
    return s1===s2;
};

module.exports = DotPlot;
