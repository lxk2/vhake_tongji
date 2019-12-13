export default {
  tableRowClassName ({ row, rowIndex }) {
    let className = 'x-center'
    if (rowIndex % 2 !== 0) {
      className += ' shadow-row'
    }
    return className
  }
}
