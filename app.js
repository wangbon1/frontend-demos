const items = [
  { name: '苹果' },
  { name: '香蕉' },
  { name: '橙子' },
]

function renderList(list) {
  const ul = document.getElementById('list')
  ul.innerHTML = ''

  const summary = document.createElement('li')
  summary.className = 'empty'
  // 列表为空时 list[0] 是 undefined，只显示总数，不拼第一项
  summary.textContent = list.length === 0 ? `共 ${list.length} 项` : `共 ${list.length} 项，第一项：${list[0].name}`
  ul.appendChild(summary)

  for (const item of list) {
    const li = document.createElement('li')
    li.textContent = item.name
    ul.appendChild(li)
  }
}

renderList(items)

document.getElementById('clear').addEventListener('click', () => {
  renderList([])
})
