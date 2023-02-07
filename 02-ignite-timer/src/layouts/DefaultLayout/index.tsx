import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

// Outlet é um espaço para ser inserido o conteúdo das rotas
// assim, o conteúdo específico da página será inserido no componente DefaultLayout

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
