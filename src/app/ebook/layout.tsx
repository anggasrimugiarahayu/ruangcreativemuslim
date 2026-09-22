import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ruang Ngonten - Ebook Panduan Ngonten',
  description: 'Panduan lengkap dan praktis dari Ruang Ngonten untuk membangun sistem ngonten yang konsisten, terarah, dan menghasilkan. Pelajari strategi rahasia para kreator sukses!',
  openGraph: {
    title: 'Ruang Ngonten - Ebook Panduan Ngonten',
    description: 'Panduan lengkap dan praktis dari Ruang Ngonten untuk membangun sistem ngonten yang konsisten, terarah, dan menghasilkan. Pelajari strategi rahasia para kreator sukses!',
  },
};

export default function EbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
