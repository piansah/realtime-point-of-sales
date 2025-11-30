import Script from "next/script";
import DetailOrder from "./_components/detail-order";
import { environment } from "@/configs/environment";

export const metadata = {
  title: "WPU Cafe | Detail Order",
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    snap: any;
  }
}

export default async function DetailOrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // 💡 GUNAKAN VARIABEL BARU DI SINI
  const SNAP_JS_URL = `${environment.NEXT_PUBLIC_SNAP_URL}/snap/snap.js`;

  return (
    <div className="w-full">
      <Script
        src={SNAP_JS_URL} // URL skrip Midtrans yang sudah dikoreksi
        data-client-key={environment.MIDTRANS_CLIENT_KEY}
        strategy="afterInteractive"
      />
      <DetailOrder id={id} />
    </div>
  );
}
