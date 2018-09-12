const getFormFields = require('../../../lib/get-form-fields.js')
const ImageUi = require('./ui.js')
const ImageApi = require('./api.js')
// const store = require('../store')

const onUploadImage = function (event) {
  console.log(`upload image click`)
  event.preventDefault()
  const formData = new FormData(event.target)
  console.log(`data is`, formData)
  // store.image = data.image
  ImageApi.uploadImage(formData)
  // console.log(`data is`, data)
    .then(ImageUi.uploadImageSuccess)
    .catch(ImageUi.uploadImageError)
}

// const input = document.querySelector('input')
// const preview = document.querySelector('.preview')
//
// input.style.opacity = 0
// function updateImageDisplay () {
//   console.log(`click happened`)
//   while (preview.firstChild) {
//     preview.removeChild(preview.firstChild)
//   }
//   input.addEventListener('change', updateImageDisplay)
//
//   const curFiles = input.files
//   if (curFiles.length === 0) {
//     const para = document.createElement('p')
//     para.textContent = 'No files currently selected for upload'
//     preview.appendChild(para)
//   } else {
//     const list = document.createElement('ol')
//     preview.appendChild(list)
//     for (let i = 0; i < curFiles.length; i++) {
//       let listItem = document.createElement('li')
//       let para = document.createElement('p')
//       if (validFileType(curFiles[i])) {
//         para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.'
//         const image = document.createElement('img')
//         image.src = window.URL.createObjectURL(curFiles[i])
//         listItem.appendChild(image)
//         listItem.appendChild(para)
//       } else {
//         para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.'
//         listItem.appendChild(para)
//       }
//
//       list.appendChild(listItem)
//     }
//   }
// }

module.exports = {
  // updateImageDisplay,
  // input,
  // preview,
  onUploadImage
}
