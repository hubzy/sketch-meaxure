import sketch from 'sketch'

export  function markAddSlice() {
  var doc = sketch.getSelectedDocument()
  var layers = doc.selectedLayers
  var selectedCount = layers.length

  if (selectedCount === 0) {
    sketch.UI.message('No layers are selected.')
  } else {
    layers.forEach(item => {
      item.exportFormats =  [ {
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '',
    size: '1x' },
   {
    type: 'ExportFormat',
    fileFormat: 'png',
    suffix: '@2x',
    size: '2x' },
   {
    type: 'ExportFormat',
    fileFormat: 'svg',
    suffix: '@3x',
    size: '3x' } ]
        }
    )

  }

}
