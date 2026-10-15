import { Button } from "@/components/Button";
import { mobileBar, purchase } from "@/data/course";

/** Barra fija inferior, solo visible en móvil (como en el boceto). */
export function MobilePurchaseBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-5 py-3 shadow-float backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-extrabold leading-none text-navy">
            {mobileBar.price}
          </p>
          <p className="mt-1 text-[11px] text-muted">{mobileBar.note}</p>
        </div>
        <Button href={purchase.href} arrow size="sm">
          {purchase.label}
        </Button>
      </div>
    </div>
  );
}
