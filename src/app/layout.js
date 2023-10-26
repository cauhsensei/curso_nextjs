'use client'

import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {

  const pathname = usePathname();
  console.log(pathname);

  const isPublicPage = checkIsPublicRoute(pathname);
  console.log(isPublicPage);

  // SE o usuario estiver autenticado e acessar uma rota provada, ele deve conseguir visualizar a página

  // SE o usuario NÃO estiver autenticado e acessar uma rota privada, ele NÃO deve conseguir visualizar a página

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
