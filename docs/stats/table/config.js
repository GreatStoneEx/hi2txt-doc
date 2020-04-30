function transformForSort(obj, sortKey) {
  if (typeof obj[sortKey] != 'undefined') {
    if (sortKey === 'version') {
	  if (obj[sortKey].toString().startsWith("0.")) {
		var newvalue = obj[sortKey].toString().substring(2).replace(/[b]/,'.0').replace(/(rc|u)/,'.');
		return parseFloat(newvalue, 10);
	  }
    }
  }
  return obj[sortKey];
}

var TestData = {
    data: data,
    columns: columns
}

var table = $('#root').tableSortable({
    data: TestData.data,
    columns: TestData.columns,
    dateParsing: false,
	sortingFunction : transformForSort,
	sortingIcons: {asc: '<span>&dtrif;</span>', dec: '<span>&utrif;</span>' },
    processHtml: function(row, key) {
        if (key === 'avatar_url') {
            return '<a href="' + row[key] + '" target="_blank">View Avatar</a>'
        }
        if (key === 'url') {
            return '<a href="' + row[key] + '" target="_blank">Github Link</a>'
        }
        if (key === 'site_admin' && row[key]) {
            return '<span class="btn btn-warning btn-sm">Admin</span>'
        }
		if (typeof row[key] === 'undefined') {
	        return  ''
		}
        return row[key]
    },
    columnsHtml: function(value, key) {
        return value;
    },
    pagination: 500,
    showPaginationLabel: true,
    prevText: 'Prev',
    nextText: 'Next',
    searchField: $('#search'),
    responsive: [
        {
            maxWidth: 992,
            minWidth: 769,
            columns: TestData.col,
            pagination: true,
            paginationLength: 20
        },
        {
            maxWidth: 768,
            minWidth: 0,
            columns: TestData.colXS,
            pagination: true,
            paginationLength: 100
        }
    ],
	events: {
	  onInit: function() {
		colorRows()
	  },
	  onUpdate: function() {
		colorRows()
	  }
	  
	}
})

