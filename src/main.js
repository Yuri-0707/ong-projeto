import './style.css'

const el = document.querySelector('#status')

fetch('/api/health')
  .then((res) => res.json())
  .then((data) => {
    const quando = new Date(data.timestamp).toLocaleString('pt-BR')
    el.textContent = `Status da API: ${data.status} (${quando})`
  })
  .catch(() => {
    el.textContent = 'Status da API: erro'
  })
