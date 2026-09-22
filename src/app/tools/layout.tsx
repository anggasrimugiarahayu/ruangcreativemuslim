import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ruang Ngonten - Tools Konten Kreator',
  description: 'Kumpulan tools, template, dan aset premium dari Ruang Ngonten untuk mempermudah proses pembuatan kontenmu. Lebih efisien, lebih profesional!',
  openGraph: {
    title: 'Ruang Ngonten - Tools Konten Kreator',
    description: 'Kumpulan tools, template, dan aset premium dari Ruang Ngonten untuk mempermudah proses pembuatan kontenmu. Lebih efisien, lebih profesional!',
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
