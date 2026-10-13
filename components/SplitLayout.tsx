import { clsx } from "clsx";

/**
 * Layout desktop dos módulos: formulário de inclusão SEMPRE à esquerda e fixo
 * (sticky) ao rolar a lista; conteúdo à direita.
 *
 * No mobile a ordem original é preservada: top → aside → children.
 * No desktop (md+): aside ocupa a coluna esquerda (340px) e acompanha a rolagem;
 * `top` (indicadores/filtros) e `children` (listas) ficam empilhados na direita.
 */
export function SplitLayout({
  top,
  aside,
  children,
  className,
}: {
  top?: React.ReactNode;
  aside: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 md:grid md:grid-cols-[340px_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-x-6 md:gap-y-5 md:items-start",
        className
      )}
    >
      {top && <div className="min-w-0 space-y-4 md:col-start-2 md:row-start-1 md:space-y-5">{top}</div>}
      <aside className="space-y-3 md:col-start-1 md:row-start-1 md:row-span-2 md:sticky md:top-6 md:max-h-[calc(100vh-3rem)] md:overflow-y-auto md:pr-1">
        {aside}
      </aside>
      <div className="min-w-0 space-y-4 md:col-start-2 md:row-start-2 md:space-y-5">{children}</div>
    </div>
  );
}
