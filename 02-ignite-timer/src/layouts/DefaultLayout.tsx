import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

// Outlet é um espaço para ser inserido o conteúdo das rotas
// assim, o conteúdo específico da página será inserido no componente DefaultLayout

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
