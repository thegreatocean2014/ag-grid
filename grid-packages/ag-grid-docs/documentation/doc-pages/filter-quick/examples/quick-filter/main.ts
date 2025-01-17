import { Grid, GridOptions, ICellRendererParams } from '@ag-grid-community/core'

const BoldRenderer = function (params: ICellRendererParams) {
  return '<b>' + params.value.name + '</b>'
};

const gridOptions: GridOptions = {
  columnDefs: [
    // simple column, easy to understand
    { headerName: 'A', field: 'a' },
    // the grid works with embedded fields
    { headerName: 'B', field: 'b.name' },
    // or use value getter, all works with quick filter
    { headerName: 'C', valueGetter: "'zz' + data.c.name" },
    // or use the object value, so value passed around is an object
    {
      headerName: 'D',
      field: 'd',
      cellRenderer: BoldRenderer,
      // this is needed to avoid toString=[object,object] result with objects
      getQuickFilterText: function (params) {
        return params.value.name
      },
    },
    // this fails filter - it's working with a complex object, so the quick filter
    // text gets [object,object]
    {
      headerName: 'E',
      field: 'e',
      cellRenderer: BoldRenderer,
    },
  ],
  defaultColDef: {
    flex: 1,
    editable: true,
  },
  rowData: getData(),
  cacheQuickFilter: true,
}


function onFilterTextBoxChanged() {
  gridOptions.api!.setQuickFilter(
    (document.getElementById('filter-text-box') as HTMLInputElement).value
  )
}

function onPrintQuickFilterTexts() {
  gridOptions.api!.forEachNode(function (rowNode, index) {
    console.log(
      'Row ' +
      index +
      ' quick filter text is ' +
      rowNode.quickFilterAggregateText
    )
  })
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)
})
