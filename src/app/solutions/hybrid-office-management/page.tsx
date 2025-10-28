import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function HybridOfficeManagementPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5 font-sans">
        <h1 className="text-center text-4xl mb-10">
          Hybrid Office Management
        </h1>
        <p>Spanning the Gap Between Office and Remote Work</p>
      </main>
      <Footer />
    </>
  );
}
