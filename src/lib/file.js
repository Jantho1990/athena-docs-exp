import { saveAs } from 'file-saver'

export function saveJson (payload) {
  const { json, name } = payload

  const blob = new Blob([JSON.stringify(json)], {type: 'application/json'})

  saveAs(blob, name)
}
