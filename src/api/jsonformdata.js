export default {
  JsonData(data) {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      formData.append('data['+ key + ']', data[key])
    })
    return formData
  }
}
