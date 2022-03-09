
import sketch from 'sketch'
import { localize } from "./common/language";

export function markAddSlice() {
  sketch.UI.message(localize("请使用快捷键control shift s 💖"))
}

export function exportable(context) {

  const settingText = {
    title: 'Slice with Padding',
    helper: 'Enter padding (e.g: 10, or 10;10;10;10)',
    defaultValue: 0,
    icon: './panel/assets/img/icon.png'
  }

  const Slices = {
    slice: function (layer, option) {
      const name = layer.name();
      const layers = MSLayerArray.arrayWithLayer(layer);
      const group = MSLayerGroup.groupWithLayers(layers);
      group.setName(name);
      const slice = MSSliceLayer.sliceLayerFromLayer(layer);
      slice.setName(name)

      let sliceFrame = slice.frame();
      let layerFrame = layer.frame();
      let padding;
      let temp_padding = option;
      //
      if (typeof option == "number") {
        padding = {
          top: temp_padding,
          right: temp_padding,
          bottom: temp_padding,
          left: temp_padding
        }
      } else {
        padding = Object.assign({
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, temp_padding)
      }
      sliceFrame.setX(Math.floor(layerFrame.x() - padding.set.left));
      sliceFrame.setY(Math.floor(layerFrame.y() - padding.set.top));
      sliceFrame.setWidth(Math.ceil(layerFrame.width() + padding.set.left + padding.set.right));
      sliceFrame.setHeight(Math.ceil(layerFrame.height() + padding.set.top + padding.set.bottom));

      //set slice to only do content
      slice.exportOptions().setLayerOptions(2);
      context.document.reloadInspector();

      // resize group
      group.layerDidEndResize();

      //use preset
      if (option.hasOwnProperty('preset')) {
        slice.exportOptions().setExportFormats(option.preset);
      }

      // create symbol
      if (option.hasOwnProperty('symbol') && option.symbol) {
        const groups = MSLayerArray.arrayWithLayers([layer, slice]);
        if (MSSymbolCreator.canCreateSymbolFromLayers(groups)) {
          MSSymbolCreator.createSymbolFromLayers_withName_onSymbolsPage(groups, name, true);
          group.ungroup();
        }
      }
      return slice
    },
    setting: function (amount) {
      let alert = COSAlertWindow.new();
      alert.setMessageText(localize(settingText.title));
      alert.addButtonWithTitle('Slice ' + amount + ' layer(s)');
      alert.addButtonWithTitle(localize("Cancel"));

      alert.addTextLabelWithValue(localize(settingText.helper));
      alert.addTextFieldWithValue(settingText.defaultValue);

      alert.setIcon(NSImage.alloc().initByReferencingFile(context.plugin.urlForResourceNamed(settingText.icon).path()));

      alert.addTextLabelWithValue(localize("Select an export preset"));
      alert.addAccessoryView(Slices.presetDropdown())

      // Symbol button
      let button = NSButton.alloc().initWithFrame(NSMakeRect(0, 0, 200.0, 25.0));
      button.setButtonType(NSSwitchButton);

      button.setTitle(localize("Create Symbol"));
      alert.addAccessoryView(button)

      let userInput = alert.runModal()
      if (userInput == "1000") {

        let set, preset, symbol;
        const setData = alert.viewAtIndex(1).stringValue().split(';').map(data => parseInt(data, 10));
        switch (setData.length) {
          case 1:
            set = {
              top: setData[0],
              right: setData[0],
              bottom: setData[0],
              left: setData[0]
            }
            break;
          case 2:
            set = {
              top: setData[0],
              bottom: setData[0],
              right: setData[1],
              left: setData[1]
            }
            break;
          case 3:
            set = {
              top: setData[0],
              bottom: setData[2],
              right: setData[1],
              left: setData[1]
            }
            break;
          case 4:
            set = {
              top: setData[0],
              right: setData[1],
              bottom: setData[2],
              left: setData[3]
            }
            break;
        }

        // get preset option
        const selectedPresetId = alert.viewAtIndex(3).indexOfSelectedItem()
        preset = MSExportPreset.allExportPresets()[selectedPresetId].exportFormats()
        // get symbol switch button state
        if (alert.viewAtIndex(4).state() == 1) {
          symbol = true;
        } else {
          symbol = false;
        }

        return {
          set,
          preset,
          symbol
        }
      }

      return
    },
    presetDropdown: function () {

      let values = [];
      let presets = MSExportPreset.allExportPresets();
      for (var i = 0; i < presets.length; i++) {
        values.push(presets[i].name() == '##DEFAULT##' ? (localize("default")) : presets[i].name());
      }
      let dropdown = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, 0, 200, 28));
      dropdown.addItemsWithTitles(values);

      return dropdown
    }
  }
  const doc = context.document;
  let selected = context.selection;
  if (selected.length == 0) {
    doc.showMessage(localize("Select any layer to mark!"))
    return
  }
  // setting(doc)
  let option = Slices.setting(selected.length);
  if (option != undefined) {
    selected.forEach(layer => {
      Slices.slice(layer, option);
    })
    doc.showMessage('sliced ' + selected.length + ' layer(s).');
  }

}