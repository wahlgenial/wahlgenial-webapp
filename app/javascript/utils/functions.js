export const isDeviceMobile = () => {
  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    return true
  } else {
    return false
  }
}

export default {
  isDeviceMobile
}
